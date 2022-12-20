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
        plug(:accepts, ["html"])
      end

      pipeline :cloudflare_cdn do
        plug(:cdn_cache_control)
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
            Literature.Router.__options__(opts, session_name, :root_dashboard)

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

            scope "/:publication_slug", Literature do
              # Post routes
              live("/posts/page/1", PostLive, :list_posts, route_opts)
              live("/posts/page/:page", PostLive, :list_posts, route_opts)
              live("/posts/new", PostLive, :new_post, route_opts)
              live("/posts/:slug/edit", PostLive, :edit_post, route_opts)
              post("/posts/:slug/*path", PostController, :upload_image, route_opts)

              # Tag routes
              live("/tags/page/1", TagLive, :list_tags, route_opts)
              live("/tags/page/:page", TagLive, :list_tags, route_opts)
              live("/tags/new", TagLive, :new_tag, route_opts)
              live("/tags/:slug/edit", TagLive, :edit_tag, route_opts)

              # Author routes
              live("/authors/page/1", AuthorLive, :list_authors, route_opts)
              live("/authors/page/:page", AuthorLive, :list_authors, route_opts)
              live("/authors/new", AuthorLive, :new_author, route_opts)
              live("/authors/:slug/edit", AuthorLive, :edit_author, route_opts)
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

    routes = Keyword.get(opts, :only, ~w(index tags authors show)a)

    session_name = Keyword.get(opts, :as, :literature)

    publication_slug =
      Keyword.get_lazy(opts, :publication_slug, fn ->
        raise "Missing mandatory :publication_slug option."
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
            Literature.Router.__options__(opts, session_name, :root)

          scope "/#{publication_slug}", Literature do
            get("/rss.xml", RSSController, :rss, as: session_name)

            live_session session_name, session_opts do
              # Blog routes
              if :index in routes do
                live("/", BlogLive, :index, route_opts)
                live("/page/:page", BlogLive, :index, route_opts)
              end

              if :tags in routes do
                live("/tags", BlogLive, :tags, route_opts)
              end

              if :authors in routes do
                live("/authors", BlogLive, :authors, route_opts)
              end

              if :show in routes do
                pipe_through(:cloudflare_cdn)
                live("/:slug", BlogLive, :show, route_opts)
              end
            end
          end
        end
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
  def __options__(opts, session_name, root_layout) do
    session_opts = [
      root_layout: {Literature.LayoutView, root_layout},
      session: %{
        "application_router" => Keyword.get(opts, :application_router),
        "publication_slug" => Keyword.get(opts, :publication_slug),
        "view_module" => Keyword.get(opts, :view_module)
      }
    ]

    route_opts = [
      private: %{
        application_router: Keyword.get(opts, :application_router),
        publication_slug: Keyword.get(opts, :publication_slug),
        view_module: Keyword.get(opts, :view_module)
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
