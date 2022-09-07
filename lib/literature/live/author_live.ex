defmodule Literature.AuthorLive do
  use Literature.Web, :live_view

  alias Literature.Author
  alias Literature.AuthorFormComponent

  @impl Phoenix.LiveView
  def mount(params, session, socket) do
    {:ok, socket}
  end

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <div class="col-span-1">
      <.sidebar id="author-sidebar" />
    </div>
    <div class="col-span-4 px-10 bg-gray-50 py-10 rounded-r-lg">
      <h2 class="font-extrabold text-3xl text-primary-700 mb-5"><%= @page_title %></h2>
      <%= if @live_action == :index do %>
        <.table id="author-table" />
      <% end %>
      <%= if @live_action in [:new, :edit] do %>
        <.live_component module={AuthorFormComponent} id={@author.id || :new} author={@author} />
      <% end %>
    </div>
    """
  end

  @impl Phoenix.LiveView
  def handle_params(params, _url, socket) do
    {:noreply, apply_action(socket, socket.assigns.live_action, params)}
  end

  defp apply_action(socket, :index, _params) do
    socket
    |> assign(:page_title, "Authors")
    |> assign(:author, nil)
  end

  defp apply_action(socket, :new, _params) do
    socket
    |> assign(:page_title, "New Author")
    |> assign(:author, %Author{})
  end

  defp apply_action(socket, :edit, %{"id" => id}) do
    socket
    |> assign(:page_title, "Edit Author")
    |> assign(:author, %Author{})
  end
end
