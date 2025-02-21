defmodule Literature.Router do
  @moduledoc """
  Provides LiveView routing for literature.
  """

  alias Literature.Config

  defmacro __using__(_opts) do
    quote do
      import Literature.Router

      pipeline :dashboard_browser do
        plug(:accepts, ["html"])
        plug(:fetch_session)
        plug(:fetch_flash)
        plug(:protect_from_forgery)
      end

      pipeline :api_browser do
        plug(:accepts, ["json"])
      end

      pipeline :blog_browser do
        plug(:accepts, ["html", "xml"])
      end

      pipeline :cloudflare_cdn do
        plug(:cdn_cache_control)
      end

      pipeline :maybe_redirect do
        plug Literature.Plugs.Redirect
      end

      defp cdn_cache_control(conn, _) do
        conn
        |> put_resp_header(
          "cache-control",
          "public, stale-if-error=90, stale-while-revalidate=30, max-age=30"
        )
        |> put_resp_header("cloudflare-cdn-cache-control", "max-age=#{Config.ttl()}")
      end
    end
  end

  @doc """
  Defines a Literature dashboard route.

  It requires a path where to mount the dashboard at and allows options to customize routing.

  ## Examples

  Mount an `literature` dashboard at the path "/literature":

      defmodule MyAppWeb.Router do
        use Phoenix.Router
        use Literature.Router

        scope "/", MyAppWeb do
          pipe_through [:browser]

          literature_dashboard "/literature"
        end
      end
  """
  defmacro literature_dashboard(path, opts \\ []) do
    opts = Keyword.put(opts, :application_router, __CALLER__.module)

    session_name = Keyword.get(opts, :as, :literature_dashboard)

    quote bind_quoted: binding() do
      scope path, alias: false, as: false do
        import Phoenix.LiveView.Router, only: [live: 4, live_session: 3]

        scope path: "/" do
          pipe_through(:dashboard_browser)

          {session_name, session_opts, route_opts} =
            Literature.Router.__options__(opts, session_name, :root_dashboard, path)

          live_session session_name, session_opts do
            # Publication routes
            live(
              "/",
              Literature.PublicationLive,
              :index,
              Keyword.put(route_opts, :as, :literature)
            )

            live("/publications", Literature.PublicationLive, :list_publications, route_opts)
            live("/publications/new", Literature.PublicationLive, :new_publication, route_opts)

            live(
              "/publications/:slug/edit",
              Literature.PublicationLive,
              :edit_publication,
              route_opts
            )

            get("/css-:md5", Literature.Assets, :css, route_opts)
            get("/js-:md5", Literature.Assets, :js, route_opts)

            scope "/:publication_slug", Literature do
              # Post routes
              live("/posts", PostLive, :list_posts, route_opts)
              live("/posts/new", PostLive, :new_post, route_opts)
              live("/posts/:slug/edit", PostLive, :edit_post, route_opts)
              post("/posts/:slug/*path", PostController, :upload_image, route_opts)

              # Tag routes
              live("/tags", TagLive, :list_tags, route_opts)
              live("/tags/new", TagLive, :new_tag, route_opts)
              live("/tags/:slug/edit", TagLive, :edit_tag, route_opts)
              live("/tags/:slug/sort-posts", SortTagPostsLive, :sort_tag_posts, route_opts)

              # Author routes
              live("/authors", AuthorLive, :list_authors, route_opts)
              live("/authors/new", AuthorLive, :new_author, route_opts)
              live("/authors/:slug/edit", AuthorLive, :edit_author, route_opts)

              # Redirect routes
              live("/redirects", RedirectLive, :list_redirects, route_opts)
            end
          end
        end
      end
    end
  end

  @doc """
  Defines a Literature route.

  It requires a path where to mount the public page at and allows options to customize routing.

  ## Examples

  Mount a `blog` at the path "/blog":

      defmodule MyAppWeb.Router do
        use Phoenix.Router
        use Literature.Router

        scope "/", MyAppWeb do
          pipe_through [:browser]

          literature "/blog"
        end
      end
  """

  defmacro literature(path, opts \\ []) do
    opts = Keyword.put(opts, :application_router, __CALLER__.module)

    # :index_pages to enable index pagination
    routes = Keyword.get(opts, :only, ~w(index index_pages tags authors show)a)

    # Custom routes to enable /tags/:tag_slug or /authors/:author_slug routes
    # Possible value for now is [:show_tag, :show_author]
    custom_routes = Keyword.get(opts, :custom_routes, [])

    session_name = Keyword.get(opts, :as, :literature)

    # Opt to create routes on the root path without the publication slug
    root? = Keyword.get(opts, :root, false)

    if Keyword.has_key?(opts, :publication_slug) do
      IO.warn(
        ":publication_slug option is deprecated, please use :publication instead.",
        Macro.Env.stacktrace(__ENV__)
      )
    end

    publication_slug =
      Keyword.get_lazy(opts, :publication, fn ->
        Keyword.get_lazy(opts, :publication_slug, fn ->
          raise "Missing mandatory :publication option."
        end)
      end)

    view_module =
      Keyword.get_lazy(opts, :view_module, fn ->
        raise "Missing mandatory :view_module option."
      end)

    quote bind_quoted: binding() do
      scope path, alias: false, as: false do
        import Phoenix.LiveView.Router, only: [live: 4, live_session: 3]

        scope path: "/" do
          pipe_through(:blog_browser)

          {session_name, session_opts, route_opts} =
            Literature.Router.__options__(opts, session_name, :root, path)

          scope "/#{if root?, do: "", else: publication_slug}", Literature do
            pipe_through(:maybe_redirect)

            get("/feed", RSSController, :rss, route_opts)

            live_session session_name, session_opts do
              # Blog routes
              if :index in routes do
                live("/", BlogLive, :index, route_opts)
              end

              if :index_pages in routes do
                live("/page/:page", BlogLive, :index, route_opts)
              end

              if :tags in routes do
                live("/tags", BlogLive, :tags, route_opts)
              end

              if :authors in routes do
                live("/authors", BlogLive, :authors, route_opts)
              end

              if :search in routes do
                live("/search/page/:page", BlogLive, :search, route_opts)
                live("/search", BlogLive, :search, route_opts)
              end

              if :show in routes do
                pipe_through(:cloudflare_cdn)
                live("/:slug", BlogLive, :show, route_opts)
              end

              custom_show_author_route(custom_routes, route_opts)
              custom_show_tag_route(custom_routes, route_opts)
            end
          end
        end
      end
    end
  end

  defmacro custom_show_author_route(custom_routes, route_opts) do
    quote do
      if :show_author in unquote(custom_routes) do
        live("/authors/:author_slug", BlogLive, :show_author, unquote(route_opts))
      end
    end
  end

  defmacro custom_show_tag_route(custom_routes, route_opts) do
    quote do
      if :show_tag in unquote(custom_routes) do
        live("/tags/:tag_slug", BlogLive, :show_tag, unquote(route_opts))
      end

      if :show_tag_pages in unquote(custom_routes) do
        live("/tags/:tag_slug/page/:page", BlogLive, :show_tag, unquote(route_opts))
      end
    end
  end

  @doc """
  Defines a Literature API route.

  ## Examples

      defmodule MyAppWeb.Router do
        use Phoenix.Router
        use Literature.Router

        literature_api "/api"
      end
  """
  defmacro literature_api(path, opts \\ []) do
    session_name = Keyword.get(opts, :as, :literature)

    quote bind_quoted: binding() do
      scope path, alias: false, as: session_name do
        scope "/", Literature do
          pipe_through(:api_browser)

          post("/author", ApiController, :author)
          post("/tag", ApiController, :tag)
          post("/post", ApiController, :post)
        end
      end
    end
  end

  @doc false
  def __options__(opts, session_name, root_layout, path) do
    publication_slug = Keyword.get(opts, :publication) || Keyword.get(opts, :publication_slug)
    root? = Keyword.get(opts, :root, false)

    session_opts = [
      root_layout: {Literature.LayoutView, root_layout},
      session: %{
        "application_router" => Keyword.get(opts, :application_router),
        "publication_slug" => publication_slug,
        "view_module" => Keyword.get(opts, :view_module),
        "error_view_module" => Keyword.get(opts, :error_view_module),
        "custom_routes" => Keyword.get(opts, :custom_routes)
      }
    ]

    # For handling redirects with root? enabled
    scope = "/#{if root?, do: "", else: "#{publication_slug}"}"

    root_path =
      String.replace_suffix(path, "/", "") <> scope

    routes = Keyword.get(opts, :only, ~w(index index_pages tags authors show)a)

    route_opts = [
      private: %{
        application_router: Keyword.get(opts, :application_router),
        publication_slug: publication_slug,
        view_module: Keyword.get(opts, :view_module),
        root_path: root_path,
        routes: routes
      },
      as: session_name
    ]

    {session_name, session_opts, route_opts}
  end

  @doc """
  Defines routes for Literature static assets.

  Static assets should not be CSRF protected. So they need to be mounted in your
  router in a different pipeline.

  It can take the `path` the literature assets will be mounted at.

  ## Usage

  ```elixir
  # lib/my_app_web/router.ex
  use MyAppWeb, :router
  import Literature.Router
  ...

  scope "/" do
    literature_assets("/")
  end
  ```
  """

  @gzip_assets Application.compile_env(:literature, :gzip_assets, true)

  defmacro literature_assets(path) do
    gzip_assets? = @gzip_assets

    quote bind_quoted: binding() do
      pipeline :literature_assets do
        plug(Plug.Static,
          at: "#{path}/assets",
          from: :literature,
          only: ~w(css js favicon),
          gzip: gzip_assets?
        )
      end

      pipe_through(:literature_assets)

      get("#{path}/assets/*asset", Literature.AssetNotFoundController, :asset,
        as: :literature_asset
      )
    end
  end
end
