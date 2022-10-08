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
  def render_all_tags(tags) do
    [
      render_tag_default(tags),
      render_tag_og(tags),
      render_tag_twitter(tags)
    ]
  end

  defp render_tag_default(tags) do
    [
      content_tag(:title, get_tag_value(tags, "title", "name")),
      tag(:meta, content: get_tag_value(tags, "title", "meta_title"), name: "title"),
      tag(:meta,
        content: get_tag_value(tags, "description", "meta_description"),
        name: "description"
      )
    ]
  end

  defp render_tag_og(tags) do
    [
      tag(:meta, content: get_tag_value(tags, "og_type", "og_type"), property: "og:type"),
      tag(:meta, content: get_tag_value(tags, "og_locale", "og_locale"), property: "og:locale"),
      tag(:meta, content: get_tag_value(tags, "url", "og_url"), property: "og:url"),
      tag(:meta, content: get_tag_value(tags, "title", "og_title"), property: "og:title"),
      tag(:meta,
        content: get_tag_value(tags, "description", "og_description"),
        property: "og:description"
      ),
      tag(:meta, content: get_tag_value(tags, "image", "og_image"), property: "og:image")
    ]
  end

  defp render_tag_twitter(tags) do
    [
      tag(:meta,
        content: get_tag_value(tags, "twitter_card", "twitter_card"),
        name: "twitter:card"
      ),
      tag(:meta, content: get_tag_value(tags, "url", "twitter_url"), name: "twitter:url"),
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
