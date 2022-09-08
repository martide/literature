defmodule Literature.Post do
  @moduledoc false
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  alias Literature.{Author, Tag}

  schema "literature_posts" do
    field(:slug, :string)
    field(:title, :string)
    field(:html, :string)
    field(:feature_image, :string)
    field(:feature_image_alt, :string)
    field(:feature_image_caption, :string)
    field(:featured, :boolean)
    field(:published_at, :utc_datetime)
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:custom_excerpt, :string)
    field(:og_image, :string)
    field(:og_title, :string)
    field(:og_description, :string)
    field(:twitter_image, :string)
    field(:twitter_title, :string)
    field(:twitter_description, :string)
    field(:url, :string)
    field(:excerpt, :string)

    belongs_to(:primary_author, Author)
    belongs_to(:primary_tag, Tag)

    timestamps()
  end

  @required_params ~w(
    slug
    title
    primary_author_id
    primary_tag_id
  )a

  @optional_params ~w(
    html
    feature_image
    feature_image_alt
    feature_image_caption
    featured
    published_at
    meta_title
    meta_description
    custom_excerpt
    og_image
    og_title
    og_description
    twitter_image
    twitter_title
    twitter_description
    url
    excerpt
  )a

  @doc false
  def changeset(post, params) do
    post
    |> cast(params, @required_params ++ @optional_params)
    |> validate_required(@required_params)
    |> unique_constraint(:slug)
  end
end
