defmodule Literature.RSSController do
  use Literature.Web, :controller

  alias Atomex.Entry
  alias Atomex.Feed
  alias Literature.Config

  @default_path "/feed"

  def rss(conn, _params) do
    base_path = String.replace(current_path(conn), @default_path, "")
    base_url = Config.feed_url() <> base_path
    publication_slug = conn.private[:publication_slug]
    publication = Literature.get_publication!(slug: publication_slug)

    conn
    |> put_resp_content_type("text/xml")
    |> send_resp(200, render_feed(base_url, publication))
  end

  defp render_feed(base_url, publication) do
    %{
      "status" => "published",
      "publication_slug" => publication.slug,
      "max" => 10
    }
    |> Literature.list_posts()
    |> build_feed(publication, base_url)
  end

  def build_feed(posts, publication, base_url) do
    Feed.new(base_url, DateTime.utc_now(), publication.name)
    |> Feed.author(Config.feed_author(), email: Config.feed_email())
    |> Feed.link(base_url <> @default_path, rel: "self")
    |> Feed.entries(Enum.map(posts, &get_entry(base_url, &1)))
    |> Feed.build()
    |> Atomex.generate_document()
  end

  defp get_entry(base_url, %{
         title: title,
         slug: slug,
         excerpt: excerpt,
         published_at: published_at,
         authors: [author | _]
       }) do
    post_path = "#{base_url}/#{slug}"

    Entry.new(post_path, DateTime.from_naive!(published_at, "Etc/UTC"), title)
    |> Entry.link(post_path)
    |> Entry.author(author.name)
    |> Entry.content(excerpt)
    |> Entry.build()
  end
end
