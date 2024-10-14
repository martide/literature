defimpl Literature.Pagination.Paginater, for: [Ecto.Query, Atom] do
  @moduledoc "Paginater implementation using Flop"
  alias Literature.Pagination.Page

  @spec paginate(Ecto.Queryable.t(), Page.pagination_params(), Keyword.t()) :: Page.t()
  def paginate(query, pagination_params, opts) do
    {entries, %Flop.Meta{} = meta} =
      Flop.validate_and_run!(query, pagination_params, query_opts: opts)

    %Page{
      entries: entries,
      page_number: meta.current_page,
      page_size: meta.page_size,
      total_entries: meta.total_count,
      total_pages: meta.total_pages
    }
  end
end
