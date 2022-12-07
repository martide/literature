defmodule Literature.Sitemap do
  @moduledoc false

  alias Literature.{Author, Config, Post, Tag}
  alias Sitemapper.URL

  defdelegate where_publication(schema, attrs), to: Literature.QueryHelpers

  def generate do
    opts = [
      gzip: false,
      sitemap_url: Config.sitemap_url(),
      store: Sitemapper.FileStore,
      store_config: [
        path: Config.sitemap_path()
      ]
    ]

    literature_sitemap_paths()
    |> Stream.map(fn path ->
      %URL{
        loc: Config.sitemap_url() <> path,
        priority: 0.5,
        lastmod: Date.utc_today(),
        changefreq: Config.sitemap_changefreq()
      }
    end)
    |> Sitemapper.generate(opts)
    |> Sitemapper.persist(opts)
    |> Sitemapper.ping(opts)
    |> Stream.run()
  end

  def literature_sitemap_paths do
    Config.repo().transaction(fn ->
      Config.sitemap_router().__routes__()
      |> Stream.filter(&is_blog_path/1)
      |> Stream.map(&replace_slug/1)
      |> Enum.to_list()
    end)
    |> elem(1)
    |> List.flatten()
  end

  defp is_blog_path(%{metadata: %{log_module: Literature.BlogLive}}), do: true
  defp is_blog_path(_), do: false

  defp replace_slug(route) do
    if String.contains?(route.path, ":slug") do
      attrs = publication_attrs(route)

      replace_with_author_slugs(route.path, attrs) ++
        replace_with_tag_slugs(route.path, attrs) ++
        replace_with_post_slugs(route.path, attrs)
    else
      route.path
    end
  end

  defp publication_attrs(%{
         metadata: %{phoenix_live_view: {_, _, _, %{extra: %{session: session}}}}
       }),
       do: Map.take(session, ~w(publication_slug))

  defp replace_with_author_slugs(path, attrs) do
    Author
    |> where_publication(attrs)
    |> Config.repo().stream()
    |> Stream.map(&String.replace(path, ":slug", &1.slug))
    |> Enum.to_list()
  end

  defp replace_with_tag_slugs(path, attrs) do
    Tag
    |> where_publication(attrs)
    |> Config.repo().stream()
    |> Stream.map(&String.replace(path, ":slug", &1.slug))
    |> Enum.to_list()
  end

  defp replace_with_post_slugs(path, attrs) do
    Post
    |> where_publication(attrs)
    |> Config.repo().stream()
    |> Stream.map(&String.replace(path, ":slug", &1.slug))
    |> Enum.to_list()
  end
end
