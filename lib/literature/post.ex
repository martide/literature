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
    field(:html, :string)
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:og_image, Uploader.Type)
    field(:og_title, :string)
    field(:og_description, :string)
    field(:twitter_image, Uploader.Type)
    field(:twitter_title, :string)
    field(:twitter_description, :string)
    field(:status, :string, virtual: true)

    belongs_to(:publication, Publication)

    many_to_many(:authors, Author, join_through: "literature_authors_posts")
    many_to_many(:tags, Tag, join_through: "literature_tags_posts")

    timestamps()
  end

  @required_params ~w(
    publication_id
    slug
    title
    status
  )a

  @optional_params ~w(
    feature_image_alt
    feature_image_caption
    featured
    excerpt
    html
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
    |> put_assoc(:authors, parse_authors(params))
    |> put_assoc(:tags, parse_tags(params))
    |> maybe_generate_slug(post)
    |> put_published_at()
    |> validate_required(@required_params, message: "This field is required")
    |> unique_constraint(:slug, name: :literature_posts_publication_id_slug_index)
  end

  def parse_authors(params),
    do: Enum.map(params["authors"] || [], &Literature.get_author!/1)

  def parse_tags(params),
    do: Enum.map(params["tags"] || [], &Literature.get_tag!/1)

  def resolve_status(post) when is_struct(post) do
    status = (post.published_at && "publish") || "draft"
    Map.put(post, :status, status)
  end

  def resolve_status(post), do: post

  defp maybe_generate_slug(changeset, %{title: title, slug: slug}) when title != slug,
    do: changeset

  defp maybe_generate_slug(changeset, %{slug: nil}),
    do: slugify(changeset, :title)

  defp maybe_generate_slug(changeset, _), do: changeset

  defp put_published_at(changeset) do
    case changeset do
      %Ecto.Changeset{changes: %{status: "draft"}, valid?: true} ->
        put_change(changeset, :published_at, nil)

      %Ecto.Changeset{changes: %{status: "publish"}, valid?: true} ->
        datetime = DateTime.utc_now() |> DateTime.truncate(:second)
        put_change(changeset, :published_at, datetime)

      changeset ->
        changeset
    end
  end
end
