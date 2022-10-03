defmodule Literature.PostController do
  use Literature.Web, :controller

  plug(:put_root_layout, {Literature.LayoutView, :root_dashboard})

  def edit_content(conn, params) do
    render(conn, "content.html", post: get_post(params), slug: params["publication_slug"])
  end

  def update_content(conn, %{"post_params" => post_params} = params) do
    post_params = Map.put(post_params, "html", String.split(post_params["html"], ","))

    params
    |> get_post()
    |> Literature.update_post(post_params)
    |> case do
      {:ok, _post} ->
        conn
        |> put_flash(:success, "Saved post content successfully")
        |> redirect(to: literature_dashboard_path(conn, :list_posts, params["publication_slug"]))

      {:error, %Ecto.Changeset{}} ->
        conn
        |> put_flash(:error, "Failed to save post content")
        |> render("content.html", post: get_post(params), slug: params["publication_slug"])
    end
  end

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
