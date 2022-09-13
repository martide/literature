defmodule Literature.Tag do
  @moduledoc false
  use Ecto.Schema
  import Ecto.Changeset

  alias Literature.Post

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "literature_tags" do
    field(:slug, :string)
    field(:name, :string)
    field(:description, :string)
    field(:feature_image, :string)
    field(:visibility, :boolean)
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:og_image, :string)
    field(:og_title, :string)
    field(:og_description, :string)
    field(:twitter_image, :string)
    field(:twitter_title, :string)
    field(:twitter_description, :string)
    field(:url, :string)

    has_many(:posts, Post, foreign_key: :primary_tag_id)

    timestamps()
  end

  @required_params ~w(
    slug
    name
  )a

  @optional_params ~w(
    description
    feature_image
    visibility
    meta_title
    meta_description
    og_image
    og_title
    og_description
    twitter_image
    twitter_title
    twitter_description
    url
  )a

  @doc false
  def changeset(post, params) do
    post
    |> cast(params, @required_params ++ @optional_params)
    |> validate_required(@required_params, message: "This field is required")
    |> unique_constraint(:slug)
  end
end
