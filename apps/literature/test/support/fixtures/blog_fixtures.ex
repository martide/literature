defmodule Literature.BlogFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Literature.Blog` context.
  """

  @doc """
  Generate a unique post slug.
  """
  def unique_post_slug, do: "some slug#{System.unique_integer([:positive])}"

  @doc """
  Generate a post.
  """
  def post_fixture(attrs \\ %{}) do
    {:ok, post} =
      attrs
      |> Enum.into(%{
        feature_image: "some feature_image",
        feature_image_alt: "some feature_image_alt",
        feature_image_caption: "some feature_image_caption",
        featured: true,
        html: "some html",
        meta_description: "some meta_description",
        meta_title: "some meta_title",
        slug: unique_post_slug(),
        title: "some title"
      })
      |> Literature.Blog.create_post()

    post
  end
end
