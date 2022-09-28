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
      {:ok, post} ->
        conn
        |> put_flash(:success, "Saved post content successfully")
        |> redirect(to: literature_dashboard_path(conn, :list_posts, params["publication_slug"]))

      {:error, %Ecto.Changeset{}} ->
        conn
        |> put_flash(:error, "Failed to save post content")
        |> render("content.html", post: get_post(params), slug: params["publication_slug"])
    end
  end

  def get_post(%{"slug" => slug, "publication_slug" => publication_slug}),
    do: Literature.get_post!(slug: slug, publication_slug: publication_slug)
end
