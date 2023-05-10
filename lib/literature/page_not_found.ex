defmodule Literature.PageNotFoundError do
  @moduledoc """
  Raised when a page is not found.
  """
  defexception [:message]
end
