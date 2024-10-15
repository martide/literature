defprotocol Literature.Pagination.Paginater do
  @moduledoc """
  The `Literature.Pagination.Paginater` protocol should be implemented for any type that requires pagination.
  """
  alias Literature.Pagination.Page

  @doc """
  The paginate function will be invoked with the item to paginate along with an option. It is expected to return a `Literature.Pagination.Page`.
  """
  @spec paginate(any(), map(), Keyword.t()) :: Page.t()
  def paginate(pageable, pagination_params, opts)
end
