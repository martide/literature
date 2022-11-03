defmodule Literature.MetaTagHelpers do
  @moduledoc false
  use Phoenix.HTML

  @metatags %{
    "og_type" => "website",
    "og_locale" => "en",
    "twitter_card" => "summary_large_image"
  }

  @doc """
  Render default meta tags
  """
  def render_all_tags(tags, current_url) do
    [
      render_tag_default(tags),
      render_tag_og(tags, current_url),
      render_tag_twitter(tags, current_url)
    ]
  end

  defp render_tag_default(tags) do
    [
      content_tag(:title, get_tag_value(tags, "title", "meta_title")),
      tag(:meta,
        content: get_tag_value(tags, "description", "meta_description"),
        name: "description"
      ),
      if meta_keywords = get_tag_value(tags, "meta_keywords", "meta_keywords") do
        tag(:meta, content: meta_keywords, name: "keywords")
      end
    ]
    |> Enum.reject(&is_nil/1)
  end

  defp render_tag_og(tags, current_url) do
    [
      tag(:meta, content: get_tag_value(tags, "og_type", "og_type"), property: "og:type"),
      tag(:meta, content: get_tag_value(tags, "og_locale", "og_locale"), property: "og:locale"),
      tag(:meta, content: current_url, property: "og:url"),
      tag(:meta, content: get_tag_value(tags, "title", "og_title"), property: "og:title"),
      tag(:meta,
        content: get_tag_value(tags, "description", "og_description"),
        property: "og:description"
      ),
      tag(:meta, content: get_tag_value(tags, "image", "og_image"), property: "og:image")
    ]
  end

  defp render_tag_twitter(tags, current_url) do
    [
      tag(:meta,
        content: get_tag_value(tags, "twitter_card", "twitter_card"),
        name: "twitter:card"
      ),
      tag(:meta, content: current_url, name: "twitter:url"),
      tag(:meta,
        content: get_tag_value(tags, "title", "twitter_title"),
        name: "twitter:title"
      ),
      tag(:meta,
        content: get_tag_value(tags, "description", "twitter_description"),
        name: "twitter:description"
      ),
      tag(:meta,
        content: get_tag_value(tags, "image", "twitter_image"),
        name: "twitter:image"
      )
    ]
  end

  defp get_tag_value(tags, default_key, key) do
    tags[key] || tags[default_key] || @metatags[key]
  end
end
