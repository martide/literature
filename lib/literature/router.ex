defmodule Literature.Router do
  @moduledoc """
  Provides LiveView routing for literature.
  """

  @doc """
  Defines a Literature route.

  ## Usage

  ```elixir
  # lib/my_app_web/router.ex
  use MyAppWeb, :router
  import Literature.Router
  ...

  scope "/" do
    pipe_through :browser
    live_literature "/blog"
  end
  ```
  """
  @gzip_assets Application.compile_env(:literature, :gzip_assets, false)

  defmacro live_literature(path, opts \\ []) do
    opts = Keyword.put(opts, :application_router, __CALLER__.module)
    gzip_assets? = @gzip_assets

    quote bind_quoted: binding() do
      scope path, alias: false, as: false do
        import Phoenix.LiveView.Router, only: [live: 4, live_session: 3]

        pipeline :literature_assets do
          plug(Plug.Static,
            at: Path.join(path, "assets"),
            from: :literature,
            only: ~w(css js),
            gzip: gzip_assets?
          )
        end

        pipeline :literature_browser do
          plug(:accepts, ["html"])
          plug(:fetch_session)
          plug(:protect_from_forgery)
        end

        scope path: "/" do
          pipe_through([:literature_assets, :literature_browser])

          {session_name, session_opts, route_opts} =
            Literature.Router.__options__(opts, :live_literature)

          live_session session_name, session_opts do
            live("/", Literature.PostLive, :root, route_opts)
            live("/*post", Literature.PostLive, :post, route_opts)
          end
        end
      end
    end
  end

  @doc false
  def __options__(opts, session_name) do
    live_socket_path = Keyword.get(opts, :live_socket_path, "/live")

    {
      session_name,
      [
        root_layout: {Literature.LayoutView, :root}
      ],
      [
        private: %{
          live_socket_path: live_socket_path,
          application_router: Keyword.get(opts, :application_router)
        },
        as: :live_literature
      ]
    }
  end
end
