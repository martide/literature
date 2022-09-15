defmodule Literature.PostLive do
  use Literature.Web, :live_view

  alias Literature.Post
  alias Literature.PostFormComponent
  alias Literature.TableComponent

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    {:ok, assign(socket, :return_to, literature_dashboard_path(socket, :list_posts))}
  end

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <.sidebar id="post-sidebar" live_action={@live_action}>
      <:tab title="List Posts" path={literature_dashboard_path(@socket, :list_posts)} icon="table-cells" action={:list_posts} />
      <:tab title="Create Post" path={literature_dashboard_path(@socket, :new_post)} icon="plus-circle" action={:new_post} />
    </.sidebar>
    <.container>
      <.h1><%= @page_title %></.h1>
      <%= if @live_action == :list_posts do %>
        <.live_component
          module={TableComponent}
          id="posts-table"
          items={@posts}
          page={@page}
          params={@params}
          live_action={@live_action}
          columns={columns()}
          base_path={@return_to}
        />
        <%= if @post do %>
          <.delete_modal label={@post.title} item={@post} return_to={@return_to} />
        <% end %>
      <% end %>
      <%= if @live_action in [:new_post, :edit_post] do %>
        <.live_component
          module={PostFormComponent}
          id={@post.id || :new_post}
          post={@post}
          action={@live_action}
          return_to={@return_to}
        />
      <% end %>
    </.container>
    """
  end

  @impl Phoenix.LiveView
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  @impl Phoenix.LiveView
  def handle_event("open_delete_modal", %{"id" => id}, socket) do
    {:noreply, assign(socket, :post, Literature.get_post!(id))}
  end

  @impl Phoenix.LiveView
  def handle_event("close_delete_modal", _params, socket) do
    {:noreply, assign(socket, :post, nil)}
  end

  @impl Phoenix.LiveView
  def handle_event("delete", %{"id" => id}, socket) do
    post = Literature.get_post!(id)
    {:ok, _} = Literature.delete_post(post)

    socket =
      socket
      |> assign(:posts, paginate_posts())
      |> assign(:post, nil)
      |> put_flash(:success, "Post deleted successfully")

    {:noreply, socket}
  end

  defp apply_action(socket, :index, _params) do
    push_patch(socket, to: literature_dashboard_path(socket, :list_posts))
  end

  defp apply_action(socket, :list_posts, params) do
    socket
    |> assign(paginate_posts(params))
    |> assign(:params, params)
    |> assign(:page_title, "Posts")
    |> assign(:post, nil)
  end

  defp apply_action(socket, :new_post, _params) do
    socket
    |> assign(:page_title, "New Post")
    |> assign(:post, %Post{})
  end

  defp apply_action(socket, :edit_post, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Post")
    |> assign(:post, Literature.get_post!(id))
  end

  defp paginate_posts(params \\ %{}) do
    page = Literature.paginate_posts(params)

    Map.new()
    |> Map.put(:posts, page.entries)
    |> Map.put(:page, page)
  end

  defp columns do
    [
      {:title, "Title"},
      {:slug, "Slug"}
    ]
  end
end
