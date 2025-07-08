defmodule Literature.StaticPages.GeneratorTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  alias Literature.Test.StaticPageGenerator

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

  test "generate index" do
    StaticPageGenerator.generate(:index, @endpoint.url())
  end

  test "generate creates static index" do
    StaticPageGenerator.generate(:index, @endpoint.url())
  end
end
