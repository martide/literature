defmodule Literature.HTMLHelpers do
  @moduledoc false
  import Phoenix.HTML
  def tag(name), do: tag(name, [])

  def tag(name, attrs) when is_list(attrs) do
    {:safe, [?<, to_string(name), sorted_attrs(attrs), ?>]}
  end

  def content_tag(name, do: block) do
    content_tag(name, block, [])
  end

  def content_tag(name, content) do
    content_tag(name, content, [])
  end

  def content_tag(name, attrs, do: block) when is_list(attrs) do
    content_tag(name, block, attrs)
  end

  def content_tag(name, content, attrs) when is_list(attrs) do
    name = to_string(name)
    {:safe, escaped} = html_escape(content)
    {:safe, [?<, name, sorted_attrs(attrs), ?>, escaped, ?<, ?/, name, ?>]}
  end

  defp sorted_attrs(attrs) when is_list(attrs),
    do: attrs |> Enum.sort() |> attributes_escape() |> elem(1)

  defp sorted_attrs(attrs),
    do: attrs |> Enum.to_list() |> sorted_attrs()
end
