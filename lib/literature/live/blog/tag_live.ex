defmodule Literature.Blog.TagLive do
  use Literature.Web, :live_view

  alias Literature.Tag

  @layout {Literature.LayoutView, "live.html"}

  @impl Phoenix.LiveView
  def mount(_params, %{"view_module" => view_module}, socket) do
    {:ok, assign(socket, :view_module, view_module), layout: @layout}
  end

  @impl Phoenix.LiveView
  def render(%{view_module: view_module, live_action: live_action} = assigns) do
    raise live_action
  end

  @impl Phoenix.LiveView
  def handle_params(_params, url, socket) do
    slug = get_tag_name_from_url(url)

    case Literature.get_tag!(slug: slug) do
      %Tag{} = tag ->
        {:noreply, assign(socket, :tag, Map.from_struct(tag))}

      _ ->
        {:noreply, push_patch(socket, to: literature_path(socket, :show, slug))}
    end
  end

  defp get_tag_name_from_url(url) do
    url
    |> String.split("/")
    |> List.last()
  end
end
