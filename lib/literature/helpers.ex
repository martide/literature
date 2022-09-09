defmodule Literature.Helpers do
  @moduledoc false

  # Routing Helpers

  @doc """
  Construct a path to the blog page.
  """
  def literature_path(conn_or_socket, action, params \\ %{})

  def literature_path(conn = %Plug.Conn{}, action, params) do
    routes(conn).literature_path(conn, action, params)
  end

  def literature_path(%Phoenix.LiveView.Socket{router: nil}, _action, _params), do: ""

  def literature_path(socket = %Phoenix.LiveView.Socket{}, action, params) do
    routes(socket).literature_path(socket, action, params)
  end

  def literature_path(socket = %Phoenix.LiveView.Socket{}, action, params, opts) do
    routes(socket).literature_path(socket, action, params, opts)
  end

  @doc """
  Construct a path to the tag page.
  """
  def literature_tag_path(conn_or_socket, action, params \\ %{})

  def literature_tag_path(conn = %Plug.Conn{}, action, params) do
    routes(conn).literature_tag_path(conn, action, params)
  end

  def literature_tag_path(%Phoenix.LiveView.Socket{router: nil}, _action, _params), do: ""

  def literature_tag_path(socket = %Phoenix.LiveView.Socket{}, action, params) do
    routes(socket).literature_tag_path(socket, action, params)
  end

  def literature_tag_path(socket = %Phoenix.LiveView.Socket{}, action, params, opts) do
    routes(socket).literature_tag_path(socket, action, params, opts)
  end

  @doc """
  Construct a path to a dashboard page.
  """
  def literature_dashboard_path(conn_or_socket, action, params \\ %{})

  def literature_dashboard_path(conn = %Plug.Conn{}, action, params) do
    routes(conn).literature_dashboard_path(conn, action, params)
  end

  def literature_dashboard_path(%Phoenix.LiveView.Socket{router: nil}, _action, _params), do: ""

  def literature_dashboard_path(socket = %Phoenix.LiveView.Socket{}, action, params) do
    routes(socket).literature_dashboard_path(socket, action, params)
  end

  def literature_dashboard_path(socket = %Phoenix.LiveView.Socket{}, action, params, opts) do
    routes(socket).literature_dashboard_path(socket, action, params, opts)
  end

  def routes(conn = %Plug.Conn{}) do
    conn.private.application_router.__helpers__()
  end

  def routes(socket = %Phoenix.LiveView.Socket{}) do
    socket.router.__helpers__()
  end
end
