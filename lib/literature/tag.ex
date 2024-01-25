defmodule Literature.Tag do
  @moduledoc """
    Literature Tag Model
  """
  use Literature.Web, :model

  schema "literature_tags" do
    field(:slug, :string)
    field(:name, :string)
    field(:description, :string)
    field(:feature_image, Uploaders.Type)
    field(:visibility, :boolean)
    field(:enable_posts_custom_order, :boolean, read_after_writes: true)
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:meta_keywords, :string)
    field(:og_image, Uploaders.Type)
    field(:og_title, :string)
    field(:og_description, :string)
    field(:twitter_image, Uploaders.Type)
    field(:twitter_title, :string)
    field(:twitter_description, :string)

    belongs_to(:publication, Publication)

    many_to_many(:posts, Post, join_through: "literature_tags_posts")

    many_to_many(:published_posts, Post,
      join_through: "literature_tags_posts",
      where: [is_published: true, published_at: {:fragment, "?::date < current_date"}]
    )

    timestamps()
  end

  @required_params ~w(
    publication_id
    slug
    name
    visibility
  )a

  @optional_params ~w(
    description
    enable_posts_custom_order
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
    twitter_image
  )a

  @doc false
  def changeset(tag, params) do
    tag
    |> maybe_generate_id()
    |> cast(params, @required_params ++ @optional_params)
    |> cast_attachments(params, @attachments)
    |> maybe_generate_slug(tag)
    |> validate_required(@required_params, message: "This field is required")
    |> unique_constraint(:slug, name: :literature_tags_publication_id_slug_index)
  end

  defp maybe_generate_slug(changeset, %{name: name, slug: slug}) when name != slug,
    do: changeset

  defp maybe_generate_slug(changeset, %{slug: nil}),
    do: slugify(changeset, :name)

  defp maybe_generate_slug(changeset, _), do: changeset
end
