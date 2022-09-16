defmodule Literature.BlogLive do
  use Literature.Web, :live_view

  import Literature.Helpers,
    only: [atomize_keys_to_string: 1, literature_image_url: 2]

  alias Literature.{Author, Tag, Post, Repo}

  @layout {Literature.LayoutView, "live.html"}

  @impl Phoenix.LiveView
  def mount(%{"slug" => slug}, %{"view_module" => view_module}, socket) do
    [&Literature.get_post!/1, &Literature.get_tag!/1, &Literature.get_author!/1]
    |> Enum.map(fn fun -> fun.(slug: slug) end)
    |> Enum.find(&is_struct/1)
    |> case do
      %Post{} = post -> assign_to_socket(socket, :post, preload_post(post))
      %Tag{} = tag -> assign_to_socket(socket, :tag, preload_tag(tag))
      %Author{} = author -> assign_to_socket(socket, :author, author)
    end
    |> assign(:view_module, view_module)
    |> then(&{:ok, &1, layout: @layout})
  end

  @impl Phoenix.LiveView
  def mount(_params, %{"view_module" => view_module}, socket) do
    {:ok, assign(socket, :view_module, view_module), layout: @layout}
  end

  def render(%{view_module: view_module, live_action: live_action} = assigns) do
    live_action
    |> case do
      :index ->
        "index.html"

      :tags ->
        "tags.html"

      :show ->
        [
          {assigns[:post], "post.html"},
          {assigns[:tag], "tag.html"},
          {assigns[:author], "author.html"}
        ]
        |> Enum.find(fn {assign, _} -> is_map(assign) end)
        |> elem(1)
    end
    |> then(&Phoenix.View.render(view_module, &1, assigns))
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
    |> convert_name_to_title()
    |> convert_image_to_url()
    |> atomize_keys_to_string()
    |> then(&assign(socket, :meta_tags, &1))
  end

  defp convert_name_to_title(author_or_tag),
    do: Map.put_new(author_or_tag, :title, author_or_tag[:name])

  defp convert_image_to_url(author_or_tag_or_post) do
    author_or_tag_or_post
    |> Map.put(:og_image, literature_image_url(author_or_tag_or_post, :og_image))
    |> Map.put(:twitter_image, literature_image_url(author_or_tag_or_post, :twitter_image))
  end

  defp preload_tag(tag),
    do: Repo.preload(tag, ~w(posts)a)

  defp preload_post(post),
    do: Repo.preload(post, ~w(primary_author primary_tag)a)
end
