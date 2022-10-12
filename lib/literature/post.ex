defmodule Literature.Post do
  @moduledoc """
    Literature Post Model
  """
  use Literature.Web, :model

  schema "literature_posts" do
    field(:slug, :string)
    field(:title, :string)
    field(:feature_image, Uploader.Type)
    field(:feature_image_alt, :string)
    field(:feature_image_caption, :string)
    field(:featured, :boolean)
    field(:published_at, :utc_datetime)
    field(:excerpt, :string)
    field(:editor_json, :string)
    field(:html, {:array, :string})
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:og_image, Uploader.Type)
    field(:og_title, :string)
    field(:og_description, :string)
    field(:twitter_image, Uploader.Type)
    field(:twitter_title, :string)
    field(:twitter_description, :string)

    field(:status, :string, virtual: true)
    field(:authors_ids, {:array, :string}, virtual: true)
    field(:tags_ids, {:array, :string}, virtual: true)
    field(:upload_image, Uploader.Type, virtual: true)

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
    upload_image
    published_at
    meta_title
    meta_description
    og_title
    og_description
    twitter_title
    twitter_description
  )a

  @attachments ~w(
    feature_image
    og_image
    twitter_image
  )a

  @doc false
  def changeset(post, params) do
    post
    |> cast(params, @required_params ++ @optional_params)
    |> cast_attachments(params, @attachments)
    |> maybe_generate_slug(post)
    |> validate_required(@required_params, message: "This field is required")
    |> unique_constraint(:slug, name: :literature_posts_publication_id_slug_index)
    |> put_assocs(params)
  end

  def resolve(post) when is_struct(post) do
    %{
      post
      | status: get_status(post),
        authors_ids: Enum.map(post.authors, & &1.id),
        tags_ids: Enum.map(post.tags, & &1.id)
    }
  end

  def resolve(post), do: post

  defp get_status(%{published_at: published_at}) do
    datetime = Timex.now() |> Timex.local()

    cond do
      is_nil(published_at) -> "draft"
      published_at < datetime -> "published"
      published_at > datetime -> "scheduled"
    end
  end

  defp maybe_generate_slug(changeset, %{title: title, slug: slug}) when title != slug,
    do: changeset

  defp maybe_generate_slug(changeset, %{slug: nil}),
    do: slugify(changeset, :title)

  defp maybe_generate_slug(changeset, _), do: changeset

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
