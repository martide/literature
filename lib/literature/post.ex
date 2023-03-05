defmodule Literature.Post do
  @moduledoc """
    Literature Post Model
  """
  use Literature.Web, :model

  schema "literature_posts" do
    field(:slug, :string)
    field(:title, :string)
    field(:feature_image, Uploaders.Type)
    field(:feature_image_alt, :string)
    field(:feature_image_caption, :string)
    field(:featured, :boolean)
    field(:published_at, :utc_datetime)
    field(:excerpt, :string)
    field(:editor_json, :string)
    field(:html, {:array, :string})
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:meta_keywords, :string)
    field(:og_image, Uploaders.Type)
    field(:og_title, :string)
    field(:og_description, :string)
    field(:twitter_image, Uploaders.Type)
    field(:twitter_title, :string)
    field(:twitter_description, :string)

    field(:status, :string, virtual: true)
    field(:authors_ids, {:array, :string}, virtual: true)
    field(:tags_ids, {:array, :string}, virtual: true)
    field(:upload_image, Uploaders.Type, virtual: true)
    field(:prev_post, :map, virtual: true)
    field(:next_post, :map, virtual: true)
    field(:similar_posts, {:array, :map}, virtual: true)

    belongs_to(:publication, Publication)

    many_to_many(:authors, Author, join_through: "literature_authors_posts", on_replace: :delete)
    many_to_many(:tags, Tag, join_through: "literature_tags_posts", on_replace: :delete)

    timestamps()
  end

  @required_params ~w(
    publication_id
    slug
    title
  )a

  @optional_params ~w(
    feature_image_alt
    feature_image_caption
    featured
    excerpt
    editor_json
    html
    published_at
    meta_title
    meta_description
    meta_keywords
    og_title
    og_description
    twitter_title
    twitter_description
  )a

  @attachments ~w(
    feature_image
    og_image
    upload_image
    twitter_image
  )a

  @doc false
  def changeset(post, params) do
    post
    |> maybe_generate_id()
    |> cast(params, @required_params ++ @optional_params)
    |> maybe_generate_slug(post)
    |> cast_attachments(params, @attachments)
    |> validate_required(@required_params, message: "This field is required")
    |> unique_constraint(:slug,
      name: :literature_posts_publication_id_slug_index,
      message: "#{params["slug"]} slug is duplicated}"
    )
    |> put_assocs(params)
  end

  defp maybe_generate_slug(%{changes: %{title: title, slug: slug}} = changeset, _post)
       when title != slug,
       do: changeset

  defp maybe_generate_slug(changeset, %{title: title, slug: slug}) when title != slug,
    do: changeset

  defp maybe_generate_slug(changeset, %{slug: nil}),
    do: slugify(changeset, :title)

  defp maybe_generate_slug(changeset, _), do: changeset

  def resolve(post) when is_struct(post) do
    %{
      post
      | status: get_status(post),
        authors_ids: Enum.map(post.authors, & &1.id),
        tags_ids: Enum.map(post.tags, & &1.id)
    }
  end

  def resolve(post), do: post

  def resolve_prev_and_next_post(post, %{published_posts: published_posts}) do
    post_index = Enum.find_index(published_posts, &(&1.id == post.id))

    post
    |> build_post(:prev, published_posts, post_index)
    |> build_post(:next, published_posts, post_index)
  end

  def resolve_similar_posts(%{tags_ids: tags_ids} = post, %{published_posts: published_posts}) do
    similar_posts =
      published_posts
      |> Stream.reject(&(&1.id == post.id))
      |> Stream.map(&resolve/1)
      |> Stream.filter(&List.myers_difference(&1.tags_ids, tags_ids)[:eq])
      |> Stream.take(3)
      |> Enum.to_list()

    %{post | similar_posts: similar_posts}
  end

  defp build_post(post, :prev, _, nil), do: post

  defp build_post(post, :prev, published_posts, index),
    do: %{post | prev_post: Enum.fetch!(published_posts, index - 1)}

  defp build_post(post, :next, published_posts, index) do
    %{post | next_post: Enum.fetch!(published_posts, index + 1)}
  rescue
    _ -> post
  end

  defp get_status(%{published_at: published_at}) do
    datetime = Timex.now() |> Timex.local()

    cond do
      is_nil(published_at) -> "draft"
      Timex.compare(published_at, datetime) < 1 -> "published"
      Timex.compare(published_at, datetime) == 1 -> "scheduled"
    end
  end

  defp put_assocs(changeset, %{"authors_ids" => ""}),
    do: add_error(changeset, :authors_ids, "Required at least one author")

  defp put_assocs(changeset, %{"tags_ids" => ""}),
    do: add_error(changeset, :tags_ids, "Required at least one tag")

  defp put_assocs(%{valid?: true} = changeset, %{"authors_ids" => authors, "tags_ids" => tags}) do
    changeset
    |> put_assoc(:authors, Enum.map(authors, &Literature.get_author!/1))
    |> put_assoc(:tags, Enum.map(tags, &Literature.get_tag!/1))
  end

  defp put_assocs(changeset, _), do: changeset
end
