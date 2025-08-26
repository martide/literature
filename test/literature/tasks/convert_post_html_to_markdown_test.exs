defmodule Literature.Tasks.ConvertPostHtmlToMarkdownTest do
  use Literature.DataCase

  import Literature.Test.Fixtures

  alias Literature.Tasks.ConvertPostHtmlToMarkdown

  describe "convert_html_to_markdown/1" do
    setup do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      {:ok, binding()}
    end

    test "converts simple HTML list to markdown", %{
      publication: publication,
      author: author,
      tag: tag
    } do
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

    test "converts table to markdown", %{
      publication: publication,
      author: author,
      tag: tag
    } do
      html = [
        "
        <table>
          <tr>
            <th>With header</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
          </tr>
        </table>
      ",
        "
        <table>
          <tr>
            <td>Without header</td>
            <td>Contact</td>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
          </tr>
        </table>
      "
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
        | With header | Contact |
        | --- | --- |
        | Alfreds Futterkiste | Maria Anders |
        | Centro comercial Moctezuma | Francisco Chang |



        | Without header | Contact |
        | --- | --- |
        | Alfreds Futterkiste | Maria Anders |
        | Centro comercial Moctezuma | Francisco Chang |
        """
        |> String.trim()

      ConvertPostHtmlToMarkdown.run()

      post_with_markdown =
        Literature.get_post!(post_with_html.id)

      assert post_with_markdown.markdown == expected
    end
  end
end
