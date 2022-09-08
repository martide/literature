defmodule Literature.Author do
  @moduledoc false
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "literature_authors" do
    field(:slug, :string)
    field(:name, :string)
    field(:profile_image, :string)
    field(:cover_image, :string)
    field(:bio, :string)
    field(:website, :string)
    field(:location, :string)
    field(:facebook, :string)
    field(:twitter, :string)
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:url, :string)

    timestamps()
  end

  @required_params ~w(
    slug
    name
  )a

  @optional_params ~w(
    profile_image
    cover_image
    bio
    website
    location
    facebook
    twitter
    meta_title
    meta_description
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
