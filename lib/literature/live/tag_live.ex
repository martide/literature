defmodule Literature.TagLive do
  use Literature.Web, :live_view

  alias Literature.Tag
  alias Literature.TagFormComponent
  alias Literature.TableComponent

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    socket =
      socket
      |> assign(:tags, list_tags())
      |> assign(:return_to, literature_dashboard_path(socket, :list_tags))

    {:ok, socket}
  end

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <.sidebar id="tag-sidebar" live_action={@live_action}>
      <:tab title="List Tags" path={literature_dashboard_path(@socket, :list_tags)} icon="table-cells" action={:list_tags} />
      <:tab title="Create Tag" path={literature_dashboard_path(@socket, :new_tag)} icon="plus-circle" action={:new_tag} />
    </.sidebar>
    <.container>
      <.h1><%= @page_title %></.h1>
      <%= if @live_action == :list_tags do %>
        <.live_component
          module={TableComponent}
          id="tags-table"
          items={@tags}
          columns={columns()}
          base_path={@return_to}
        />
        <%= if @tag do %>
          <.delete_modal label={@tag.name} item={@tag} return_to={@return_to} />
        <% end %>
      <% end %>
      <%= if @live_action in [:new_tag, :edit_tag] do %>
        <.live_component
          module={TagFormComponent}
          id={@tag.id || :new_tag}
          tag={@tag}
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
      |> assign(:tags, list_tags())
      |> assign(:tag, nil)
      |> put_flash(:success, "Tag deleted successfully")

    {:noreply, socket}
  end

  defp apply_action(socket, :list_tags, _params) do
    socket
    |> assign(:page_title, "Tags")
    |> assign(:tag, nil)
  end

  defp apply_action(socket, :new_tag, _params) do
    socket
    |> assign(:page_title, "New Tag")
    |> assign(:tag, %Tag{})
  end

  defp apply_action(socket, :edit_tag, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Tag")
    |> assign(:tag, Literature.get_tag!(id))
  end

  defp list_tags do
    Literature.list_tags()
  end

  defp columns do
    [
      {:name, "Name"},
      {:slug, "Slug"},
      {:description, "Description"}
    ]
  end
end
