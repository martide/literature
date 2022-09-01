defmodule LiteratureWeb.BlogController do
  use LiteratureWeb, :controller

  alias Literature.Blog
  alias Literature.Blog.Post

  def index(conn, _params) do
    posts = Blog.list_posts()
    render(conn, "index.html", posts: posts)
  end
end
