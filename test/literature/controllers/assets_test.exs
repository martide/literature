defmodule Literature.AssetsTest do
  use Literature.ConnCase

  @moduletag :capture_log

  test "returns app.js content", %{conn: conn} do
    conn =
      get(conn, Routes.literature_dashboard_path(conn, :js, Literature.Assets.current_hash(:js)))

    assert response(conn, 200)
    assert response_content_type(conn, :js) == "text/javascript"
  end

  test "returns app.css content", %{conn: conn} do
    conn =
      get(
        conn,
        Routes.literature_dashboard_path(conn, :css, Literature.Assets.current_hash(:css))
      )

    assert response(conn, 200)
    assert response_content_type(conn, :css) == "text/css"
  end
end
