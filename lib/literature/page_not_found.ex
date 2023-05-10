defmodule Literature.PageNotFound do
  @moduledoc """
  Raised when a page is not found.
  """
  defexception [:message]

  @impl true
  def exception(_) do
    %__MODULE__{message: "Page not found."}
  end
end
