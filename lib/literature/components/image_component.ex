defmodule Literature.ImageComponent do
  use Phoenix.Component

  import Literature.Helpers
  import Phoenix.HTML.Tag

  def responsive_img_tag(assigns) do
    assigns =
      assign_new(assigns, :classes, fn -> "object-cover object-center absolute w-full" end)

    ~H"""
    <%= img_tag literature_image_url(@post, :feature_image), srcset: load_srcset(@post) %>
    """
  end

  defp load_srcset(post) do
    Range.new(100, 900, 100)
    |> Enum.to_list()
    |> Enum.map(&{literature_image_url(post, :feature_image, String.to_atom("w#{&1}")), "w#{&1}"})
  end
end
