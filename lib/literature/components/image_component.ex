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
      |> assign_new(:sizes, fn -> nil end)

    ~H"""
    <%= if file = Map.get(@post, @field) do %>
      <%= case get_image_field_size(@post, @field) do %>
        <% {width, height} -> %>
          <picture>
            <source srcset={load_srcset(:webp, {file, @post})} sizes={@sizes} />
            <source srcset={load_srcset(:jpg, {file, @post})} sizes={@sizes} />
            <img
              src={literature_image_url(@post, @field)}
              alt={@alt}
              width={width}
              height={height}
              class={@classes}
              loading={if @lazy_load, do: "lazy"}
            />
          </picture>
        <% _nil -> %>
          <img
            src={literature_image_url(@post, @field)}
            alt={@alt}
            class={@classes}
            loading={if @lazy_load, do: "lazy"}
          />
      <% end %>
    <% end %>
    """
  end

  def parse_image_tag({"img", _, _, _} = image_node) do
    # Still outputs empty image picture tag, will investigate
    # This is for converting <img> tags to <picture> with srcset for responsive images in post content
    src = find_img_attribute(image_node, "src")
    alt = find_img_attribute(image_node, "alt")

    case get_img_size(image_node) do
      {width, height} ->
        # Convert to picture tag AST
        {"p", [],
         [
           {"source", [{"srcset", load_srcset(:webp, src)}], [], %{}},
           {"source", [{"srcset", load_srcset(:jpg, src)}], [], %{}},
           {"img",
            [
              {"src", src},
              {"alt", alt},
              {"width", to_string(width)},
              {"height", to_string(height)},
              {"loading", "lazy"}
            ], [], %{}}
         ], %{}}

      _missing_size ->
        image_node
    end
  end

  defp find_img_attribute(image_node, attr) do
    image_node
    |> Earmark.AstTools.find_att_in_node(attr)
  end

  defp get_img_size(image_node) do
    image_node
    |> find_img_attribute("src")
    |> Helpers.get_dimension()
  end

  def build_images(params) do
    ~w(og_image twitter_image feature_image)
    |> Enum.map(&{&1, params[&1]})
    |> Enum.filter(fn {_, value} -> value end)
    |> Enum.map(&rename_filename/1)
    |> Enum.into(%{})
    |> then(&Map.merge(params, &1))
  end

  defp get_image_field_size(struct, field) do
    struct
    |> literature_image_url(field)
    |> Helpers.get_dimension()
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
