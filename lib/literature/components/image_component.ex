defmodule Literature.ImageComponent do
  @moduledoc false
  use Phoenix.Component

  import Literature.Helpers
  import Phoenix.HTML.Tag

  alias Literature.Config

  def responsive_img_tag(assigns) do
    assigns =
      assigns
      |> assign_new(:alt, fn -> "" end)
      |> assign_new(:classes, fn -> "object-cover object-center w-full" end)
      |> assign_new(:lazy_load, fn -> true end)

    ~H"""
    <%= if file = Map.get(@post, @field) do %>
      <%= case get_img_size(@post, @field) do %>
        <% [width, height] -> %>
          <picture>
            <source srcset={load_srcset(file, literature_image_url(@post, @field, :jpg))} />
            <source srcset={load_srcset(file, literature_image_url(@post, @field, :webp))} />
            <%= img_tag(
              literature_image_url(@post, @field),
              [class: @classes, alt: @alt, width: width, height: height] ++
                if(@lazy_load, do: [loading: "lazy"], else: [])
            ) %>
          </picture>
        <% _nil -> %>
          <%= img_tag(
            literature_image_url(@post, @field),
            [class: @classes, alt: @alt] ++ if(@lazy_load, do: [loading: "lazy"], else: [])
          ) %>
      <% end %>
    <% end %>
    """
  end

  def parse_image_tag(tag) do
    if tag =~ "<img" do
      case get_img_size(tag) do
        [width, height] ->
          ~s"""
          <picture>
            <source srcset="#{load_srcset(:jpg, find_img_attribute(tag, "src"))}"/>
            <source srcset="#{load_srcset(:webp, find_img_attribute(tag, "src"))}"/>
            <img src="#{find_img_attribute(tag, "src")}" alt="#{find_img_alt_attribute(tag)}" width="#{width}" height="#{height}" loading="lazy" />
          </picture>
          """

        _missing_size ->
          tag
      end
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
    url = String.replace(url, "\"", "") |> String.replace(~r/(jpeg|jpg|png)$/, to_string(version))
    [width, height] = get_original_size(%{file_name: url})

    Range.new(100, width, Config.waffle_width_step())
    |> Enum.map_join(", ", &"#{String.replace(url, "w#{width}x#{height}", "w#{&1}")} #{&1}w")
  end

  defp load_srcset(file, url) do
    [width, height] = get_original_size(file)

    Range.new(100, width, Config.waffle_width_step())
    |> Enum.map_join(", ", &"#{String.replace(url, "w#{width}x#{height}", "w#{&1}")} #{&1}w")
  end

  defp get_original_size(%{file_name: file_name}) do
    file_name
    |> get_width_and_height()
    |> Enum.map(&String.to_integer/1)
  end

  defp find_img_attribute(tag, attr) do
    tag
    |> String.replace("\"", "")
    |> String.split(" ")
    |> Enum.find(&(&1 =~ attr))
    |> String.split("#{attr}=")
    |> List.last()
  end

  defp find_img_alt_attribute(tag) do
    regex_pattern = ~r/\balt\s*=\s*["']([^"']+)["']/

    case Regex.run(regex_pattern, tag) do
      [_, alt] -> alt
      _ -> ""
    end
  end

  defp get_img_size(tag) do
    tag
    |> find_img_attribute("src")
    |> get_width_and_height()
  end

  defp get_img_size(struct, field) do
    struct
    |> literature_image_url(field)
    |> get_width_and_height()
  end

  defp get_width_and_height(url) do
    regex = ~r/-w(\d+)x(\d+)\.\w+$/

    case Regex.run(regex, url) do
      [_, width, height] -> [width, height]
      _ -> nil
    end
  end

  defp rename_filename({field, file}) do
    %{width: width, height: height} = Mogrify.verbose(Mogrify.open(file.path))

    file_name =
      Slugy.slugify(
        "#{Path.basename(file.filename, Path.extname(file.filename))} w#{width}x#{height}"
      )

    {field, %{file | filename: "#{file_name}#{Path.extname(file.filename) |> String.downcase()}"}}
  end
end
