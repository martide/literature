defmodule Literature.Pagination.Page do
  @moduledoc "Struct for pages metadata"

  defstruct [:page_number, :page_size, :total_entries, :total_pages, entries: []]

  @type t :: %__MODULE__{
          entries: list(),
          page_number: pos_integer(),
          page_size: integer(),
          total_entries: integer(),
          total_pages: pos_integer()
        }
  @type t(entry) :: %__MODULE__{
          entries: list(entry),
          page_number: pos_integer(),
          page_size: integer(),
          total_entries: integer(),
          total_pages: pos_integer()
        }

  @type pagination_params :: %{required(:page) => integer(), required(:page_size) => integer()}

  defimpl Enumerable do
    @spec count(Literature.Pagination.Page.t()) :: {:error, Enumerable.Literature.Pagination.Page}
    def count(_page), do: {:error, __MODULE__}

    @spec member?(Literature.Pagination.Page.t(), term) ::
            {:error, Enumerable.Literature.Pagination.Page}
    def member?(_page, _value), do: {:error, __MODULE__}

    @spec reduce(Literature.Pagination.Page.t(), Enumerable.acc(), Enumerable.reducer()) ::
            Enumerable.result()
    def reduce(%Literature.Pagination.Page{entries: entries}, acc, fun) do
      Enumerable.reduce(entries, acc, fun)
    end

    @spec slice(Literature.Pagination.Page.t()) :: {:error, Enumerable.Literature.Pagination.Page}
    def slice(_page), do: {:error, __MODULE__}
  end

  defimpl Collectable do
    @spec into(Literature.Pagination.Page.t()) ::
            {term, (term, Collectable.command() -> Literature.Pagination.Page.t() | term)}
    def into(original) do
      original_entries = original.entries
      impl = Collectable.impl_for(original_entries)
      {_, entries_fun} = impl.into(original_entries)

      fun = fn page, command ->
        %{page | entries: entries_fun.(page.entries, command)}
      end

      {original, fun}
    end
  end
end
