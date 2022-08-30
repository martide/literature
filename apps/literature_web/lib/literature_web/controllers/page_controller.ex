defmodule LiteratureWeb.PageController do
  use LiteratureWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
