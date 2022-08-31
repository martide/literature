defmodule Literature.BeaconDataSource do
  @behaviour Beacon.DataSource.Behaviour

  alias Literature.Blog

  def live_data("martide_blog", ["blog"], _params),
    do: %{
      posts: [
        %{title: "Post 1", slug: "post-1", html: "<h1>Hello World</h1>"},
        %{title: "Post 1", slug: "post-1", html: "<h1>Hello World</h1>"},
        %{title: "Post 1", slug: "post-1", html: "<h1>Hello World</h1>"},
        %{title: "Post 1", slug: "post-1", html: "<h1>Hello World</h1>"}
      ]
    }

  def live_data("martide_blog", ["blog"], _params),
    do: %{posts: Blog.list_posts()}

  def live_data("martide_blog", ["blog", slug], _params),
    do: %{post: Blog.get_post!(slug)}

  def live_data(_, _, _), do: %{}
end
