defmodule Literature.PublicationLive do
  use Literature.Web, :live_view

  alias Literature.Publication
  alias Literature.PublicationFormComponent

  @impl Phoenix.LiveView
  def mount(_params, _session, socket) do
    {:ok, assign(socket, :return_to, literature_dashboard_path(socket, :list_publications))}
  end

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <div class={"col-span-5 #{if @live_action != :list_publications, do: "bg-white p-10 rounded-lg shadow-md"}"}>
      <.h1>{@page_title}</.h1>
      <%= if @live_action == :list_publications do %>
        <.card_container>
          <%= for publication <- @publications do %>
            <.card
              item={publication}
              show_path={literature_dashboard_path(@socket, :list_posts, publication.slug)}
              edit_path={literature_dashboard_path(@socket, :edit_publication, publication.slug)}
              create_post_path={literature_dashboard_path(@socket, :new_post, publication.slug)}
            />
          <% end %>
          <%= if Enum.empty?(@publications) do %>
            <p class="font-semibold text-gray-500">No data found. Create a new one!</p>
          <% end %>
        </.card_container>
      <% end %>
      <%= if @live_action in [:new_publication, :edit_publication] do %>
        <.live_component
          module={PublicationFormComponent}
          id={@publication.id || :new_publication}
          publication={@publication}
          action={@live_action}
          return_to={@return_to}
          available_languages={Literature.Language.available_languages()}
        />
      <% end %>
    </div>
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
    {:noreply, assign(socket, :publication, Literature.get_publication!(id))}
  end

  @impl Phoenix.LiveView
  def handle_event("close_delete_modal", _params, socket) do
    {:noreply, assign(socket, :publication, nil)}
  end

  @impl Phoenix.LiveView
  def handle_event("delete", %{"id" => id}, socket) do
    publication = Literature.get_publication!(id)
    {:ok, _} = Literature.delete_publication(publication)

    socket =
      socket
      |> assign(:publications, list_publications())
      |> assign(:publication, nil)
      |> put_flash(:success, "Publication deleted successfully")

    {:noreply, socket}
  end

  @impl Phoenix.LiveView
  def handle_event("show_alert", %{"message" => message, "type" => type}, socket) do
    socket =
      socket
      |> put_flash(String.to_existing_atom(type), message)

    {:noreply, socket}
  end

  defp apply_action(socket, :index, _params) do
    push_patch(socket, to: literature_dashboard_path(socket, :list_publications))
  end

  defp apply_action(socket, :list_publications, _) do
    socket
    |> assign(:publications, list_publications())
    |> assign(:page_title, "Dashboard")
    |> assign(:publication, nil)
  end

  defp apply_action(socket, :new_publication, _params) do
    socket
    |> assign(:page_title, "New Publication")
    |> assign(:publication, %Publication{})
  end

  defp apply_action(socket, :edit_publication, %{"slug" => slug}) do
    socket
    |> assign(:page_title, "Edit Publication")
    |> assign(:publication, Literature.get_publication!(slug: slug))
  end

  defp list_publications,
    do: Literature.list_publications(%{"preload" => ~w(posts authors tags)a})
end
