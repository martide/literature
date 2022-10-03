defmodule Literature.PostControllerTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  @valid_attrs %{
    "editor_json" => ~s"""
    {
      "time" : 1664431480490,
      "blocks" : [
        {
          "id" : "WCoMslqswM",
          "type" : "paragraph",
          "data" : {
            "text" : "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
          }
        },
      ],
      "version" : "2.24.3"
    }
    """,
    "html" =>
      "<p>Hey. Meet the new Editor. On this page you can see it in action ‚Äî try to edit this text.</p>"
  }

  @invalid_attrs %{
    "editor_json" => [],
    "html" => ""
  }

  setup do
    publication = publication_fixture()
    author = author_fixture(publication_id: publication.id)
    tag = tag_fixture(publication_id: publication.id)

    post =
      post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

    %{publication: publication, post: post}
  end

  test "render page for editing post content", %{conn: conn, publication: publication, post: post} do
    conn =
      get(
        conn,
        Routes.literature_dashboard_path(conn, :edit_content, publication.slug, post.slug)
      )

    assert html_response(conn, 200) =~ post.title
    assert html_response(conn, 200) =~ "Save all changes"
    assert html_response(conn, 200) =~ "Discard changes &amp; Back"
  end

  test "save post content redirects when data is valid", %{
    conn: conn,
    publication: publication,
    post: post
  } do
    conn =
      put(
        conn,
        Routes.literature_dashboard_path(conn, :update_content, publication.slug, post.slug),
        post_params: @valid_attrs
      )

    assert get_flash(conn, :success) == "Saved post content successfully"

    assert redirected_to(conn) ==
             Routes.literature_dashboard_path(conn, :list_posts, publication.slug)

    assert post = Literature.get_post!(post.id)
    assert post.editor_json == @valid_attrs["editor_json"]
    assert post.html == [@valid_attrs["html"]]
  end

  test "save post content returns error when data is invalid", %{
    conn: conn,
    publication: publication,
    post: post
  } do
    conn =
      put(
        conn,
        Routes.literature_dashboard_path(conn, :update_content, publication.slug, post.slug),
        post_params: @invalid_attrs
      )

    assert get_flash(conn, :error) == "Failed to save post content"
  end

  test "upload image to post content returns json with success 1 when data is valid", %{
    conn: conn,
    publication: publication,
    post: post
  } do
    params = %{url: "https://www.example.com/image.png"}

    conn =
      post(
        conn,
        Routes.literature_dashboard_path(conn, :upload_image, publication.slug, post.slug, [
          "fetch-url"
        ]),
        params
      )

    assert json_response(conn, 200) == %{"file" => %{"url" => params.url}, "success" => 1}
  end
end
