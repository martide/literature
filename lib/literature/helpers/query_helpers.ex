defmodule Literature.QueryHelpers do
  @moduledoc false
  import Ecto.Query, warn: false

  def join_with_publication(query) do
    query
    |> join(:left, [q], p in assoc(q, :publication))
  end

  def join_with_publication(query, _), do: query

  def select_options(list) when is_list(list) do
    Enum.map(list, &{&1.name, &1.id})
  end

  def where_preload(query, attrs) when is_list(attrs) do
    case Keyword.get(attrs, :preload, []) do
      nil -> query
      preloads -> preload(query, ^preloads)
    end
  end

  def where_preload(query, _), do: query

  def search(query, field \\ nil, attrs)

  def search(query, :title, %{"q" => search, "publication_slug" => slug}) do
    or_where(query, [q, p], ilike(q.title, ^"#{search}%") and p.slug == ^slug)
  end

  def search(query, :title, %{"q" => search}) do
    or_where(query, [q], ilike(q.title, ^"#{search}%"))
  end

  def search(query, :name, %{"q" => search, "publication_slug" => slug}) do
    or_where(query, [q, p], ilike(q.name, ^"#{search}%") and p.slug == ^slug)
  end

  def search(query, :name, %{"q" => search}) do
    or_where(query, [q], ilike(q.name, ^"#{search}%"))
  end

  def search(query, :slug, %{"q" => search, "publication_slug" => slug}) do
    or_where(query, [q, p], ilike(q.slug, ^"#{search}%") and p.slug == ^slug)
  end

  def search(query, :slug, %{"q" => search}) do
    or_where(query, [q], ilike(q.slug, ^"#{search}%"))
  end

  def search(query, _, %{"publication_slug" => slug}) when is_binary(slug) do
    where(query, [_, p], p.slug == ^slug)
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
