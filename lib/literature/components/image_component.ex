defmodule Literature.ImageComponent do
  @moduledoc false
  use Phoenix.Component

  import Literature.Helpers
  import Phoenix.HTML.Tag

  def responsive_img_tag(assigns) do
    assigns =
      assigns
      |> assign_new(:alt, fn -> "" end)
      |> assign_new(:classes, fn -> "object-cover object-center absolute w-full" end)

    ~H"""
    <picture>
      <source srcset={load_srcset(Map.get(@post, @field), literature_image_url(@post, @field, :jpg))} />
      <source srcset={load_srcset(Map.get(@post, @field), literature_image_url(@post, @field, :webp))} />
      <%= img_tag literature_image_url(@post, @field), class: @classes, alt: @alt %>
    </picture>
    """
  end

  def parse_image_tag(tag) do
    if tag =~ "<img" do
      ~s"""
      <picture>
        <source srcset="#{load_srcset(:jpg, find_img_attribute(tag, "src"))}" />
        <source srcset="#{load_srcset(:webp, find_img_attribute(tag, "src"))}" />
        <img src=#{find_img_attribute(tag, "src")} alt=#{find_img_attribute(tag, "alt")} />
      </picture>
      """
    else
      tag
    end
  end

  def build_images(params) do
    ~w(og_image twitter_image feature_image)
    |> Enum.map(&{&1, params[&1]})
    |> Enum.filter(fn {_, value} -> value end)
    |> Enum.map(&rename_filename/1)
    |> Enum.into(%{})
    |> then(&Map.merge(params, &1))
  end

  defp load_srcset(version, url) when version in ~w(jpg webp)a do
    url = String.replace(url, "\"", "") |> String.replace("jpeg", to_string(version))
    height = get_original_height(%{file_name: url})

    Range.new(100, height, 100)
    |> Enum.map_join(", ", &"#{String.replace(url, "w#{height}", "w#{&1}")} w#{&1}")
  end

  defp load_srcset(file, url) do
    height = get_original_height(file)

    Range.new(100, height, 100)
    |> Enum.map_join(", ", &"#{String.replace(url, "w#{height}", "w#{&1}")} w#{&1}")
  end

  defp get_original_height(%{file_name: file_name}) do
    file_name
    |> Path.basename(Path.extname(file_name))
    |> String.split("w")
    |> List.last()
    |> String.to_integer()
  end

  defp find_img_attribute(tag, attr) do
    tag
    |> String.split(" ")
    |> Enum.find(&(&1 =~ attr))
    |> String.split("#{attr}=")
    |> List.last()
  end

  defp rename_filename({field, file}) do
    %{height: height} = Mogrify.verbose(Mogrify.open(file.path))

    file_name =
      Slugy.slugify("#{Path.basename(file.filename, Path.extname(file.filename))} w#{height}")

    {field, %{file | filename: "#{file_name}#{Path.extname(file.filename)}"}}
  end
end
