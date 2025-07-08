defmodule Literature.StaticPages.MetaTagHelpers do
  @moduledoc """
  Helpers for rendering meta tags in static pages.
  """
  use Phoenix.Component

  import Literature.Helpers,
    only: [atomize_keys_to_string: 1, literature_image_url: 2]

  alias Literature.Author
  alias Literature.Post
  alias Literature.Publication
  alias Literature.Tag

  @metatags %{
    "og_type" => "website",
    "og_locale" => "en",
    "twitter_card" => "summary_large_image"
  }

  @doc """
  Render default meta tags
  """
  attr :tags, :map, required: true
  attr :current_url, :string, required: true

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
      <title>{title}</title>
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
    tags[key] || tags[default_key] || @metatags[key]
  end

  attr :current_url, :string, required: true

  def canonical_tag(assigns) do
    ~H"""
    <link href={canonical_path(@current_url)} rel="canonical" />
    """
  end

  @doc """
  Render publication language tags
  """
  attr :publication, :map, required: true
  attr :current_url, :string, required: true

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
  attr :post, :map, required: true
  attr :publication, :string, required: true

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
  attr :page, :any, default: nil
  attr :current_url, :string, required: true

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

  defp canonical_path(current_url) do
    current_url
    |> String.split("?")
    |> hd()
  end

  defp next_url(current_url, page_number) do
    current_url
    |> String.replace("/page/#{page_number}/index.html", "")
    |> put_page_number(page_number + 1)
  end

  defp prev_url(current_url, page_number),
    do:
      current_url
      |> String.replace("/page/#{page_number}/index.html", "")
      |> put_page_number(page_number - 1)

  defp put_page_number(current_url, page_number) do
    current_url
    |> String.replace_suffix("/", "")
    |> Kernel.<>("/page/#{page_number}/index.html")
  end

  @spec get_default_meta_tags(Publication.t() | Author.t() | Post.t() | Tag.t()) :: map()
  def get_default_meta_tags(struct) do
    struct
    |> Map.take(meta_tag_keys())
    |> maybe_convert_name_to_title(struct)
    |> maybe_put_description(struct)
    |> convert_image_to_url(struct)
    |> atomize_keys_to_string()
  end

  defp maybe_convert_name_to_title(meta_tags, %struct{} = author_or_tag)
       when struct in [Author, Tag, Publication],
       do: Map.put(meta_tags, :title, author_or_tag.name)

  defp maybe_convert_name_to_title(meta_tags, _), do: meta_tags

  defp maybe_put_description(meta_tags, %Post{} = post),
    do: Map.put(meta_tags, :description, post.excerpt)

  defp maybe_put_description(meta_tags, %Author{} = author),
    do: Map.put(meta_tags, :description, author.bio)

  defp maybe_put_description(meta_tags, _), do: meta_tags

  defp convert_image_to_url(meta_tags, resource) do
    {image, publication} =
      case resource do
        %Author{} = author ->
          {literature_image_url(author, :profile_image) ||
             literature_image_url(author, :cover_image), author.publication}

        %struct{} = tag_or_post when struct in [Post, Tag] ->
          {literature_image_url(tag_or_post, :feature_image), tag_or_post.publication}

        publication ->
          {nil, publication}
      end

    # default to publication if resource has no og or twitter image
    Map.merge(meta_tags, %{
      image: image,
      og_image:
        literature_image_url(resource, :og_image) || image ||
          literature_image_url(publication, :og_image),
      twitter_image:
        literature_image_url(resource, :twitter_image) || image ||
          literature_image_url(publication, :twitter_image)
    })
  end

  defp meta_tag_keys do
    [
      :title,
      :meta_title,
      :description,
      :meta_description,
      :meta_keywords,
      :image,
      :og_title,
      :og_image,
      :og_description,
      :twitter_image,
      :twitter_title,
      :twitter_description
    ]
  end
end
