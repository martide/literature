defmodule Literature.PostControllerTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures
  import Literature.TestHelpers

  alias Literature.Helpers

  setup do
    publication = publication_fixture()
    author = author_fixture(publication_id: publication.id)
    tag = tag_fixture(publication_id: publication.id)

    post =
      post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

    %{publication: publication, post: post}
  end

  test "upload image to post content returns json with success 1 when data is valid",
       %{
         conn: conn,
         publication: publication,
         post: post
       } do
    params = %{image: file_upload_image()}

    conn =
      post(
        conn,
        Routes.literature_dashboard_path(conn, :upload_image, publication.slug, post.slug, [
          "upload-image"
        ]),
        params
      )

    response = json_response(conn, 200)

    uploaded_filename =
      response["file"]["url"]
      |> String.split("/")
      |> Enum.at(-1)

    [_filename | rest] = String.split(uploaded_filename, "-")
    [_dimension | split_uuid] = Enum.reverse(rest)

    uuid =
      split_uuid
      |> Enum.reverse()
      |> Enum.join("-")

    post =
      Map.put(post, :upload_image, %{
        file_name: "image-#{uuid}-w227x95.png",
        updated_at: DateTime.utc_now()
      })

    assert response == %{
             "file" => %{"url" => Helpers.literature_image_url(post, :upload_image)},
             "success" => 1
           }
  end

  test "upload image returns 404 when post does not exist",
       %{conn: conn, publication: publication} do
    params = %{image: file_upload_image()}

    conn =
      post(
        conn,
        Routes.literature_dashboard_path(
          conn,
          :upload_image,
          publication.slug,
          "non-existent-slug",
          [
            "upload-image"
          ]
        ),
        params
      )

    response = json_response(conn, 404)

    assert response == %{"success" => 0, "error" => "Post not found"}
  end
end
