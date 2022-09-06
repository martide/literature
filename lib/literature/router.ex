defmodule Literature.Router do
  @moduledoc """
  Provides LiveView routing for literature.
  """

  @gzip_assets Application.compile_env(:literature, :gzip_assets, false)

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
    quote bind_quoted: binding() do
      scope path, alias: false, as: false do
        import Phoenix.LiveView.Router, only: [live: 4, live_session: 3]

        pipeline :literature_assets do
          plug Plug.Static,
            at: Path.join(path, "assets"),
            from: :literature,
            only: ~w(css js),
            gzip: @gzip_assets
        end

        pipeline :literature_browser do
          plug :accepts, ["html"]
          plug :fetch_session
          plug :protect_from_forgery
        end

        scope path: "/" do
          pipe_through(~w(literature_assets literature_browser)a)

          {session_name, session_opts, route_opts} = Literature.Router.__options__(opts)

          live_session session_name, session_opts do
            live "/", Literature.PageLive, :root, route_opts
            live "/authors", Literature.AuthorLive, :index, route_opts
            live "/posts", Literature.PostLive, :index, route_opts
            live "/tags", Literature.TagLive, :index, route_opts
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

    {session_name, session_opts, as: session_name}
  end
end
