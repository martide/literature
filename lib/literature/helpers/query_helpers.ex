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

  def search(query, :from, %{"q" => search}) do
    or_where(query, [q], ilike(q.from, ^"%#{search}%"))
  end

  def search(query, :to, %{"q" => search}) do
    or_where(query, [q], ilike(q.to, ^"%#{search}%"))
  end

  def search(query, _, _), do: query

  def select_options(list) when is_list(list) do
    Enum.map(list, &{&1.name, &1.id})
  end

  def set_limit(query, %{"max" => max}),
    do: limit(query, ^max)

  def set_limit(query, _), do: query

  def sort_by(query, attrs, default_sort \\ {:asc, :name})

  def sort_by(query, %{"sort_field" => "custom_position", "sort_direction" => direction}, _)
      when direction in ~w(asc desc) do
    order_by(query, {^String.to_existing_atom(direction), selected_as(:custom_position)})
  end

  def sort_by(query, attrs, default_sort) do
    order_by(query, ^sort(attrs, default_sort))
  end

  def where_preload(query, %{"preload" => preloads}) do
    preload(query, ^preloads)
  end

  def where_preload(query, _), do: query

  def where_id_not_in(query, %{"exclude_ids" => ids}) do
    where(query, [q], q.id not in ^ids)
  end

  def where_id_not_in(query, _) do
    query
  end

  def where_status(query, %{"status" => "drafts"}) do
    where(query, [q], not q.is_published)
  end

  def where_status(query, %{"status" => "scheduled"}) do
    now = DateTime.utc_now()
    where(query, [q], q.is_published and q.published_at > ^now)
  end

  def where_status(query, %{"status" => "published"}) do
    now = DateTime.utc_now()
    where(query, [q], q.is_published and q.published_at <= ^now)
  end

  def where_status(query, %{"status" => "public"}) do
    where(query, [q], q.visibility)
  end

  def where_status(query, %{"status" => "private"}) do
    where(query, [q], not q.visibility)
  end

  def where_status(query, _), do: query

  def where_published_at(query, %{"published_at" => {">", published_at}}) do
    where(query, [q], q.published_at > ^published_at)
  end

  def where_published_at(query, %{"published_at" => {"<", published_at}}) do
    where(query, [q], q.published_at < ^published_at)
  end

  def where_published_at(query, _), do: query

  def filter(query, %{"post_id" => post_id}) do
    where(query, [q], q.post_id in ^List.wrap(post_id))
  end

  def filter(query, %{"tag_id" => tag_id}) do
    where(query, [q], q.tag_id in ^List.wrap(tag_id))
  end

  def filter(query, _), do: query

  def where_publication(query, attrs) when is_list(attrs) do
    attrs
    |> atomize_keys_to_string()
    |> then(&where_publication(query, &1))
  end

  def where_publication(query, %{"publication_slug" => slug}) do
    query
    |> join(:inner, [q], p in assoc(q, :publication), on: p.slug == ^slug)
  end

  def where_publication(query, _), do: query

  def where_tag(query, %{"tag_slug" => slug}) do
    query
    |> join(:inner, [q], t in assoc(q, :tags), on: t.slug == ^slug)
  end

  def where_tag(query, _), do: query

  def where_author(query, %{"author_slug" => slug}) do
    query
    |> join(:inner, [q], a in assoc(q, :authors), on: a.slug == ^slug)
  end

  def where_author(query, _), do: query

  def include_tag_post_custom_position(query, tag_ids) do
    # Get the position of the posts for the tag
    query
    |> join(:inner, [p], tp in "literature_tags_posts",
      on: p.id == tp.post_id and tp.tag_id in type(^tag_ids, {:array, :binary_id})
    )
    |> select(
      [p, tp],
      {type(tp.tag_id, :binary_id),
       %{p | custom_position: tp.position |> selected_as(:custom_position)}}
    )
  end

  def maybe_with_published_posts_count(query, %{"with_published_posts_count" => true}) do
    query
    |> join(:left, [q], p in assoc(q, :published_posts))
    |> group_by([q], q.id)
    |> select([q, p], %{q | published_posts_count: count(p.id)})
  end

  def maybe_with_published_posts_count(query, _) do
    query
  end

  ### Private Methods

  defp sort(%{"sort_field" => field, "sort_direction" => direction}, _)
       when direction in ~w(asc desc) do
    {String.to_atom(direction), String.to_existing_atom(field)}
  end

  defp sort(_, default_sort), do: default_sort
end
