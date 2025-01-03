defmodule Literature.PostLive do
  use Literature.Web, :live_view

  import Literature.Cloudflare

  alias Literature.Post
  alias Literature.PostFormComponent
  alias Literature.TableComponent

  @impl Phoenix.LiveView
  def mount(%{"publication_slug" => slug}, _session, socket) do
    socket
    |> assign(:return_to, literature_dashboard_path(socket, :list_posts, slug))
    |> assign(:slug, slug)
    |> then(&{:ok, &1})
  end

  @impl Phoenix.LiveView
  def render(%{socket: %{transport_pid: nil}} = assigns), do: ~H"<.loading_page />"

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <.sidebar_default id="post-sidebar" live_action={@live_action} slug={@slug} socket={@socket} />
    <.container>
      <.h1>{@page_title}</.h1>
      <%= if @live_action == :list_posts do %>
        <.live_component
          module={TableComponent}
          id="posts-table"
          slug={@slug}
          items={@posts}
          page={@page}
          params={@params}
          live_action={@live_action}
          columns={columns()}
          base_path={@return_to}
          new_path={literature_dashboard_path(@socket, :new_post, @slug)}
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
          slug={@slug}
          action={@live_action}
          return_to={@return_to}
          available_languages={[{"", ""}] ++ Literature.Language.available_languages()}
        />
      <% end %>
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

    purge_cloudflare_files(socket, post.slug)

    socket =
      socket
      |> assign(paginate_posts(socket.assigns.params))
      |> assign(:post, nil)
      |> put_flash(:success, "Post deleted successfully")

    {:noreply, socket}
  end

  @impl Phoenix.LiveView
  def handle_info({:redirect, path, {type, msg}}, socket) do
    socket
    |> put_flash(type, msg)
    |> push_navigate(to: path)
    |> then(&{:noreply, &1})
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
    |> assign(:post, %Post{is_published: false})
  end

  defp apply_action(socket, :edit_post, %{"slug" => slug}) do
    socket
    |> assign(:page_title, "Post Settings")
    |> assign(:post, Literature.get_post!(slug: slug, publication_slug: socket.assigns.slug))
  end

  defp paginate_posts(params) do
    params = Map.put(params, "preload", ~w(authors tags)a)
    page = Literature.paginate_posts(params)
    posts = Enum.map(page.entries, &Post.resolve/1)

    Map.new()
    |> Map.put(:posts, posts)
    |> Map.put(:page, page)
  end

  defp columns do
    [
      {:title, "Title"},
      {:status, "Status"},
      {:published_at, "Date Published"}
    ]
  end
end
