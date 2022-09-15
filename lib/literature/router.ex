defmodule Literature.Router do
  @moduledoc """
  Provides LiveView routing for literature.
  """

  @doc """
  Defines a Literature dashboard route.

  It requires a path where to mount the dashboard at and allows options to customize routing.

  ## Examples

  Mount an `literature` dashboard at the path "/literature":

      defmodule MyAppWeb.Router do
        use Phoenix.Router

        import Literature.Router

        scope "/", MyAppWeb do
          pipe_through [:browser]

          literature_dashboard "/literature"
        end
      end
  """
  defmacro literature_dashboard(path, opts \\ []) do
    opts = Keyword.put(opts, :application_router, __CALLER__.module)

    quote bind_quoted: binding() do
      scope path, alias: false, as: false do
        import Phoenix.LiveView.Router, only: [live: 4, live_session: 3]

        pipeline :literature_browser do
          plug(:accepts, ["html"])
          plug(:fetch_session)
          plug(:protect_from_forgery)
        end

        scope path: "/" do
          pipe_through(:literature_browser)

          {session_name, session_opts, route_opts} =
            Literature.Router.__options__(opts, :literature_dashboard, :root_dashboard)

          live_session session_name, session_opts do
            live("/", Literature.PostLive, :index, Keyword.put(route_opts, :as, :literature))

            # Post routes
            live("/posts/page/1", Literature.PostLive, :list_posts, route_opts)
            live("/posts/page/:page", Literature.PostLive, :list_posts, route_opts)
            live("/posts/new", Literature.PostLive, :new_post, route_opts)
            live("/posts/:id/edit", Literature.PostLive, :edit_post, route_opts)

            # Tag routes
            live("/tags/page/1", Literature.TagLive, :list_tags, route_opts)
            live("/tags/page/:page", Literature.TagLive, :list_tags, route_opts)
            live("/tags/new", Literature.TagLive, :new_tag, route_opts)
            live("/tags/:id/edit", Literature.TagLive, :edit_tag, route_opts)

            # Author routes
            live("/authors/page/1", Literature.AuthorLive, :list_authors, route_opts)
            live("/authors/page/:page", Literature.AuthorLive, :list_authors, route_opts)
            live("/authors/new", Literature.AuthorLive, :new_author, route_opts)
            live("/authors/:id/edit", Literature.AuthorLive, :edit_author, route_opts)
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

        import Literature.Router

        scope "/", MyAppWeb do
          pipe_through [:browser]

          literature "/blog"
        end
      end
  """
  defmacro literature(path, opts \\ []) do
    opts = Keyword.put(opts, :application_router, __CALLER__.module)

    quote bind_quoted: binding() do
      scope path, alias: false, as: false do
        import Phoenix.LiveView.Router, only: [live: 4, live_session: 3]

        pipeline :literature_browser do
          plug(:accepts, ["html"])
          plug(:fetch_session)
          plug(:protect_from_forgery)
        end

        scope path: "/" do
          pipe_through(:literature_browser)

          {session_name, session_opts, route_opts} =
            Literature.Router.__options__(opts, :literature, :root)

          live_session session_name, session_opts do
            # Blog routes
            live("/", Literature.BlogLive, :index, route_opts)
            live("/tags", Literature.BlogLive, :tags, route_opts)
            live("/authors", Literature.BlogLive, :authors, route_opts)
            live("/:slug", Literature.BlogLive, :show, route_opts)
          end
        end
      end
    end
  end

  @doc """
  Defines a Literature tag route.

  It requires a path where to mount the tag page at and allows options to customize routing.

  ## Examples

  Mount a `tag` at the path "/tag":

      defmodule MyAppWeb.Router do
        use Phoenix.Router

        import Literature.Router

        scope "/", MyAppWeb do
          pipe_through [:browser]

          literature_tag "/tag"
        end
      end
  """
  defmacro literature_tag(path, opts \\ []) do
    opts = Keyword.put(opts, :application_router, __CALLER__.module)

    quote bind_quoted: binding() do
      scope path, alias: false, as: false do
        import Phoenix.LiveView.Router, only: [live: 4, live_session: 3]

        pipeline :literature_browser do
          plug(:accepts, ["html"])
          plug(:fetch_session)
          plug(:protect_from_forgery)
        end

        scope path: "/" do
          pipe_through(:literature_browser)

          {session_name, session_opts, route_opts} =
            Literature.Router.__options__(opts, :literature_tag, :root)

          live_session session_name, session_opts do
            live("/", Literature.Blog.TagLive, :tag, route_opts)
          end
        end
      end
    end
  end

  @doc false
  def __options__(opts, session_name, root_layout) do
    session_name = Keyword.get(opts, :as, session_name)

    session_opts = [
      root_layout: {Literature.LayoutView, root_layout}
    ]

    route_opts = [
      private: %{
        application_router: Keyword.get(opts, :application_router)
      },
      as: session_name
    ]

    {session_name, session_opts, route_opts}
  end

  @default_assets_path "/literature/assets"
  @gzip_assets Application.compile_env(:literature, :gzip_assets, false)

  @doc """
  Defines routes for Literature static assets.

  Static assets should not be CSRF protected. So they need to be mounted in your
  router in a different pipeline.

  It can take the `path` the literature assets will be mounted at.
  Default path is `"/literature/assets"`.

  ## Usage

  ```elixir
  # lib/my_app_web/router.ex
  use MyAppWeb, :router
  import Literature.Router
  ...

  scope "/" do
    literature_assets()
  end
  ```
  """
  defmacro literature_assets(path \\ @default_assets_path) do
    gzip_assets? = @gzip_assets

    quote bind_quoted: binding() do
      scope "/", Literature do
        pipeline :literature_assets do
          plug(Plug.Static,
            at: path,
            from: :literature,
            only: ~w(css js favicon),
            gzip: gzip_assets?
          )
        end

        pipe_through(:literature_assets)
        get("#{path}/*asset", AssetNotFoundController, :asset, as: :literature_asset)
      end
    end
  end
end
