defmodule Literature.SitemapTest do
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

    :ok
  end

  test "generate" do
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

    assert :ok == Sitemap.generate()

    sitemap = File.read!(Path.join(Config.sitemap_path(), "sitemap.xml"))

    sitemap1_loc = xpath(sitemap, ~x"//sitemap/loc/text()") |> to_string
    assert sitemap1_loc =~ ~r{#{@host}/?(.*)sitemap-00001.xml}

    sitemap1 = File.read!(Path.join(Config.sitemap_path(), "sitemap-00001.xml"))

    urls =
      sitemap1
      |> xpath(~x"//url/loc/text()"l)
      |> Stream.map(&(&1 |> to_string()))
      |> Enum.to_list()

    assert Routes.literature_path(@endpoint, :index) in urls
    assert Routes.literature_path(@endpoint, :authors) in urls
    assert Routes.literature_path(@endpoint, :tags) in urls
    assert Routes.literature_path(@endpoint, :show, post.slug) in urls
    assert Routes.literature_path(@endpoint, :show, author.slug) in urls
    assert Routes.literature_path(@endpoint, :show, tag.slug) in urls
  end

  defp xml_dir, do: Config.sitemap_path()
end
