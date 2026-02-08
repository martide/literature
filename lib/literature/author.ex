defmodule Literature.Author do
  @moduledoc """
    Literature Author Model
  """
  use Literature.Web, :model

  @type t :: %__MODULE__{}

  # Configurable timestamp type - defaults to [] for backwards compatibility
  @timestamps_opts Application.compile_env(:literature, :timestamps_opts, [])

  schema "literature_authors" do
    field(:slug, :string)
    field(:name, :string)
    field(:profile_image, Uploaders.ProfileImage.Type)
    field(:cover_image, Uploaders.Type)
    field(:bio, :string)
    field(:website, :string)
    field(:location, :string)
    field(:facebook, :string)
    field(:twitter, :string)
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:meta_keywords, :string)
    field(:published_posts_count, :integer, virtual: true)

    belongs_to(:publication, Publication)

    many_to_many(:posts, Post, join_through: "literature_authors_posts")

    many_to_many(:published_posts, Post,
      join_through: "literature_authors_posts",
      where: [is_published: true, published_at: {:fragment, "?::date < current_date"}]
    )

    timestamps(@timestamps_opts)
  end

  @required_params ~w(
    publication_id
    slug
    name
  )a

  @optional_params ~w(
    bio
    website
    location
    facebook
    twitter
    meta_title
    meta_description
    meta_keywords
  )a

  @attachments ~w(
    profile_image
    cover_image
  )a

  @doc false
  def changeset(author, params) do
    author
    |> maybe_generate_id()
    |> cast(params, @required_params ++ @optional_params)
    |> cast_attachments(params, @attachments)
    |> maybe_generate_slug(author)
    |> validate_required(@required_params, message: "This field is required")
    |> unique_constraint(:slug, name: :literature_authors_publication_id_slug_index)
  end

  defp maybe_generate_slug(changeset, %{name: name, slug: slug}) when name != slug,
    do: changeset

  defp maybe_generate_slug(changeset, %{slug: nil}),
    do: slugify(changeset, :name)

  defp maybe_generate_slug(changeset, _), do: changeset
end
