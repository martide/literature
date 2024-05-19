defmodule Literature.ImageComponent do
  @moduledoc false
  use Literature.Web, :html

  alias Literature.Config
  alias Literature.Uploaders.DifferentSizes
  alias Literature.Uploaders.Helpers

  def responsive_img_tag(assigns) do
    assigns =
      assigns
      |> assign_new(:alt, fn -> "" end)
      |> assign_new(:classes, fn -> "object-cover object-center w-full" end)
      |> assign_new(:lazy_load, fn -> true end)

    ~H"""
    <%= if file = Map.get(@post, @field) do %>
      <%= case get_img_size(@post, @field) do %>
        <% {width, height} -> %>
          <picture>
            <source srcset={load_srcset(:jpg, {file, @post})} />
            <source srcset={load_srcset(:webp, {file, @post})} />
            <img src={literature_image_url(@post, @field)} alt={@alt} width={width} height={height} class={@classes} loading={if @lazy_load, do: "lazy", else: []} />
          </picture>
        <% _nil -> %>
          <img src={literature_image_url(@post, @field)} alt={@alt}  class={@classes} loading={if @lazy_load, do: "lazy", else: []} />
      <% end %>
    <% end %>
    """
  end

  def parse_image_tag(tag) do
    if tag =~ "<img" do
      case get_img_size(tag) do
        {width, height} ->
          ~s"""
          <picture>
            <source srcset="#{load_srcset(:jpg, find_img_attribute(tag, "src"))}"/>
            <source srcset="#{load_srcset(:webp, find_img_attribute(tag, "src"))}"/>
            <img src="#{find_img_attribute(tag, "src")}" alt="#{find_img_attribute(tag, "alt")}" width="#{width}" height="#{height}" loading="lazy" />
            <figcaption style="font-style: italic;";>#{find_img_attribute(tag, "caption")}</figcaption>
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

  defp load_srcset(version, {file, scope}) when version in ~w(jpg webp)a do
    {width, _height} = get_original_size(file)

    Range.new(100, width, Config.waffle_width_step())
    |> Enum.map_join(", ", &"#{DifferentSizes.url({file, scope}, {version, &1})} #{&1}w")
  end

  defp load_srcset(version, url) when version in ~w(jpg webp)a do
    url = String.replace(url, "\"", "") |> String.replace(~r/(jpeg|jpg|png)$/, to_string(version))
    {width, height} = get_original_size(%{file_name: url})

    Range.new(100, width, Config.waffle_width_step())
    |> Enum.map_join(", ", &"#{String.replace(url, "w#{width}x#{height}", "w#{&1}")} #{&1}w")
  end

  defp get_original_size(%{file_name: file_name}) do
    Helpers.get_dimension(file_name)
  end

  defp find_img_attribute(tag, attr) when attr in ["alt", "caption"] do
    regex_pattern = ~r/\b#{attr}=["]([^"]+)["]/

    case Regex.run(regex_pattern, tag) do
      [_, attr] -> attr
      _ -> ""
    end
  end

  defp find_img_attribute(tag, attr) do
    tag
    |> String.replace("\"", "")
    |> String.split(" ")
    |> Enum.find(&(&1 =~ attr))
    |> String.split("#{attr}=")
    |> List.last()
  end

  defp get_img_size(tag) do
    tag
    |> find_img_attribute("src")
    |> Helpers.get_dimension()
  end

  defp get_img_size(struct, field) do
    struct
    |> literature_image_url(field)
    |> Helpers.get_dimension()
  end

  defp rename_filename({field, file}) do
    %{width: width, height: height} = Mogrify.verbose(Mogrify.open(file.path))

    file_name =
      Slugy.slugify(
        "#{Path.basename(file.filename, Path.extname(file.filename))} w#{width}x#{height}"
      )

    {field, %{file | filename: "#{file_name}#{Path.extname(file.filename) |> String.downcase()}"}}
  end

  def any_upload_errors?(uploads) do
    upload_names =
      uploads
      |> Map.get(:__phoenix_refs_to_names__, [])
      |> Enum.map(fn {_ref, name} -> name end)

    upload_names
    |> Enum.map(&Map.fetch!(uploads, &1))
    |> Enum.flat_map(&Map.get(&1, :errors, []))
    |> Enum.any?()
  end
end
