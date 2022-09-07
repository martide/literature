defmodule Literature.AuthorLive do
  use Literature.Web, :live_view

  alias Literature.Author
  alias Literature.AuthorFormComponent

  @impl Phoenix.LiveView
  def mount(params, session, socket) do
    {:ok, assign(socket, :authors, list_authors())}
  end

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <div class="col-span-1">
      <.sidebar id="author-sidebar" />
    </div>
    <div class="col-span-4 px-10 py-10 rounded-r-lg bg-white">
      <h2 class="font-extrabold text-3xl text-primary-700 mb-5"><%= @page_title %></h2>
      <%= if @live_action == :list_authors do %>
        <.table socket={@socket} id="author-table" items={@authors} columns={columns()} />
      <% end %>
      <%= if @live_action in [:new_author, :edit_author] do %>
        <.live_component module={AuthorFormComponent} id={@author.id || :new_author} author={@author} action={@live_action} return_to={literature_dashboard_path(@socket, :list_authors)} />
      <% end %>
    </div>
    """
  end

  @impl Phoenix.LiveView
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(socket, :list_authors, _params) do
    socket
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

  defp list_authors do
    Literature.list_authors()
  end

  defp columns do
    [
      {:name, "Name"},
      {:slug, "Slug"}
    ]
  end
end
