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
      render_tag_twitter(tags, current_url),
      render_tag_article(tags)
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

  defp render_tag_article(tags) do
    [
      tag(:meta,
        content: get_tag_value(tags, "published_at", "published_at"),
        property: "article:published_time"
      ),
      tag(:meta,
        content: get_tag_value(tags, "updated_at", "updated_at"),
        property: "article:modified_time"
      ),
      for tag <- get_tag_value(tags, "tags", "tags") || [] do
        tag(:meta, content: tag.name, property: "article:tag")
      end
    ]
  end

  defp get_tag_value(tags, default_key, key) do
    case tags[key] do
      %Ecto.Association.NotLoaded{} -> nil
      value -> value || tags[default_key] || @metatags[key]
    end
  end

  @doc """
  Render pagination link tags
  """
  def render_pagination_link_tags(
        %{
          live_action: :index,
          page: %{page_number: page_number, total_pages: total_pages}
        },
        current_url
      ) do
    cond do
      page_number == 1 and total_pages > 1 ->
        [tag(:link, rel: "next", href: current_url <> "/page/2")]

      page_number == total_pages and total_pages > 1 ->
        [
          tag(:link,
            rel: "prev",
            href: String.replace(current_url, "/page/#{page_number}", "/page/#{page_number - 1}")
          )
        ]

      page_number > 1 and page_number < total_pages ->
        [
          tag(:link,
            rel: "prev",
            href: String.replace(current_url, "/page/#{page_number}", "/page/#{page_number - 1}")
          ),
          tag(:link,
            rel: "next",
            href: String.replace(current_url, "/page/#{page_number}", "/page/#{page_number + 1}")
          )
        ]

      true ->
        []
    end
  end

  def render_pagination_link_tags(_, _), do: []
end
