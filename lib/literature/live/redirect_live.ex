defmodule Literature.RedirectLive do
  use Literature.Web, :live_view

  alias Literature.TableComponent
  alias Literature.Tag
  alias Literature.TagFormComponent

  @impl Phoenix.LiveView
  def mount(%{"publication_slug" => slug}, _session, socket) do
    socket
    |> assign(:return_to, literature_dashboard_path(socket, :list_redirects, slug))
    |> assign(:slug, slug)
    |> then(&{:ok, &1})
  end

  @impl Phoenix.LiveView
  def render(%{socket: %{transport_pid: nil}} = assigns), do: ~H"<.loading_page />"

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <.sidebar_default id="redirect-sidebar" live_action={@live_action} slug={@slug} socket={@socket} />
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

  @impl Phoenix.LiveView
  def handle_event("open_delete_modal", %{"id" => id}, socket) do
    {:noreply, assign(socket, :tag, Literature.get_tag!(id))}
  end

  @impl Phoenix.LiveView
  def handle_event("close_delete_modal", _params, socket) do
    {:noreply, assign(socket, :tag, nil)}
  end

  @impl Phoenix.LiveView
  def handle_event("delete", %{"id" => id}, socket) do
    tag = Literature.get_tag!(id)
    {:ok, _} = Literature.delete_tag(tag)

    socket =
      socket
      |> assign(paginate_tags(socket.assigns.params))
      |> assign(:tag, nil)
      |> put_flash(:success, "Tag deleted successfully")

    {:noreply, socket}
  end

  defp apply_action(socket, :list_redirects, params) do
    socket
    |> assign(paginate_tags(params))
    |> assign(:params, params)
    |> assign(:page_title, "Redirects")
    |> assign(:redirect, nil)
  end

  defp apply_action(socket, :new_tag, _params) do
    socket
    |> assign(:page_title, "New Tag")
    |> assign(:tag, %Tag{})
  end

  defp paginate_tags(params) do
    page = Literature.paginate_tags(params)

    Map.new()
    |> Map.put(:tags, page.entries)
    |> Map.put(:page, page)
  end

  defp columns do
    [
      {:name, "Name"},
      {:slug, "Slug"},
      {:visibility, "Visibility"},
      {:posts, "Posts"}
    ]
  end
end
