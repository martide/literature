defmodule Literature.StaticPages.GeneratorTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  alias Literature.Test.StaticPageGenerator

  setup do
    on_exit(fn ->
      pages_dir()
      |> File.rm_rf!()
    end)

    :ok
  end

  setup do
    publication = publication_fixture(name: "Blog", slug: "blog")
    author = author_fixture(publication_id: publication.id)
    tag = tag_fixture(publication_id: publication.id)

    post =
      post_fixture(
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id],
        html: ["<p>content</p>"],
        locales: [
          %{locale: "en", url: "http://example.com/en"},
          %{locale: "de", url: "http://example.com/de"}
        ]
      )

    {:ok, binding()}
  end

  describe "generate static pages" do
    test "generate index", %{publication: publication} do
      StaticPageGenerator.generate(:index, @endpoint.url())
      html = read_file("/#{publication.slug}/index.html")

      assert html =~ "<h1>#{publication.name}</h1>"
    end

    test "generate index pages", %{publication: publication, author: author, tag: tag} do
      for i <- 1..20 do
        post_fixture(
          title: "Post #{i}",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )
      end

      # 21 posts -> 3 pages -> default 10 per page
      StaticPageGenerator.generate(:index_page, @endpoint.url())

      for page_number <- 1..3 do
        html = read_file("/#{publication.slug}/page/#{page_number}/index.html")
        assert html =~ "<h1>#{publication.name} - Page #{page_number}</h1>"
      end
    end
  end

  defp pages_dir do
    priv_dir = :code.priv_dir(:literature)
    Path.join(priv_dir, "/static/en")
  end

  defp read_file(file_path) do
    pages_dir()
    |> Path.join(file_path)
    |> File.read!()
  end
end
