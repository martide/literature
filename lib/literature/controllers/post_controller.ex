defmodule Literature.PostController do
  use Literature.Web, :controller

  def upload_image(conn, %{"image" => image} = params) do
    params
    |> get_post()
    |> Literature.update_post(%{"upload_image" => image})
    |> case do
      {:ok, post} ->
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

      {:error, %Ecto.Changeset{}} ->
        conn
        |> put_resp_content_type("application/json")
        |> send_resp(400, Jason.encode!(%{success: 0}))
    end
  end

  def upload_image(conn, %{"url" => url}) do
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, Jason.encode!(%{success: 1, file: %{url: url}}))
  end

  defp get_post(%{"slug" => slug, "publication_slug" => publication_slug}),
    do: Literature.get_post!(slug: slug, publication_slug: publication_slug)
end
