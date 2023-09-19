defmodule Literature.SitemapControllerTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures
  import SweetXml

  alias Literature.Config
  alias Literature.Sitemap

  @host Config.sitemap_url()

  setup do
    on_exit(fn ->
      xml_dir()
      |> Path.join("sitemap*.xml")
      |> String.to_charlist()
      |> :filelib.wildcard()
      |> Enum.map(&to_string/1)
      |> Enum.each(&File.rm!(&1))
    end)

    publication = publication_fixture(name: "Blog")
    author = author_fixture(name: "Author Test", publication_id: publication.id)
    tag = tag_fixture(name: "Tag Test", publication_id: publication.id)

    post =
      post_fixture(
        title: "Post Test",
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id]
      )

    Sitemap.generate(name: publication.slug)

    {:ok, binding()}
  end

  test "get sitemap.xml", %{conn: conn, publication: publication} do
    conn = get(conn, Routes.literature_path(conn, :sitemap))

    assert response = response(conn, 200)

    sitemap1_loc = xpath(response, ~x"//sitemap/loc/text()") |> to_string
    assert sitemap1_loc =~ ~r{#{@host}/?(.*)sitemap-#{publication.slug}-00001.xml}
  end

  test "get sitemap-00001.xml", %{conn: conn, post: post, author: author, tag: tag} do
    conn = get(conn, Routes.literature_path(conn, :sitemap_1))
    assert response = response(conn, 200)

    urls =
      response
      |> xpath(~x"//url/loc/text()"l)
      |> Stream.map(&(&1 |> to_string()))
      |> Enum.to_list()

    assert endpoint(Routes.literature_path(@endpoint, :index)) in urls
    assert endpoint(Routes.literature_path(@endpoint, :authors)) in urls
    assert endpoint(Routes.literature_path(@endpoint, :tags)) in urls
    assert endpoint(Routes.literature_path(@endpoint, :show, post.slug)) in urls
    assert endpoint(Routes.literature_path(@endpoint, :show, author.slug)) in urls
    assert endpoint(Routes.literature_path(@endpoint, :show, tag.slug)) in urls
  end

  defp endpoint("/"), do: @host

  defp endpoint(path),
    do: "#{@host}#{path}"

  defp xml_dir, do: Config.sitemap_path()
end
