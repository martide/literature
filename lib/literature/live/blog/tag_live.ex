defmodule Literature.Blog.TagLive do
  use Literature.Web, :live_view

  import Literature.TagPageComponent
  alias Literature.Tag

  @impl Phoenix.LiveView
  def mount(params, _session, socket) do
    {:ok, socket, layout: {Literature.LayoutView, "live.html"}}
  end

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
      <.tag_page {@tag} />
    """
  end

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
