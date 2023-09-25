defmodule Literature.TagLive do
  use Literature.Web, :live_view

  alias Literature.TableComponent
  alias Literature.Tag
  alias Literature.TagFormComponent

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
    <.sidebar id="tag-sidebar" live_action={@live_action}>
      <:tab
        title="Posts"
        path={literature_dashboard_path(@socket, :list_posts, @slug)}
        icon="pencil"
        actions={~w(list_posts new_post edit_post)a}
      />
      <:tab
        title="Tags"
        path={literature_dashboard_path(@socket, :list_tags, @slug)}
        icon="tag"
        actions={~w(list_tags new_tag edit_tag)a}
      />
      <:tab
        title="Authors"
        path={literature_dashboard_path(@socket, :list_authors, @slug)}
        icon="users"
        actions={~w(list_authors new_author edit_author)a}
      />
    </.sidebar>
    <.container>
      <.h1><%= @page_title %></.h1>
      <%= if @live_action == :list_tags do %>
        <.live_component
          module={TableComponent}
          id="tags-table"
          slug={@slug}
          items={@tags}
          page={@page}
          params={@params}
          live_action={@live_action}
          columns={columns()}
          base_path={@return_to}
          new_path={literature_dashboard_path(@socket, :new_tag, @slug)}
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
          slug={@slug}
          action={@live_action}
          return_to={@return_to}
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

  defp apply_action(socket, :list_tags, params) do
    socket
    |> assign(paginate_tags(params))
    |> assign(:params, params)
    |> assign(:page_title, "Tags")
    |> assign(:tag, nil)
  end

  defp apply_action(socket, :new_tag, _params) do
    socket
    |> assign(:page_title, "New Tag")
    |> assign(:tag, %Tag{})
  end

  defp apply_action(socket, :edit_tag, %{"slug" => slug}) do
    socket
    |> assign(:page_title, "Edit Tag")
    |> assign(:tag, Literature.get_tag!(slug: slug, publication_slug: socket.assigns.slug))
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
