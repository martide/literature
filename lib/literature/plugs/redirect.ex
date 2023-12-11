defmodule Literature.Plugs.Redirect do
  @moduledoc """
  This plug is responsible for maybe redirecting requests from one path
  to another inside a publication.
  """
  import Phoenix.Controller, only: [redirect: 2]
  import Plug.Conn, only: [halt: 1, put_status: 2]

  def init(options), do: options

  def call(conn, _opts) do
    with "GET" <- conn.method,
         publication_slug when not is_nil(publication_slug) <-
           conn.private[:publication_slug],
         root_path when not is_nil(root_path) <-
           conn.private[:root_path] do
      # Parse path after root_path
      {base_path, current_path} =
        parse_paths(conn.request_path, root_path)

      case Literature.get_redirect!(publication_slug: publication_slug, from: current_path) do
        nil ->
          conn

        redirect ->
          new_path = "#{base_path}#{root_path}#{redirect.to}"

          conn
          |> put_status(redirect.type)
          |> redirect(to: new_path)
          |> halt()
      end
    else
      _ ->
        conn
    end
  end

  defp parse_paths(request_path, root_path) do
    [base_path, current_path] =
      String.split(request_path, root_path, parts: 2)

    # Match empty path with /
    current_path =
      case current_path do
        "" -> "/"
        _ -> current_path
      end

    {base_path, current_path}
  end
end
