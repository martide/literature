defmodule Literature.AssetNotFoundControllerTest do
  use Literature.ConnCase

  @moduletag :capture_log

  test "it raises, whatever the path", %{conn: conn} do
    assert_raise Literature.AssetNotFound, fn ->
      get(conn, Routes.literature_asset_path(conn, :asset, ["foo"]))
    end
  end
end
