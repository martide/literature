defmodule Literature.AssetNotFoundController do
  @moduledoc """
  Any valid assets request will halt before this controller is executed.
  Only bad requests (404) will reach to here.
  """
  use Literature.Web, :controller

  def asset(_conn, path) do
    raise Literature.AssetNotFound, "unknown asset #{inspect(path)}"
  end
end

defmodule Literature.AssetNotFound do
  @moduledoc false
  defexception [:message, plug_status: 404]
end
