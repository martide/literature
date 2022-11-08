defmodule Literature.Publication do
  @moduledoc """
    Literature Publication Model
  """
  use Literature.Web, :model

  schema "literature_publications" do
    field(:slug, :string)
    field(:name, :string)
    field(:description, :string)
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:meta_keywords, :string)
    field(:og_image, Uploaders.Type)
    field(:og_title, :string)
    field(:og_description, :string)
    field(:twitter_image, Uploaders.Type)
    field(:twitter_title, :string)
    field(:twitter_description, :string)

    has_many(:authors, Author)
    has_many(:tags, Tag)
    has_many(:posts, Post)

    has_many(:public_tags, Tag,
      preload_order: [asc: :name],
      where: [visibility: true]
    )

    has_many(:published_posts, Post,
      preload_order: [desc: :published_at],
      where: [published_at: {:fragment, "?::date < current_date"}]
    )

    timestamps()
  end

  @required_params ~w(
    slug
    name
  )a

  @optional_params ~w(
    description
    meta_title
    meta_description
    meta_keywords
    og_title
    og_description
    twitter_title
    twitter_description
  )a

  @attachments ~w(
    og_image
    twitter_image
  )a

  @doc false
  def changeset(publication, params) do
    publication
    |> maybe_generate_id()
    |> cast(params, @required_params ++ @optional_params)
    |> cast_attachments(params, @attachments)
    |> maybe_generate_slug(publication)
    |> validate_required(@required_params, message: "This field is required")
    |> unique_constraint(:slug)
  end

  defp maybe_generate_slug(changeset, %{name: name, slug: slug}) when name != slug,
    do: changeset

  defp maybe_generate_slug(changeset, %{slug: nil}),
    do: slugify(changeset, :name)

  defp maybe_generate_slug(changeset, _), do: changeset
end
