defmodule Literature.Sitemap do
  @moduledoc false

  import Literature.QueryHelpers,
    only: [where_publication: 2, where_status: 2]

  alias Literature.Author
  alias Literature.Config
  alias Literature.Post
  alias Literature.Tag
  alias Sitemapper.URL

  def generate(sitemap_opts \\ []) do
    ping? = Keyword.get(sitemap_opts, :ping, false)
    name = Keyword.get(sitemap_opts, :name, nil)

    opts = [
      name: name,
      gzip: false,
      sitemap_url: Config.sitemap_url(),
      store: Sitemapper.FileStore,
      store_config: [
        path: Config.sitemap_path()
      ]
    ]

    literature_sitemap_paths(with: :updated_at)
    |> Stream.map(fn {path, updated_at} ->
      %URL{
        loc: Config.sitemap_url() <> path,
        priority: 0.5,
        lastmod: updated_at,
        changefreq: Config.sitemap_changefreq()
      }
    end)
    |> Sitemapper.generate(opts)
    |> Sitemapper.persist(opts)
    |> ping(ping?, opts)
    |> Stream.run()
  end

  def literature_sitemap_paths(opts \\ []) do
    Config.repo().transaction(fn ->
      Config.sitemap_router().__routes__()
      |> Stream.filter(&is_blog_path/1)
      |> Stream.map(&replace_slug/1)
      |> Enum.to_list()
    end)
    |> parse_result(opts)
  end

  defp parse_result({:ok, result}, with: :updated_at),
    do: List.flatten(result)

  defp parse_result({:ok, result}, []) do
    result
    |> List.flatten()
    |> Enum.map(fn {path, _} -> path end)
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
      {route.path, Date.utc_today()}
    end
  end

  defp publication_attrs(%{
         metadata: %{phoenix_live_view: {_, _, _, %{extra: %{session: session}}}}
       }) do
    session
    |> Map.take(~w(publication_slug))
    |> Map.put("status", "published")
  end

  defp replace_with_author_slugs(path, attrs) do
    Author
    |> where_publication(attrs)
    |> Config.repo().stream()
    |> Stream.map(&{String.replace(path, ":slug", &1.slug), NaiveDateTime.to_date(&1.updated_at)})
    |> Enum.to_list()
  end

  defp replace_with_tag_slugs(path, attrs) do
    Tag
    |> where_publication(attrs)
    |> Config.repo().stream()
    |> Stream.map(&{String.replace(path, ":slug", &1.slug), NaiveDateTime.to_date(&1.updated_at)})
    |> Enum.to_list()
  end

  defp replace_with_post_slugs(path, attrs) do
    Post
    |> where_publication(attrs)
    |> where_status(attrs)
    |> Config.repo().stream()
    |> Stream.map(&{String.replace(path, ":slug", &1.slug), NaiveDateTime.to_date(&1.updated_at)})
    |> Enum.to_list()
  end

  defp ping(sitemap, true, opts), do: Sitemapper.ping(sitemap, opts)
  defp ping(sitemap, false, _), do: sitemap
end
