defmodule Literature.ApiControllerTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures

  setup do
    %{publication: publication_fixture()}
  end

  describe "POST /api/author" do
    @valid_attrs %{
      name: "some author name"
    }

    test "returns error when :publication_id is missing", %{conn: conn} do
      conn = post(conn, Routes.literature_api_path(conn, :author))

      assert json_response(conn, 400) == %{
               "message" => "Missing parameter :publication_id",
               "status" => "error"
             }
    end

    test "returns error when :data is missing", %{conn: conn, publication: publication} do
      conn = post(conn, Routes.literature_api_path(conn, :author), publication_id: publication.id)

      assert json_response(conn, 400) == %{
               "message" => "Missing parameter :data",
               "status" => "error"
             }
    end

    test "creates an author with valid params", %{conn: conn, publication: publication} do
      conn =
        post(conn, Routes.literature_api_path(conn, :author),
          publication_id: publication.id,
          data: @valid_attrs
        )

      assert json_response(conn, 200) == %{
               "message" => "Successfully created.",
               "status" => "success"
             }
    end

    test "creates an author with invalid params", %{conn: conn, publication: publication} do
      conn =
        post(conn, Routes.literature_api_path(conn, :author),
          publication_id: publication.id,
          data: %{}
        )

      assert json_response(conn, 400) == %{
               "message" => "Missing required field [:name, :slug]",
               "status" => "error"
             }
    end
  end

  describe "POST /api/tag" do
    @valid_attrs %{
      name: "some tag name",
      visibility: true
    }

    test "returns error when :publication_id is missing", %{conn: conn} do
      conn = post(conn, Routes.literature_api_path(conn, :tag))

      assert json_response(conn, 400) == %{
               "message" => "Missing parameter :publication_id",
               "status" => "error"
             }
    end

    test "returns error when :data is missing", %{conn: conn, publication: publication} do
      conn = post(conn, Routes.literature_api_path(conn, :tag), publication_id: publication.id)

      assert json_response(conn, 400) == %{
               "message" => "Missing parameter :data",
               "status" => "error"
             }
    end

    test "creates an tag with valid params", %{conn: conn, publication: publication} do
      conn =
        post(conn, Routes.literature_api_path(conn, :tag),
          publication_id: publication.id,
          data: @valid_attrs
        )

      assert json_response(conn, 200) == %{
               "message" => "Successfully created.",
               "status" => "success"
             }
    end

    test "creates an tag with invalid params", %{conn: conn, publication: publication} do
      conn =
        post(conn, Routes.literature_api_path(conn, :tag),
          publication_id: publication.id,
          data: %{}
        )

      assert json_response(conn, 400) == %{
               "message" => "Missing required field [:name, :slug, :visibility]",
               "status" => "error"
             }
    end
  end

  describe "POST /api/post" do
    @valid_attrs %{
      title: "some post title"
    }

    test "returns error when :publication_id is missing", %{conn: conn} do
      conn = post(conn, Routes.literature_api_path(conn, :post))

      assert json_response(conn, 400) == %{
               "message" => "Missing parameter :publication_id",
               "status" => "error"
             }
    end

    test "returns error when :data is missing", %{conn: conn, publication: publication} do
      conn = post(conn, Routes.literature_api_path(conn, :post), publication_id: publication.id)

      assert json_response(conn, 400) == %{
               "message" => "Missing parameter :data",
               "status" => "error"
             }
    end

    test "creates an post with valid params", %{conn: conn, publication: publication} do
      conn =
        post(conn, Routes.literature_api_path(conn, :post),
          publication_id: publication.id,
          data: @valid_attrs
        )

      assert json_response(conn, 200) == %{
               "message" => "Successfully created.",
               "status" => "success"
             }
    end

    test "creates an post with invalid params", %{conn: conn, publication: publication} do
      conn =
        post(conn, Routes.literature_api_path(conn, :post),
          publication_id: publication.id,
          data: %{}
        )

      assert json_response(conn, 400) == %{
               "message" => "Missing required field [:title, :slug]",
               "status" => "error"
             }
    end
  end
end
