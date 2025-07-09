defmodule Literature.RssHelpers do
  @moduledoc """
  Rss feed generation helpers.
  """
  alias Atomex.Entry
  alias Atomex.Feed

  @default_path "/feed"

  @spec render_feed(
          base_url :: String.t(),
          favicon_path :: String.t() | nil,
          publication :: Literature.Publication.t()
        ) :: String.t()
  def render_feed(base_url, favicon_path, publication) do
    %{
      "status" => "published",
      "publication_slug" => publication.slug,
      "max" => 10
    }
    |> Literature.list_posts()
    |> build_feed(publication, favicon_path, base_url)
  end

  defp build_feed(posts, publication, favicon_path, base_url) do
    Feed.new(base_url <> @default_path, DateTime.utc_now(), publication.name)
    |> maybe_author(publication)
    |> Feed.icon(favicon_path)
    |> Feed.generator("Literature",
      uri: "https://github.com/martide/literature",
      version: Application.spec(:literature, :vsn)
    )
    |> Feed.link(base_url <> @default_path, rel: "self")
    |> feed_categories(publication.public_tags)
    |> Feed.entries(Enum.map(posts, &get_entry(base_url, publication, &1)))
    |> Feed.build()
    |> Atomex.generate_document()
  end

  defp maybe_author(feed, publication) do
    case {publication.rss_author, publication.rss_email} do
      {nil, _} -> feed
      {author, nil} -> Feed.author(feed, author)
      {author, email} -> Feed.author(feed, author, email: email)
    end
  end

  defp feed_categories(feed, []) do
    feed
  end

  defp feed_categories(feed, [tag | rest]) do
    feed_categories(Feed.add_field(feed, :category, %{}, {:cdata, tag.name}), rest)
  end

  defp get_entry(base_url, publication, %{
         id: id,
         title: title,
         slug: slug,
         html: html,
         excerpt: excerpt,
         published_at: published_at,
         updated_at: updated_at,
         authors: [author | _]
       }) do
    post_path = "#{base_url}/#{slug}"
    entry_id = "urn:uuid:#{id}"

    excerpt =
      case excerpt do
        nil -> nil
        _ -> {:cdata, excerpt}
      end

    content =
      case html do
        nil -> nil
        _ -> {:cdata, html}
      end

    Entry.new(entry_id, DateTime.from_naive!(updated_at, "Etc/UTC"), {:cdata, title}, "html")
    |> Entry.link(post_path)
    |> Entry.author(author.name)
    |> Entry.published(DateTime.from_naive!(published_at, "Etc/UTC"))
    |> Entry.summary(excerpt, "html")
    |> maybe_content(publication, content)
    |> Entry.build()
  end

  defp maybe_content(entry, publication, content) do
    case publication.rss_is_excerpt_only do
      false -> Entry.content(entry, content, %{type: "html"})
      _ -> entry
    end
  end
end
