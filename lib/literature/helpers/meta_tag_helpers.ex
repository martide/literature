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
  Render publication language tags
  """
  def render_publication_language_tags(%Literature.Publication{locale: locale}, current_url)
      when is_binary(locale) do
    [
      [tag(:link, href: current_url, hreflang: locale, rel: "alternate")],
      [tag(:link, href: current_url, hreflang: "x-default", rel: "alternate")]
    ]
  end

  def render_publication_language_tags(_publication, _base_url), do: []

  @doc """
  Render post language tags
  """
  def render_post_language_tags(
        %{locales: locales} = _post,
        %{
          ex_default_locale: ex_default_locale,
          locale: publication_locale
        } = _publication
      )
      when is_list(locales) and locales != [] do
    show_tags? = not is_nil(publication_locale) and publication_locale == ex_default_locale

    locales
    |> Enum.filter(&(&1.locale == ex_default_locale or show_tags?))
    |> Enum.map(fn locale ->
      tag(:link, href: locale.url, hreflang: locale.locale, rel: "alternate")
    end)
  end

  def render_post_language_tags(_post, _publication), do: []

  @doc """
  Render pagination link tags
  """
  def render_pagination_link_tags(
        assigns,
        current_url,
        routes
      ) do
    if :index_pages in routes do
      render_pagination_link_tags(assigns, current_url)
    else
      []
    end
  end

  def render_pagination_link_tags(
        %{
          live_action: :index,
          page: %{page_number: page_number, total_pages: total_pages}
        },
        current_url
      )
      when page_number == 1 and total_pages > 1 do
    # When in first page, next tag only
    [tag(:link, rel: "next", href: next_url(current_url, page_number))]
  end

  def render_pagination_link_tags(
        %{
          live_action: :index,
          page: %{page_number: page_number, total_pages: total_pages}
        },
        current_url
      )
      when total_pages > 1 and page_number == total_pages do
    # When in last page, prev tag only
    [
      tag(:link,
        rel: "prev",
        href: prev_url(current_url, page_number)
      )
    ]
  end

  def render_pagination_link_tags(
        %{
          live_action: :index,
          page: %{page_number: page_number, total_pages: total_pages}
        },
        current_url
      )
      when page_number > 1 and page_number < total_pages do
    [
      tag(:link,
        rel: "prev",
        href: prev_url(current_url, page_number)
      ),
      tag(:link,
        rel: "next",
        href: next_url(current_url, page_number)
      )
    ]
  end

  def render_pagination_link_tags(_, _), do: []

  defp next_url(current_url, page_number) do
    current_url
    |> String.replace("/page/#{page_number}", "")
    |> put_page_number(page_number + 1)
  end

  defp prev_url(current_url, 2), do: String.replace(current_url, "/page/2", "")

  defp prev_url(current_url, page_number),
    do:
      current_url
      |> String.replace("/page/#{page_number}", "")
      |> put_page_number(page_number - 1)

  defp put_page_number(current_url, page_number) do
    current_url
    |> String.replace_suffix("/", "")
    |> Kernel.<>("/page/#{page_number}")
  end
end
