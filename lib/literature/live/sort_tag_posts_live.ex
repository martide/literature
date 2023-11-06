defmodule Literature.SortTagPostsLive do
  use Literature.Web, :live_view

  alias Literature.Repo

  @impl Phoenix.LiveView
  def mount(%{"publication_slug" => slug}, _session, socket) do
    socket
    |> assign(:return_to, literature_dashboard_path(socket, :list_tags, slug))
    |> assign(:slug, slug)
    |> then(&{:ok, &1})
  end

  @impl Phoenix.LiveView
  def render(%{socket: %{transport_pid: nil}} = assigns), do: ~H"<.loading_page />"

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <.sidebar_default id="tag-sidebar" live_action={@live_action} slug={@slug} socket={@socket} />
    <.container>
      <.h1><%= @page_title %></.h1>
    </.container>
    """
  end

  @impl Phoenix.LiveView
  def handle_params(params, url, socket) do
    socket
    |> assign(:uri, URI.parse(url))
    |> apply_action(socket.assigns.live_action, params)
    |> then(&{:noreply, &1})
  end

  defp apply_action(socket, :sort_tag_posts, %{"slug" => slug}) do
    tag =
      Literature.get_tag!(slug: slug, publication_slug: socket.assigns.slug)
      |> Repo.preload(posts: Literature.preload_tag_posts_with_position())

    assign(socket, page_title: "Sort Posts", tag: tag)
  end
end
