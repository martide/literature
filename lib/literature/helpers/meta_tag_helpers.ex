defmodule Literature.MetaTagHelpers do
  @moduledoc false
  use Phoenix.Component

  @metatags %{
    "og_type" => "website",
    "og_locale" => "en",
    "twitter_card" => "summary_large_image"
  }

  @doc """
  Render default meta tags
  """
  def meta_tags(assigns) do
    ~H"""
    <.default_tags tags={@tags} />
    <.og_tags tags={@tags} current_url={@current_url} />
    <.twitter_tags tags={@tags} current_url={@current_url} />
    <.article_tags tags={@tags} />
    """
  end

  defp default_tags(assigns) do
    ~H"""
    <%= if title = get_tag_value(@tags, "title", "meta_title") do %>
      <title><%= title %></title>
    <% end %>
    <.meta name="description" content={get_tag_value(@tags, "description", "meta_description")} />
    <.meta name="keywords" content={get_tag_value(@tags, "meta_keywords", "meta_keywords")} />
    """
  end

  defp og_tags(assigns) do
    ~H"""
    <.meta content={get_tag_value(@tags, "og_type", "og_type")} property="og:type" />
    <.meta content={get_tag_value(@tags, "og_locale", "og_locale")} property="og:locale" />
    <.meta content={@current_url} property="og:url" />
    <.meta content={get_tag_value(@tags, "title", "og_title")} property="og:title" />
    <.meta content={get_tag_value(@tags, "description", "og_description")} property="og:description" />
    <.meta content={get_tag_value(@tags, "image", "og_image")} property="og:image" />
    """
  end

  defp twitter_tags(assigns) do
    ~H"""
    <.meta content={get_tag_value(@tags, "twitter_card", "twitter_card")} name="twitter:card" />
    <.meta content={@current_url} name="twitter:url" />
    <.meta content={get_tag_value(@tags, "title", "twitter_title")} name="twitter:title" />
    <.meta
      content={get_tag_value(@tags, "description", "twitter_description")}
      name="twitter:description"
    />
    <.meta content={get_tag_value(@tags, "image", "twitter_image")} name="twitter:image" />
    """
  end

  defp article_tags(assigns) do
    ~H"""
    <.meta
      content={get_tag_value(@tags, "published_at", "published_at")}
      property="article:published_time"
    />
    <.meta
      content={get_tag_value(@tags, "updated_at", "updated_at")}
      property="article:modified_time"
    />
    <.meta
      :for={tag <- get_tag_value(@tags, "tags", "tags") || []}
      content={tag.name}
      property="article:tag"
    />
    """
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
  def publication_language_tags(%{publication: %{locale: locale}} = assigns)
      when is_binary(locale) do
    ~H"""
    <link href={@current_url} hreflang={@publication.locale} rel="alternate" />
    <link href={@current_url} hreflang="x-default" rel="alternate" />
    """
  end

  def publication_language_tags(assigns), do: ~H""

  @doc """
  Render post language tags
  """
  def post_language_tags(%{post: %{locales: locales}} = assigns)
      when is_list(locales) and locales != [] do
    publication_locale = assigns[:publication].locale
    ex_default_locale = assigns[:publication].ex_default_locale

    show_tags? = not is_nil(publication_locale) and publication_locale == ex_default_locale

    assigns =
      assigns
      |> assign(locales: Enum.filter(locales, &(&1.locale == ex_default_locale or show_tags?)))

    ~H"""
    <link :for={locale <- @locales} href={locale.url} hreflang={locale.locale} rel="alternate" />
    """
  end

  def post_language_tags(assigns), do: ~H""

  @doc """
  Render pagination link tags
  """
  def pagination_link_tags(%{routes: _routes} = assigns) do
    ~H"""
    <.pagination_link_tags :if={:index_pages in @routes} page={@page} current_url={@current_url} />
    """
  end

  def pagination_link_tags(
        %{page: %{page_number: page_number, total_pages: total_pages}} = assigns
      )
      when page_number == 1 and total_pages > 1 do
    ~H"""
    <link rel="next" href={next_url(@current_url, @page.page_number)} />
    """
  end

  def pagination_link_tags(
        %{page: %{page_number: page_number, total_pages: total_pages}} = assigns
      )
      when total_pages > 1 and page_number == total_pages do
    ~H"""
    <link rel="prev" href={prev_url(@current_url, @page.page_number)} />
    """
  end

  def pagination_link_tags(
        %{page: %{page_number: page_number, total_pages: total_pages}} = assigns
      )
      when page_number > 1 and page_number < total_pages do
    ~H"""
    <link rel="next" href={next_url(@current_url, @page.page_number)} />
    <link rel="prev" href={prev_url(@current_url, @page.page_number)} />
    """
  end

  def pagination_link_tags(assigns), do: ~H""

  defp meta(%{content: nil} = assigns), do: ~H""

  defp meta(assigns) do
    assigns =
      assigns
      |> assign_new(:name, fn -> nil end)
      |> assign_new(:property, fn -> nil end)

    ~H"""
    <meta name={@name} content={@content} property={@property} />
    """
  end

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
