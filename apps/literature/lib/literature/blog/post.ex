defmodule Literature.Blog.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field :feature_image, :string
    field :feature_image_alt, :string
    field :feature_image_caption, :string
    field :featured, :boolean, default: false
    field :html, :string
    field :meta_description, :string
    field :meta_title, :string
    field :slug, :string
    field :title, :string

    timestamps()
  end

  @doc false
  def changeset(post, attrs) do
    post
    |> cast(attrs, [
      :slug,
      :title,
      :html,
      :feature_image,
      :feature_image_alt,
      :feature_image_caption,
      :featured,
      :meta_title,
      :meta_description
    ])
    |> validate_required([
      :slug,
      :title,
      :html,
      :feature_image,
      :feature_image_alt,
      :feature_image_caption,
      :featured,
      :meta_title,
      :meta_description
    ])
    |> unique_constraint(:slug)
  end
end
