defmodule Literature.RouteHelpers do
  @moduledoc false

  def live_literature_path(conn_or_socket, action, params \\ %{})

  def live_literature_path(conn = %Plug.Conn{}, action, params) do
    routes(conn).live_literature_path(conn, action, params)
  end

  def live_literature_path(%Phoenix.LiveView.Socket{router: nil}, _action, _params), do: ""

  def live_literature_path(socket = %Phoenix.LiveView.Socket{}, action, params) do
    routes(socket).live_literature_path(socket, action, params)
  end

  def live_literature_path(socket = %Phoenix.LiveView.Socket{}, action, params, opts) do
    routes(socket).live_literature_path(socket, action, params, opts)
  end

  def routes(conn = %Plug.Conn{}) do
    conn.private.application_router.__helpers__()
  end

  def routes(socket = %Phoenix.LiveView.Socket{}) do
    socket.router.__helpers__()
  end
end
