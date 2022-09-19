defmodule Literature.AuthorLive do
  use Literature.Web, :live_view

  alias Literature.Author
  alias Literature.AuthorFormComponent
  alias Literature.AuthorPageComponent
  alias Literature.TableComponent

  @impl Phoenix.LiveView
  def mount(%{"publication_slug" => slug}, _session, socket) do
    socket
    |> assign(:return_to, literature_dashboard_path(socket, :list_authors, slug))
    |> assign(:slug, slug)
    |> then(&{:ok, &1})
  end

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <.sidebar id="author-sidebar" live_action={@live_action}>
      <:tab title="Posts" path={literature_dashboard_path(@socket, :list_posts, @slug)} icon="pencil" actions={~w(list_posts new_post edit_post)a} />
      <:tab title="Tags" path={literature_dashboard_path(@socket, :list_tags, @slug)} icon="tag" actions={~w(list_tags new_tag edit_tag)a} />
      <:tab title="Authors" path={literature_dashboard_path(@socket, :list_authors, @slug)} icon="users" actions={~w(list_authors new_author edit_author)a} />
    </.sidebar>
    <.container>
      <.h1><%= @page_title %></.h1>
      <%= if @live_action == :list_authors do %>
        <.live_component
          module={TableComponent}
          id="authors-table"
          items={@authors}
          page={@page}
          params={@params}
          live_action={@live_action}
          columns={columns()}
          base_path={@return_to}
          new_path={literature_dashboard_path(@socket, :new_author, @slug)}
        />
        <%= if @author do %>
          <.delete_modal label={@author.name} item={@author} return_to={@return_to} />
        <% end %>
      <% end %>
      <%= if @live_action in [:new_author, :edit_author] do %>
        <.live_component
          module={AuthorFormComponent}
          id={@author.id || :new_author}
          author={@author}
          slug={@slug}
          action={@live_action}
          return_to={@return_to}
        />
      <% end %>
      <%= if @live_action == :page_layout do %>
        <.live_component
          module={AuthorPageComponent}
          id="author-page"
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
    {:noreply, assign(socket, :author, Literature.get_author!(id))}
  end

  @impl Phoenix.LiveView
  def handle_event("close_delete_modal", _params, socket) do
    {:noreply, assign(socket, :author, nil)}
  end

  @impl Phoenix.LiveView
  def handle_event("delete", %{"id" => id}, socket) do
    author = Literature.get_author!(id)
    {:ok, _} = Literature.delete_author(author)

    socket =
      socket
      |> assign(:authors, paginate_authors())
      |> assign(:author, nil)
      |> put_flash(:success, "Author deleted successfully")

    {:noreply, socket}
  end

  defp apply_action(socket, :list_authors, params) do
    socket
    |> assign(paginate_authors(params))
    |> assign(:params, params)
    |> assign(:page_title, "Authors")
    |> assign(:author, nil)
  end

  defp apply_action(socket, :new_author, _params) do
    socket
    |> assign(:page_title, "New Author")
    |> assign(:author, %Author{})
  end

  defp apply_action(socket, :edit_author, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Author")
    |> assign(:author, Literature.get_author!(id))
  end

  defp apply_action(socket, :page_layout, _params) do
    socket
    |> assign(:page_title, "Page Layout")
  end

  defp paginate_authors(params \\ %{}) do
    page = Literature.paginate_authors(params)

    Map.new()
    |> Map.put(:authors, page.entries)
    |> Map.put(:page, page)
  end

  defp columns do
    [
      {:name, "Name"},
      {:slug, "Slug"}
    ]
  end
end
