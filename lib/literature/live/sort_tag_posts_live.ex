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
      <.h1>{@page_title}</.h1>
      <.posts_table {assigns} />
    </.container>
    """
  end

  defp posts_table(assigns) do
    ~H"""
    <div class="col-span-4 relative sm:rounded-lg w-full">
      <div class="flex items-center justify-end mb-5">
        <button
          class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0 flex items-center"
          phx-hook="HandleUpdateOrder"
          data-order-attribute="data-order-id"
          data-parent-selector="#tag-posts-drag-n-drop"
          id="save-order-btn"
        >
          <span class="flex-1 ml-2 whitespace-nowrap">Save the order</span>
        </button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="py-3 px-6">Post</th>
            </tr>
          </thead>
          <tbody id="tag-posts-drag-n-drop" data-sort="drag-n-drop-list" phx-hook="HandleDragNDrop">
            <tr
              :for={post <- @tag.posts}
              class="sort-menu cursor-move bg-white border-b hover:bg-gray-50"
              data-order-id={post.id}
            >
              <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                <div class="flex items-center">
                  <.menu_icon />
                  <span class="ml-2">{post.title}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    """
  end

  defp menu_icon(assigns) do
    ~H"""
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      aria-hidden="true"
      class=" h-6 w-6 cursor-move text-gray-300"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
    """
  end

  @impl Phoenix.LiveView
  def handle_params(params, url, socket) do
    socket
    |> assign(:uri, URI.parse(url))
    |> apply_action(socket.assigns.live_action, params)
    |> then(&{:noreply, &1})
  end

  @impl Phoenix.LiveView
  def handle_event("update_order", %{"data" => post_ids}, %{assigns: assigns} = socket) do
    case Literature.sort_tag_posts(post_ids, assigns.tag.id) do
      {posts_count, _} when is_integer(posts_count) ->
        tag =
          Repo.preload(
            assigns.tag,
            [
              posts: fn tag_ids ->
                Literature.preload_tag_posts_with_position(tag_ids)
              end
            ],
            force: true
          )

        {:noreply,
         socket
         |> put_flash(:success, "Posts order updated successfully")
         |> assign(tag: tag)}

      {:error, _} ->
        {:noreply, put_flash(socket, :error, "Failed to update order")}
    end
  end

  defp apply_action(socket, :sort_tag_posts, %{"slug" => slug}) do
    tag =
      Literature.get_tag!(slug: slug, publication_slug: socket.assigns.slug)
      |> Repo.preload(
        posts: fn tag_ids ->
          Literature.preload_tag_posts_with_position(tag_ids)
        end
      )

    assign(socket, page_title: "Sort Posts", tag: tag)
  end
end
