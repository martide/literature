defmodule Literature.RSSController do
  use Literature.Web, :controller

  alias Atomex.Entry
  alias Atomex.Feed
  alias Literature.Repo

  @default_path "/feed"

  def rss(conn, _params) do
    publication_slug = conn.private[:publication_slug]

    publication =
      Literature.get_publication!(slug: publication_slug) |> Repo.preload(:public_tags)

    base_path = String.replace(current_path(conn), @default_path, "")
    base_url = publication.rss_url <> base_path
    view_module = conn.private.view_module

    favicon_path =
      if function_exported?(view_module, :favicon_path, 1) do
        base_url <> view_module.favicon_path(conn)
      else
        nil
      end

    conn
    |> put_resp_content_type("text/xml")
    |> send_resp(200, render_feed(base_url, favicon_path, publication))
  end

  defp render_feed(base_url, favicon_path, publication) do
    %{
      "status" => "published",
      "publication_slug" => publication.slug,
      "max" => 10
    }
    |> Literature.list_posts()
    |> build_feed(publication, favicon_path, base_url)
  end

  def build_feed(posts, publication, favicon_path, base_url) do
    Feed.new(base_url <> @default_path, DateTime.utc_now(), publication.name)
    |> Feed.add_field(:published, %{}, DateTime.from_naive!(publication.inserted_at, "Etc/UTC"))
    |> maybe_author(publication)
    |> Feed.icon(favicon_path)
    |> Feed.generator("Wordpress", uri: "https://wordpress.org/", version: "6.4.3")
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

    Entry.new(entry_id, DateTime.from_naive!(published_at, "Etc/UTC"), {:cdata, title}, "html")
    |> Entry.link(post_path)
    |> Entry.author(author.name)
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
