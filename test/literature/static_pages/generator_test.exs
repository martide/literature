defmodule Literature.StaticPages.GeneratorTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  alias Literature.StaticPages.Generator

  @opts [
    publication_slug: "blog",
    path: "/en",
    current_url: @endpoint.url(),
    templates: Literature.StaticPages.Templates,
    page_size: 10
  ]

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
      Generator.generate(:index, @opts)
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
      Generator.generate(:index_page, @opts)

      for page_number <- 1..3 do
        html = read_file("/#{publication.slug}/page/#{page_number}/index.html")
        assert html =~ "<h1>#{publication.name} - Page #{page_number}</h1>"
      end
    end

    test "generate show_post", %{post: post_1, publication: publication, author: author, tag: tag} do
      [post_2, post_3] =
        for i <- 1..2 do
          post_fixture(
            title: "Post #{i}",
            publication_id: publication.id,
            authors_ids: [author.id],
            tags_ids: [tag.id]
          )
        end

      Generator.generate(:show_post, @opts)

      for post <- [post_1, post_2, post_3] do
        html = read_file("/#{publication.slug}/#{post.slug}.html")
        assert html =~ "<h1>#{post.title}</h1>"
      end
    end

    test "generate authors index", %{publication: publication, author: author} do
      Generator.generate(:authors, @opts)
      html = read_file("/#{publication.slug}/authors/index.html")

      assert html =~ "<h1>#{publication.name}</h1>"
      assert html =~ "#{author.name}"
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
