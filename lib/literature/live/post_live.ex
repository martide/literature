defmodule Literature.PostLive do
  use Literature.Web, :live_view

  def mount(_, _, socket) do
    {:ok, socket}
  end

  def render(assigns) do
    ~H"""
    """
  end
end
