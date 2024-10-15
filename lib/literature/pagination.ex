defmodule Literature.Pagination do
  @moduledoc "Pagination API"
  alias Literature.Pagination.Paginater

  defmacro __using__(_opts) do
    quote do
      @spec paginate(any(), Keyword.t() | map()) :: Literature.Pagination.Page.t()
      def paginate(pageable, config_or_params \\ %{}) do
        pagination_params =
          config_or_params
          |> Enum.into(%{})
          |> Flop.validate!()
          |> Map.take([:page, :page_size])

        repo_opts = unquote(__MODULE__).to_valid_repo_opts(config_or_params)

        unquote(__MODULE__).paginate(pageable, pagination_params, repo_opts)
      end
    end
  end

  def to_valid_repo_opts(config_or_params) do
    config_or_params
    |> Enum.filter(fn {k, _v} -> is_atom(k) end)
    |> Enum.into([])
  end

  def paginate(pageable, pagination_params, opts) do
    Paginater.paginate(pageable, pagination_params, opts)
  end
end
