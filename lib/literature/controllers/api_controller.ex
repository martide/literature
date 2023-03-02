defmodule Literature.ApiController do
  @moduledoc false
  use Literature.Web, :controller

  def author(conn, params) do
    with {:ok, _} <- Literature.validate_params(params),
         params <- Literature.build_params(params),
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
    with {:ok, _} <- Literature.validate_params(params),
         params <- Literature.build_params(params),
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
    case oban_post_worker() do
      {oban, oban_job, oban_worker} ->
        params
        |> Map.put("type", "literature_post")
        |> oban_job.new(worker: oban_worker, max_attempts: 3)
        |> oban.insert()

        conn
        |> put_resp_content_type("application/json")
        |> send_resp(
          200,
          Jason.encode!(%{
            status: "success",
            message: "#{params["data"]["title"]} successfully created oban worker"
          })
        )

      _oban ->
        with {:ok, _} <- Literature.validate_params(params),
             params <- Literature.build_params(params),
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
  end

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

  def oban_post_worker, do: Application.get_env(:literature, :oban_job)
end
