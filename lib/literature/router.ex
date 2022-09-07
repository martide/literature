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

          {session_name, session_opts, route_opts} = Literature.Router.__options__(opts)

          live_session session_name, session_opts do
            live("/", Literature.PageLive, :root, route_opts)

            # Author routes
            live("/authors", Literature.AuthorLive, :index, route_opts)
            live("/authors/new", Literature.AuthorLive, :new, route_opts)
            live("/authors/:id/edit", Literature.AuthorLive, :edit, route_opts)

            # Post routes
            live("/posts", Literature.PostLive, :index, route_opts)

            # Tag routes
            live("/tags", Literature.TagLive, :index, route_opts)

            live("/*page", Literature.PageLive, :page, route_opts)
          end
        end
      end
    end
  end

  @doc false
  def __options__(opts) do
    session_name = Keyword.get(opts, :as, :literature_dashboard)

    session_opts = [
      root_layout: {Literature.LayoutView, :root}
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
