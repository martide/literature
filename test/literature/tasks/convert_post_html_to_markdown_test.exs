defmodule Literature.Tasks.ConvertPostHtmlToMarkdownTest do
  use Literature.DataCase

  import Literature.Test.Fixtures

  alias Literature.Tasks.ConvertPostHtmlToMarkdown

  describe "convert_html_list_to_markdown/1" do
    test "converts simple HTML list to markdown" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      html = [
        "<h1>Main Title</h1>",
        "<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>",
        "<p>Another paragraph with a <a href=\"https://example.com\">link</a>.</p>"
      ]

      post_with_html =
        post_fixture(
          title: "Post with html",
          html: html,
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      expected =
        """
        # Main Title

        This is a paragraph with **bold text** and *italic text*.

        Another paragraph with a [link](https://example.com).
        """
        |> String.trim()

      ConvertPostHtmlToMarkdown.run()

      post_with_markdown =
        Literature.get_post!(post_with_html.id)

      assert post_with_markdown.markdown |> String.trim() == expected
    end
  end
end
