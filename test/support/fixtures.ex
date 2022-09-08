defmodule Literature.Test.Fixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Literature` context.
  """

  @doc """
  Generate a post.
  """
  def post_fixture(attrs \\ %{}) do
    {:ok, post} =
      attrs
      |> Enum.into(%{
        title: "some title",
        slug: "some-title",
        featured: false
      })
      |> Literature.create_post()

    post
  end

  @doc """
  Generate a tag.
  """
  def tag_fixture(attrs \\ %{}) do
    {:ok, tag} =
      attrs
      |> Enum.into(%{
        name: "some name",
        slug: "some-name"
      })
      |> Literature.create_tag()

    tag
  end

  @doc """
  Generate an author.
  """
  def author_fixture(attrs \\ %{}) do
    {:ok, author} =
      attrs
      |> Enum.into(%{
        name: "some name",
        slug: "some-name"
      })
      |> Literature.create_author()

    author
  end
end
