defmodule Literature.Test.Fixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Literature` context.
  """

  import Literature.Helpers, only: [atomize_keys_to_string: 1]
  alias Literature.Post

  @doc """
  Generate an author.
  """
  def author_fixture(attrs \\ []) do
    {:ok, author} =
      attrs
      |> Keyword.put_new(:name, "some name")
      |> Enum.into(%{})
      |> Literature.create_author()

    author
  end

  @doc """
  Generate a post.
  """
  def post_fixture(attrs \\ []) do
    {:ok, post} =
      attrs
      |> Keyword.put_new(:title, "some title")
      |> Keyword.put_new(:featured, false)
      |> Keyword.put_new(:status, "publish")
      |> Enum.into(%{})
      |> atomize_keys_to_string()
      |> Literature.create_post()

    Post.resolve(post)
  end

  @doc """
  Generate a publication.
  """
  def publication_fixture(attrs \\ []) do
    {:ok, publication} =
      attrs
      |> Keyword.put_new(:name, "some name")
      |> Enum.into(%{})
      |> Literature.create_publication()

    publication
  end

  @doc """
  Generate a tag.
  """
  def tag_fixture(attrs \\ []) do
    {:ok, tag} =
      attrs
      |> Keyword.put_new(:name, "some name")
      |> Keyword.put_new(:visibility, true)
      |> Enum.into(%{})
      |> Literature.create_tag()

    tag
  end
end
