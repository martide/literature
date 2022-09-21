defmodule Literature.QueryHelpers do
  @moduledoc false
  import Ecto.Query, warn: false

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

  def select_options(list) when is_list(list) do
    Enum.map(list, &{&1.name, &1.id})
  end

  def sort_by(query, attrs) do
    order_by(query, ^sort(attrs))
  end

  def where_preload(query, %{"preload" => preloads}) do
    preload(query, ^preloads)
  end

  def where_preload(query, _), do: query

  def where_status(query, %{"status" => "drafts"}) do
    where(query, [q], is_nil(q.published_at))
  end

  def where_status(query, %{"status" => "published"}) do
    where(query, [q], not is_nil(q.published_at))
  end

  def where_status(query, %{"status" => "public"}) do
    where(query, [q], q.visibility)
  end

  def where_status(query, %{"status" => "private"}) do
    where(query, [q], not q.visibility)
  end

  def where_status(query, _), do: query

  def where_publication(query, %{"publication_slug" => slug}) do
    query
    |> join(:left, [q], p in assoc(q, :publication))
    |> where([_, p], p.slug == ^slug)
  end

  def where_publication(query, _), do: query

  ### Private Methods

  defp sort(%{"sort_field" => field, "sort_direction" => direction})
       when direction in ~w(asc desc) do
    {String.to_atom(direction), String.to_existing_atom(field)}
  end

  defp sort(_), do: {:asc, :id}
end
