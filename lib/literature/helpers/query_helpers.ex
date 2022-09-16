defmodule Literature.QueryHelpers do
  @moduledoc false
  import Ecto.Query, warn: false

  def select_options(list) when is_list(list) do
    Enum.map(list, &{&1.name, &1.id})
  end

  def where_preload(query, attrs) do
    case Keyword.get(attrs, :preload, []) do
      nil -> query
      preloads -> preload(query, ^preloads)
    end
  end

  def search(query, :title, %{"q" => search}) do
    or_where(query, [q], ilike(q.title, ^"#{search}%"))
  end

  def search(query, :name, %{"q" => search}) do
    or_where(query, [q], ilike(q.name, ^"#{search}%"))
  end

  def search(query, :slug, %{"q" => search}) do
    or_where(query, [q], ilike(q.slug, ^"#{search}%"))
  end

  def search(query, _, _), do: query

  def sort_by(query, attrs) do
    order_by(query, ^sort(attrs))
  end

  defp sort(%{"sort_field" => field, "sort_direction" => direction})
       when direction in ~w(asc desc) do
    {String.to_atom(direction), String.to_existing_atom(field)}
  end

  defp sort(_), do: {:asc, :id}
end
