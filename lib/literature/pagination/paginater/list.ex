defimpl Literature.Pagination.Paginater, for: List do
  @moduledoc """
  An implementation of the `Literature.Pagination.Paginater` protocol to extend `Literature.Pagination.Paginater.paginate/2`
  """
  alias Literature.Pagination.Page

  @spec paginate(list(), Page.pagination_params(), Keyword.t()) :: Page.t()
  def paginate(entries, pagination_params, _opts) do
    page_number = pagination_params[:page]
    page_size = pagination_params[:page_size]

    total_entries = length(entries)

    %Page{
      page_size: page_size,
      page_number: page_number,
      entries: entries(entries, page_number, page_size),
      total_entries: total_entries,
      total_pages: total_pages(total_entries, page_size)
    }
  end

  defp entries(entries, page_number, page_size) do
    offset = page_size * (page_number - 1)
    Enum.slice(entries, offset, page_size)
  end

  defp total_pages(total_entries, page_size) do
    (total_entries / page_size)
    |> Float.ceil()
    |> trunc()
  end
end
