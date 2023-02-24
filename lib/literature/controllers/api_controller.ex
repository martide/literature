defmodule Literature.ApiController do
  @moduledoc false
  use Literature.Web, :controller

  import Literature.DownloadHelpers
  import Literature.ImageComponent

  def author(conn, params) do
    with {:ok, _} <- validate_params(params),
         params <- build_params(params),
         {:ok, author} <- Literature.create_author(params) do
      conn
      |> put_resp_content_type("application/json")
      |> send_resp(
        200,
        Jason.encode!(%{
          status: "success",
          message: "#{author.name} successfully created"
        })
      )
    else
      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_resp_content_type("application/json")
        |> put_status(:unprocessable_entity)
        |> json(%{
          errors: format_errors(changeset.errors),
          message: "Failed to create author"
        })

      {:error, message} ->
        conn
        |> put_resp_content_type("application/json")
        |> send_resp(
          400,
          Jason.encode!(%{
            status: "error",
            message: message
          })
        )
    end
  end

  def tag(conn, params) do
    with {:ok, _} <- validate_params(params),
         params <- build_params(params),
         {:ok, tag} <- Literature.create_tag(params) do
      conn
      |> put_resp_content_type("application/json")
      |> send_resp(
        200,
        Jason.encode!(%{
          status: "success",
          message: "#{tag.name} successfully created"
        })
      )
    else
      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_resp_content_type("application/json")
        |> put_status(:unprocessable_entity)
        |> json(%{
          errors: format_errors(changeset.errors),
          message: "Failed to create tag"
        })

      {:error, message} ->
        conn
        |> put_resp_content_type("application/json")
        |> send_resp(
          400,
          Jason.encode!(%{
            status: "error",
            message: message
          })
        )
    end
  end

  def post(conn, params) do
    with {:ok, _} <- validate_params(params),
         params <- build_params(params),
         {:ok, post} <- Literature.create_post(params) do
      conn
      |> put_resp_content_type("application/json")
      |> send_resp(
        200,
        Jason.encode!(%{
          status: "success",
          message: "#{post.title} successfully created"
        })
      )
    else
      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_resp_content_type("application/json")
        |> put_status(:unprocessable_entity)
        |> json(%{
          errors: format_errors(changeset.errors),
          message: "Failed to create post"
        })

      {:error, message} ->
        conn
        |> put_resp_content_type("application/json")
        |> put_resp_content_type("application/json")
        |> send_resp(
          400,
          Jason.encode!(%{
            status: "error",
            message: message
          })
        )
    end
  end

  defp validate_params(params) do
    cond do
      is_nil(params["publication_id"]) ->
        {:error, "Missing parameter :publication_id"}

      is_nil(params["data"]) ->
        {:error, "Missing parameter :data"}

      true ->
        {:ok, true}
    end
  end

  defp build_params(%{"publication_id" => publication_id, "data" => data}) do
    data
    |> Map.put("publication_id", publication_id)
    |> parse_image("og_image", data["og_image"])
    |> parse_image("twitter_image", data["twitter_image"])
    |> parse_image("feature_image", data["feature_image"])
    |> parse_image("profile_image", data["profile_image"])
    |> parse_image("cover_image", data["cover_image"])
    |> build_images()
    |> parse_authors()
    |> parse_tags()
  end

  defp parse_image(data, field, url) when is_binary(url) do
    filename = String.split(url, "/") |> List.last()

    type =
      filename
      |> Path.extname()
      |> String.trim_leading(".")
      |> String.downcase()

    with {:ok, path} <- download_image(url),
         true <- type in ~w(jpg png jpeg) do
      Map.put(data, field, %Plug.Upload{
        content_type: "image/#{type}",
        filename: filename,
        path: path
      })
    else
      _ ->
        Map.put(data, field, nil)
    end
  end

  defp parse_image(data, _, _), do: data

  defp parse_authors(%{"authors_names" => authors, "publication_id" => publication_id} = data)
       when is_list(authors) do
    authors_ids =
      Enum.map(authors, &Literature.get_author!(name: &1, publication_id: publication_id).id)

    Map.put(data, "authors_ids", authors_ids)
  end

  defp parse_authors(data), do: data

  defp parse_tags(%{"tags_names" => tags, "publication_id" => publication_id} = data)
       when is_list(tags) do
    tags_ids = Enum.map(tags, &Literature.get_tag!(name: &1, publication_id: publication_id).id)
    Map.put(data, "tags_ids", tags_ids)
  end

  defp parse_tags(data), do: data

  def format_errors(errors) do
    errors
    |> Enum.map(fn f ->
      {field, {message, _} = _opts} = f

      field =
        field
        |> Atom.to_string()

      "#{field} #{message}"
    end)
  end
end
