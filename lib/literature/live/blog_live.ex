defmodule Literature.BlogLive do
  use Literature.Web, :live_view

  import Literature.AuthorPageComponent
  import Literature.HomePageComponent
  import Literature.PostPageComponent
  import Literature.TagPageComponent
  import Literature.TagsPageComponent
  import Literature.Helpers, only: [atomize_keys_to_string: 1]

  alias Literature.{Author, Tag, Post, Repo}

  @layout {Literature.LayoutView, "live.html"}

  @impl Phoenix.LiveView
  def mount(%{"slug" => slug}, _session, socket) do
    [&Literature.get_post!/1, &Literature.get_tag!/1, &Literature.get_author!/1]
    |> Enum.map(fn fun -> fun.(slug: slug) end)
    |> Enum.find(&is_struct/1)
    |> case do
      %Post{} = post -> assign_to_socket(socket, :post, preload_post(post))
      %Tag{} = tag -> assign_to_socket(socket, :tag, preload_tag(tag))
      %Author{} = author -> assign_to_socket(socket, :author, author)
    end
    |> then(&{:ok, &1, layout: @layout})
  end

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    {:ok, socket, layout: @layout}
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
        <%= if assigns[:post] do %><.post_page post={@post} /><% end %>
        <%= if assigns[:tag] do %><.tag_page socket={@socket} {@tag} /><% end %>
        <%= if assigns[:author] do %><.author_page {@author} /><% end %>
    <% end %>
    """
  end

  @impl Phoenix.LiveView
  def handle_params(_params, _url, socket) do
    socket
    |> assign(:posts, Literature.list_posts(preload: ~w(primary_author primary_tag)a))
    |> assign(:tags, Literature.list_tags(preload: ~w(posts)a))
    |> then(&{:noreply, &1})
  end

  defp assign_to_socket(socket, name, struct) do
    socket
    |> assign(name, Map.from_struct(struct))
    |> assign_meta_tags(struct)
  end

  defp assign_meta_tags(socket, struct) do
    struct
    |> Map.from_struct()
    |> assign_name_to_title()
    |> atomize_keys_to_string()
    |> then(&assign(socket, :meta_tags, &1))
  end

  defp assign_name_to_title(author_or_tag),
    do: Map.put_new(author_or_tag, :title, author_or_tag[:name])

  defp preload_tag(tag),
    do: Repo.preload(tag, ~w(posts)a)

  defp preload_post(post),
    do: Repo.preload(post, ~w(primary_author primary_tag)a)
end
