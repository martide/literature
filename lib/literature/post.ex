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

    belongs_to(:primary_author, Author)
    belongs_to(:primary_tag, Tag)

    timestamps()
  end

  @required_params ~w(
    slug
    title
  )a

  @optional_params ~w(
    primary_author_id
    primary_tag_id
    feature_image_alt
    feature_image_caption
    featured
    published_at
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
    |> validate_required(@required_params, message: "This field is required")
    |> unique_constraint(:slug)
  end

  defp maybe_generate_slug(changeset, %{title: title, slug: slug}) when title != slug,
    do: changeset

  defp maybe_generate_slug(changeset, %{slug: nil}),
    do: slugify(changeset, :title)

  defp maybe_generate_slug(changeset, _), do: changeset
end
