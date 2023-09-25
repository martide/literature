defmodule LiteratureTest do
  use Literature.DataCase

  import Literature.Helpers, only: [atomize_keys_to_string: 1]
  import Literature.Test.Fixtures

  alias Literature

  describe "authors" do
    alias Literature.Author

    @invalid_attrs %{name: nil, slug: nil}

    test "list_authors/0 returns all authors" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      assert Literature.list_authors() == [author]
    end

    test "get_author!/1 returns the author with given id" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      assert Literature.get_author!(author.id) == author
    end

    test "create_author/1 with valid data creates an author" do
      publication = publication_fixture()
      valid_attrs = %{name: "some name", slug: "some-name", publication_id: publication.id}

      assert {:ok, %Author{} = author} = Literature.create_author(valid_attrs)
      assert author.publication_id == publication.id
      assert author.name == "some name"
      assert author.slug == "some-name"
    end

    test "create_author/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Literature.create_author(@invalid_attrs)
    end

    test "update_author/2 with valid data updates the author" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      update_attrs = %{name: "some updated name", slug: "some-update-name"}

      assert {:ok, %Author{} = author} = Literature.update_author(author, update_attrs)
      assert author.publication_id == publication.id
      assert author.name == "some updated name"
      assert author.slug == "some-update-name"
    end

    test "update_author/2 with invalid data returns error changeset" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      assert {:error, %Ecto.Changeset{}} = Literature.update_author(author, @invalid_attrs)
      assert author == Literature.get_author!(author.id)
    end

    test "delete_author/1 deletes the author" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      assert {:ok, %Author{}} = Literature.delete_author(author)
      assert is_nil(Literature.get_author!(author.id))
    end

    test "change_author/1 returns author changeset" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      assert %Ecto.Changeset{} = Literature.change_author(author)
    end
  end

  describe "posts" do
    alias Literature.Post

    @invalid_attrs %{title: nil, slug: nil}

    test "paginate_posts/0 returns all posts" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      attrs = %{"preload" => ~w(authors tags)a}
      assert %Scrivener.Page{entries: entries} = Literature.paginate_posts(attrs)
      assert entries == [%{post | status: nil, authors_ids: nil, tags_ids: nil}]
    end

    test "paginate_posts/1 returns filtered posts" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(
          title: "Contains Keyword",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      other_post =
        post_fixture(
          excerpt: "other post contains Keyword in excerpt",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      another_post =
        post_fixture(
          title: "Another post",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      attrs = %{"q" => "keyword", "preload" => ~w(authors tags)a}

      assert %Scrivener.Page{entries: entries} = Literature.paginate_posts(attrs)

      post_ids = Enum.map(entries, & &1.id)

      assert post.id in post_ids
      assert other_post.id in post_ids
      assert another_post.id not in post_ids
    end

    test "list_posts/0 returns all posts" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      assert Literature.list_posts() == [post]
    end

    test "get_post!/1 returns the post with given id" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      assert Literature.get_post!(post.id) == post
    end

    test "create_post/1 with valid data creates an post" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      valid_attrs =
        %{
          title: "some title",
          slug: "some-title",
          publication_id: publication.id,
          status: "publish",
          authors_ids: [author.id],
          tags_ids: [tag.id]
        }
        |> atomize_keys_to_string()

      assert {:ok, %Post{} = post} = Literature.create_post(valid_attrs)
      assert post.publication_id == publication.id
      assert post.authors == [author]
      assert post.tags == [tag]
      assert post.title == "some title"
      assert post.slug == "some-title"
    end

    test "create_post/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Literature.create_post(@invalid_attrs)
    end

    test "update_post/2 with valid data updates the post" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      update_attrs = %{
        title: "some updated title",
        slug: "some-update-title"
      }

      assert {:ok, %Post{} = post} = Literature.update_post(post, update_attrs)
      assert post.publication_id == publication.id
      assert post.title == "some updated title"
      assert post.slug == "some-update-title"
    end

    test "update_post/2 with invalid data returns error changeset" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      assert {:error, %Ecto.Changeset{}} = Literature.update_post(post, @invalid_attrs)
      assert post == Literature.get_post!(post.id) |> Repo.preload(~w(authors tags)a)
    end

    test "delete_post/1 deletes the post" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      assert {:ok, %Post{}} = Literature.delete_post(post)
      assert is_nil(Literature.get_post!(post.id))
    end

    test "change_post/1 returns post changeset" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      assert %Ecto.Changeset{} = Literature.change_post(post)
    end
  end

  describe "publications" do
    alias Literature.Publication

    @invalid_attrs %{title: nil, slug: nil}

    test "list_publications/0 returns all publications" do
      publication = publication_fixture()
      assert Literature.list_publications() == [publication]
    end

    test "get_publication!/1 returns the publication with given id" do
      publication = publication_fixture()
      assert Literature.get_publication!(publication.id) == publication
    end

    test "create_publication/1 with valid data creates an publication" do
      valid_attrs = %{name: "some name", slug: "some-name"}

      assert {:ok, %Publication{} = publication} = Literature.create_publication(valid_attrs)
      assert publication.name == "some name"
      assert publication.slug == "some-name"
    end

    test "create_publication/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Literature.create_publication(@invalid_attrs)
    end

    test "update_publication/2 with valid data updates the publication" do
      publication = publication_fixture()
      update_attrs = %{name: "some updated name", slug: "some-update-name"}

      assert {:ok, %Publication{} = publication} =
               Literature.update_publication(publication, update_attrs)

      assert publication.name == "some updated name"
      assert publication.slug == "some-update-name"
    end

    test "update_publication/2 with invalid data returns error changeset" do
      publication = publication_fixture()

      assert {:error, %Ecto.Changeset{}} =
               Literature.update_publication(publication, @invalid_attrs)

      assert publication == Literature.get_publication!(publication.id)
    end

    test "delete_publication/1 deletes the publication" do
      publication = publication_fixture()
      assert {:ok, %Publication{}} = Literature.delete_publication(publication)
      assert is_nil(Literature.get_publication!(publication.id))
    end

    test "change_publication/1 returns publication changeset" do
      publication = publication_fixture()
      assert %Ecto.Changeset{} = Literature.change_publication(publication)
    end
  end

  describe "tags" do
    alias Literature.Tag

    @invalid_attrs %{name: nil, slug: nil}

    test "list_tags/0 returns all tags" do
      publication = publication_fixture()
      tag = tag_fixture(publication_id: publication.id)
      assert Literature.list_tags() == [tag]
    end

    test "get_tag!/1 returns the tag with given id" do
      publication = publication_fixture()
      tag = tag_fixture(publication_id: publication.id)
      assert Literature.get_tag!(tag.id) == tag
    end

    test "create_tag/1 with valid data creates an tag" do
      publication = publication_fixture()

      valid_attrs = %{
        name: "some name",
        slug: "some-name",
        visibility: true,
        publication_id: publication.id
      }

      assert {:ok, %Tag{} = tag} = Literature.create_tag(valid_attrs)
      assert tag.publication_id == publication.id
      assert tag.name == "some name"
      assert tag.slug == "some-name"
    end

    test "create_tag/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Literature.create_tag(@invalid_attrs)
    end

    test "update_tag/2 with valid data updates the tag" do
      publication = publication_fixture()
      tag = tag_fixture(publication_id: publication.id)
      update_attrs = %{name: "some updated name", slug: "some-update-name"}

      assert {:ok, %Tag{} = tag} = Literature.update_tag(tag, update_attrs)
      assert tag.publication_id == publication.id
      assert tag.name == "some updated name"
      assert tag.slug == "some-update-name"
    end

    test "update_tag/2 with invalid data returns error changeset" do
      publication = publication_fixture()
      tag = tag_fixture(publication_id: publication.id)
      assert {:error, %Ecto.Changeset{}} = Literature.update_tag(tag, @invalid_attrs)
      assert tag == Literature.get_tag!(tag.id)
    end

    test "delete_tag/1 deletes the tag" do
      publication = publication_fixture()
      tag = tag_fixture(publication_id: publication.id)
      assert {:ok, %Tag{}} = Literature.delete_tag(tag)
      assert is_nil(Literature.get_tag!(tag.id))
    end

    test "change_tag/1 returns tag changeset" do
      publication = publication_fixture()
      tag = tag_fixture(publication_id: publication.id)
      assert %Ecto.Changeset{} = Literature.change_tag(tag)
    end
  end
end
