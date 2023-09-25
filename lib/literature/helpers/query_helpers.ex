defmodule Literature.QueryHelpers do
  @moduledoc false
  import Ecto.Query, warn: false

  import Literature.Helpers, only: [atomize_keys_to_string: 1]

  def search(query, :title, %{"q" => search}) do
    or_where(query, [q], ilike(q.title, ^"%#{search}%"))
  end

  def search(query, :name, %{"q" => search}) do
    or_where(query, [q], ilike(q.name, ^"%#{search}%"))
  end

  def search(query, :slug, %{"q" => search}) do
    or_where(query, [q], ilike(q.slug, ^"%#{search}%"))
  end

  def search(query, :excerpt, %{"q" => search}) do
    or_where(query, [q], ilike(q.excerpt, ^"%#{search}%"))
  end

  def search(query, :description, %{"q" => search}) do
    or_where(query, [q], ilike(q.description, ^"%#{search}%"))
  end

  def search(query, :html, %{"q" => search}) do
    # ilike on each html content
    or_where(
      query,
      [q],
      fragment("EXISTS (SELECT * FROM UNNEST(?) html WHERE html ILIKE ?)", q.html, ^"%#{search}%")
    )
  end

  def search(query, _, _), do: query

  def select_options(list) when is_list(list) do
    Enum.map(list, &{&1.name, &1.id})
  end

  def set_limit(query, %{"max" => max}),
    do: limit(query, ^max)

  def set_limit(query, _), do: query

  def sort_by(query, attrs, default_sort \\ {:asc, :name}) do
    order_by(query, ^sort(attrs, default_sort))
  end

  def where_preload(query, %{"preload" => preloads}) do
    preload(query, ^preloads)
  end

  def where_preload(query, _), do: query

  def where_status(query, %{"status" => "drafts"}) do
    where(query, [q], is_nil(q.published_at))
  end

  def where_status(query, %{"status" => "scheduled"}) do
    datetime = Timex.now() |> Timex.local()
    where(query, [q], q.published_at > ^datetime)
  end

  def where_status(query, %{"status" => "published"}) do
    datetime = Timex.now() |> Timex.local()
    where(query, [q], q.published_at <= ^datetime)
  end

  def where_status(query, %{"status" => "public"}) do
    where(query, [q], q.visibility)
  end

  def where_status(query, %{"status" => "private"}) do
    where(query, [q], not q.visibility)
  end

  def where_status(query, _), do: query

  def where_publication(query, attrs) when is_list(attrs) do
    attrs
    |> atomize_keys_to_string()
    |> then(&where_publication(query, &1))
  end

  def where_publication(query, %{"publication_slug" => slug}) do
    query
    |> join(:left, [q], p in assoc(q, :publication))
    |> where([_, p], p.slug == ^slug)
  end

  def where_publication(query, _), do: query

  ### Private Methods

  defp sort(%{"sort_field" => field, "sort_direction" => direction}, _)
       when direction in ~w(asc desc) do
    {String.to_atom(direction), String.to_existing_atom(field)}
  end

  defp sort(_, default_sort), do: default_sort
end
