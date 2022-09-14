defmodule Literature.BlogLive do
  use Literature.Web, :live_view

  import Literature.AuthorPageComponent
  import Literature.HomePageComponent
  import Literature.PostPageComponent
  import Literature.TagPageComponent
  import Literature.TagsPageComponent
  alias Literature.{Author, Tag, Post, Repo}

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    socket =
      socket
      |> assign(%{post: nil, tag: nil, author: nil})
      |> assign(:posts, Literature.list_posts(preload: ~w(primary_author primary_tag)a))
      |> assign(:tags, Literature.list_tags(preload: ~w(posts)a))

    {:ok, socket, layout: {Literature.LayoutView, "live.html"}}
  end

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <%= case @live_action do %>
      <% :index -> %>
        <.home_page {assigns} />                 
      <% :tags -> %>
        <.tags_page {assigns} />                 
      <% :show -> %>
        <%= if @post do %><.post_page post={@post} /><% end %>
        <%= if @tag do %><.tag_page socket={@socket} {@tag} /><% end %>
        <%= if @author do %><.author_page {@author} /><% end %>
    <% end %>
    """
  end

  def handle_params(%{"slug" => slug}, url, socket) do
    [&Literature.get_post!/1, &Literature.get_tag!/1, &Literature.get_author!/1]
    |> Enum.map(fn fun -> fun.(slug: slug) end)
    |> Enum.find(&is_struct/1)
    |> case do
      %Post{} = post -> assign_to_socket(socket, :post, preload_post(post))
      %Tag{} = tag -> assign_to_socket(socket, :tag, preload_tag(tag))
      %Author{} = author -> assign_to_socket(socket, :author, author)
    end
    |> then(&{:noreply, &1})
  end

  def handle_params(_, _, socket), do: {:noreply, socket}

  defp assign_to_socket(socket, name, struct),
    do: assign(socket, name, Map.from_struct(struct))

  defp preload_tag(tag),
    do: Repo.preload(tag, ~w(posts)a)

  defp preload_post(post),
    do: Repo.preload(post, ~w(primary_author primary_tag)a)
end
