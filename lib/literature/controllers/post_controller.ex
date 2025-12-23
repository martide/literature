defmodule Literature.PostController do
  use Literature.Web, :controller

  def upload_image(conn, %{"image" => image} = params) do
    with %Literature.Post{} = post <- get_post(params),
         {:ok, post} <- Literature.update_post(post, %{"upload_image" => rename_filename(image)}) do
      conn
      |> put_resp_content_type("application/json")
      |> send_resp(
        200,
        Jason.encode!(%{
          success: 1,
          file: %{
            url: literature_image_url(post, :upload_image)
          }
        })
      )
    else
      {:error, %Ecto.Changeset{}} ->
        conn
        |> put_resp_content_type("application/json")
        |> send_resp(400, Jason.encode!(%{success: 0}))

      nil ->
        conn
        |> put_resp_content_type("application/json")
        |> send_resp(404, Jason.encode!(%{success: 0, error: "Post not found"}))
    end
  end

  def upload_image(conn, %{"url" => url}) do
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Jason.encode!(%{success: 1, file: %{url: url}}))
  end

  defp get_post(%{"slug" => slug, "publication_slug" => publication_slug}),
    do: Literature.get_post!(slug: slug, publication_slug: publication_slug)

  defp rename_filename(file) do
    {width, height, _} = file.path |> Image.open!() |> Image.shape()

    file_name =
      Slugy.slugify(
        "#{Path.basename(file.filename, Path.extname(file.filename))}-#{Ecto.UUID.generate()} w#{width}x#{height}"
      )

    %{file | filename: "#{file_name}#{Path.extname(file.filename) |> String.downcase()}"}
  end
end
