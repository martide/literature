defmodule Literature.Post do
  use Literature.Web, :model

  schema "literature_posts" do
    field(:slug, :string)
    field(:title, :string)
    field(:feature_image, Uploader.Type)
    field(:feature_image_alt, :string)
    field(:feature_image_caption, :string)
    field(:featured, :boolean)
    field(:published_at, :utc_datetime)
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:custom_excerpt, :string)
    field(:og_image, Uploader.Type)
    field(:og_title, :string)
    field(:og_description, :string)
    field(:twitter_image, Uploader.Type)
    field(:twitter_title, :string)
    field(:twitter_description, :string)
    field(:excerpt, :string)
    field(:status, :string, virtual: true)

    belongs_to(:publication, Publication)
    belongs_to(:primary_author, Author)
    belongs_to(:primary_tag, Tag)

    timestamps()
  end

  @required_params ~w(
    publication_id
    primary_author_id
    primary_tag_id
    slug
    title
    status
  )a

  @optional_params ~w(
    feature_image_alt
    feature_image_caption
    featured
    meta_title
    meta_description
    custom_excerpt
    og_title
    og_description
    twitter_title
    twitter_description
    excerpt
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
    |> put_published_at()
    |> validate_required(@required_params, message: "This field is required")
    |> unique_constraint(:slug, name: :literature_posts_publication_id_slug_index)
  end

  def resolve_status(post) do
    status = (post.published_at && "publish") || "draft"
    Map.put(post, :status, status)
  end

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
