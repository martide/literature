defmodule Literature.AssetNotFoundControllerTest do
  use ExUnit.Case, async: true

  import Phoenix.ConnTest, only: [build_conn: 0, get: 2]
  alias Literature.Test.Router.Helpers, as: Routes

  @endpoint Literature.Test.Endpoint
  @moduletag :capture_log

  setup do
    start_supervised!(@endpoint)
    {:ok, conn: build_conn()}
  end

  test "it raises, whatever the path", %{conn: conn} do
    assert_raise Literature.AssetNotFound, fn ->
      get(conn, Routes.literature_asset_path(conn, :asset, ["foo"]))
    end
  end
end
