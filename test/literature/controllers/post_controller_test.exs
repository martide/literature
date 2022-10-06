defmodule Literature.PostControllerTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  setup do
    publication = publication_fixture()
    author = author_fixture(publication_id: publication.id)
    tag = tag_fixture(publication_id: publication.id)

    post =
      post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

    %{publication: publication, post: post}
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
