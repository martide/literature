defmodule Literature.PostLive do
  use Literature.Web, :live_view

  @impl Phoenix.LiveView
  def mount(params, session, socket) do
    {:ok, socket}
  end

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <div class="col-span-1">
      <.sidebar id="page-sidebar" />
    </div>
    <div class="col-span-4 px-10">
      <h2 class="font-extrabold text-3xl text-primary-700 mb-5">Posts</h2>
      <.table id="page-table" />
    </div>
    """
  end
end
