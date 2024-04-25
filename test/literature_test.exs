defmodule LiteratureTest do
  use Literature.DataCase

  import Literature.Helpers, only: [atomize_keys_to_string: 1]
  import Literature.Test.Fixtures

  alias Literature
  alias Literature.Tag

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
          title: "Contains Keyword phrase in the title",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      other_post =
        post_fixture(
          excerpt: "Other post contains Keyword phrase in excerpt",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      post_with_html =
        post_fixture(
          title: "Post with html",
          html: ["Test content", "Other post contains Keyword Phrase in html"],
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      another_post =
        post_fixture(
          title: "Another post without keyword",
          excerpt: "Not in excerpt",
          html: ["Test content", "Without keyword in html"],
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      attrs = %{"q" => "keyword phrase", "preload" => ~w(authors tags)a}

      assert %Scrivener.Page{entries: entries} = Literature.paginate_posts(attrs)

      post_ids = Enum.map(entries, & &1.id)

      assert post.id in post_ids
      assert other_post.id in post_ids
      assert post_with_html.id in post_ids
      assert another_post.id not in post_ids
    end

    test "paginate_posts/1 returns filtered posts based on tag slug" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)
      tag_2 = tag_fixture(publication_id: publication.id, name: "test")

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      _ =
        post_fixture(
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag_2.id],
          title: "test"
        )

      attrs = %{"tag_slug" => tag.slug, "preload" => ~w(authors tags)a}
      assert %Scrivener.Page{entries: entries} = Literature.paginate_posts(attrs)
      assert entries == [%{post | status: nil, authors_ids: nil, tags_ids: nil}]
    end

    test "paginate_posts/1 returns filtered posts based on status" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      published_post_1 =
        post_fixture(
          title: "Published post 1",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      published_post_2 =
        post_fixture(
          title: "Published post 2",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      draft_post =
        post_fixture(
          title: "Draft post",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id],
          is_published: false
        )

      scheduled_post =
        post_fixture(
          title: "Scheduled post",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id],
          is_published: true,
          published_at: DateTime.utc_now() |> DateTime.add(2, :day)
        )

      assert %Scrivener.Page{entries: entries} =
               Literature.paginate_posts(%{"status" => "published"})

      post_ids = Enum.map(entries, & &1.id)

      assert published_post_1.id in post_ids
      assert published_post_2.id in post_ids
      refute draft_post.id in post_ids
      refute scheduled_post.id in post_ids

      assert %Scrivener.Page{entries: [post]} =
               Literature.paginate_posts(%{"status" => "drafts"})

      assert post.id == draft_post.id

      assert %Scrivener.Page{entries: [post]} =
               Literature.paginate_posts(%{"status" => "scheduled"})

      assert post.id == scheduled_post.id
    end

    test "list_posts/0 returns all posts" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      assert Literature.list_posts() == [post]
    end

    test "list_posts/1 returns filtered posts based on tag slug" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)
      tag_2 = tag_fixture(publication_id: publication.id, name: "test")

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      _ =
        post_fixture(
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag_2.id],
          title: "test"
        )

      assert Literature.list_posts(%{
               "publication_slug" => publication.slug,
               "tag_slug" => tag.slug
             }) == [post]
    end

    test "list_posts/1 returns filtered posts based on excluded ids" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      post_2 =
        post_fixture(
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id],
          title: "test"
        )

      assert Literature.list_posts(%{
               "publication_slug" => publication.slug,
               "exclude_ids" => [post_2.id]
             }) == [post]
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
          tags_ids: [tag.id],
          locales: [
            %{locale: "en", url: "http://example.com/en"},
            %{locale: "de", url: "http://example.com/de"}
          ],
          is_published: false
        }
        |> atomize_keys_to_string()

      assert {:ok, %Post{} = post} = Literature.create_post(valid_attrs)
      assert post.publication_id == publication.id
      assert post.authors == [author]
      assert post.tags == [tag]
      assert post.title == "some title"
      assert post.slug == "some-title"
      assert Enum.find(post.locales, &(&1.locale == "en"))
      assert Enum.find(post.locales, &(&1.locale == "de"))
    end

    test "create_post/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Literature.create_post(@invalid_attrs)
    end

    test "create_post/1 requires published_at when set to published status" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      attrs =
        %{
          title: "some title",
          slug: "some-title",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id],
          is_published: true,
          published_at: nil
        }

      assert {:error, changeset} = Literature.create_post(attrs)

      assert changeset.errors == [
               published_at: {"This field is required", [validation: :required]}
             ]

      assert {:ok, %Post{}} =
               Literature.create_post(%{attrs | published_at: DateTime.utc_now()})
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

    test "update_post/2 requires published_at when set to published status" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      attrs =
        %{
          is_published: true,
          published_at: nil
        }

      assert {:error, %Ecto.Changeset{} = changeset} = Literature.update_post(post, attrs)

      assert changeset.errors == [
               published_at: {"This field is required", [validation: :required]}
             ]

      now = DateTime.utc_now() |> DateTime.truncate(:second)

      assert {:ok, %Post{} = post} =
               Literature.update_post(post, %{attrs | published_at: now})

      assert post.published_at == now
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

    test "custom_position update and preloading" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)
      other_tag = tag_fixture(name: "other tag", publication_id: publication.id)
      another_tag = tag_fixture(name: "another tag", publication_id: publication.id)

      post_1 =
        post_fixture(
          title: "Last",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id, other_tag.id],
          published_at: nil,
          is_published: false
        )

      post_2 =
        post_fixture(
          title: "third",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id, other_tag.id]
        )

      post_3 =
        post_fixture(
          title: "second",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id, other_tag.id]
        )

      post_4 =
        post_fixture(
          title: "First",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      assert {4, nil} ==
               Literature.sort_tag_posts([post_4.id, post_3.id, post_2.id, post_1.id], tag.id)

      assert {3, nil} ==
               Literature.sort_tag_posts(
                 [post_4.id, post_3.id, post_2.id, post_1.id],
                 other_tag.id
               )

      # Test preloading on list_tags/1
      tags =
        Literature.list_tags(%{
          "preload" => [
            posts: fn tag_ids ->
              Literature.preload_tag_posts_with_position(tag_ids)
            end,
            published_posts: fn tag_ids ->
              Literature.preload_tag_posts_with_position(tag_ids, "published")
            end
          ]
        })

      tag = Enum.find(tags, &(&1.id == tag.id))
      other_tag = Enum.find(tags, &(&1.id == other_tag.id))
      another_tag = Enum.find(tags, &(&1.id == another_tag.id))

      assert another_tag.posts == []
      assert another_tag.published_posts == []

      assert [
               {post_4.id, 1},
               {post_3.id, 2},
               {post_2.id, 3},
               {post_1.id, 4}
             ] == Enum.map(tag.posts, &{&1.id, &1.custom_position})

      assert [
               {post_3.id, 1},
               {post_2.id, 2},
               {post_1.id, 3}
             ] == Enum.map(other_tag.posts, &{&1.id, &1.custom_position})

      assert [
               {post_4.id, 1},
               {post_3.id, 2},
               {post_2.id, 3}
             ] == Enum.map(tag.published_posts, &{&1.id, &1.custom_position})

      assert [
               {post_3.id, 1},
               {post_2.id, 2}
             ] == Enum.map(other_tag.published_posts, &{&1.id, &1.custom_position})

      # Test preloading on Repo.preload/3
      tag =
        Repo.preload(
          tag,
          [
            posts: fn tag_ids ->
              Literature.preload_tag_posts_with_position(tag_ids)
            end,
            published_posts: fn tag_ids ->
              Literature.preload_tag_posts_with_position(tag_ids, "published")
            end
          ],
          force: true
        )

      assert [
               {post_4.id, 1},
               {post_3.id, 2},
               {post_2.id, 3},
               {post_1.id, 4}
             ] == Enum.map(tag.posts, &{&1.id, &1.custom_position})

      assert [
               {post_4.id, 1},
               {post_3.id, 2},
               {post_2.id, 3}
             ] == Enum.map(tag.published_posts, &{&1.id, &1.custom_position})
    end

    test "post status" do
      publication = publication_fixture()
      author = author_fixture(publication_id: publication.id)
      tag = tag_fixture(publication_id: publication.id)

      post =
        post_fixture(publication_id: publication.id, authors_ids: [author.id], tags_ids: [tag.id])

      assert post.status == "published"

      post =
        post_fixture(
          title: "Draft post",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id],
          published_at: nil,
          is_published: false
        )

      assert post.status == "draft"

      post =
        post_fixture(
          title: "Scheduled post",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id],
          published_at: DateTime.utc_now() |> DateTime.add(2, :day),
          is_published: true
        )

      assert post.status == "scheduled"
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
      valid_attrs = %{name: "some name", slug: "some-name", locale: "en"}

      assert {:ok, %Publication{} = publication} = Literature.create_publication(valid_attrs)
      assert publication.name == "some name"
      assert publication.slug == "some-name"
      assert publication.locale == "en"
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

  describe "redirects" do
    alias Literature.Redirect

    @invalid_attrs %{from: nil, to: nil, type: nil}

    test "paginate_redirects/0 returns all redirects" do
      publication = publication_fixture()
      redirect = redirect_fixture(publication_id: publication.id)

      assert %Scrivener.Page{entries: entries} =
               Literature.paginate_redirects(%{"publication_slug" => publication.slug})

      assert entries == [redirect]
    end

    test "paginate_redirects/1 returns filtered posts" do
      publication = publication_fixture()

      redirect =
        redirect_fixture(
          from: "with-from-keyword",
          publication_id: publication.id
        )

      other_redirect =
        redirect_fixture(
          to: "with-to-keyword",
          publication_id: publication.id
        )

      another_redirect = redirect_fixture(publication_id: publication.id)

      attrs = %{"q" => "keyword", "publication_slug" => publication.slug}

      assert %Scrivener.Page{entries: entries} =
               Literature.paginate_redirects(attrs)

      redirect_ids = Enum.map(entries, & &1.id)

      assert redirect.id in redirect_ids
      assert other_redirect.id in redirect_ids
      assert another_redirect.id not in redirect_ids
    end

    test "list_redirects/0 returns all redirects" do
      publication = publication_fixture()
      redirect = redirect_fixture(publication_id: publication.id)
      assert Literature.list_redirects() == [redirect]
    end

    test "get_redirect!/1 returns the redirect with given id" do
      publication = publication_fixture()
      redirect = redirect_fixture(publication_id: publication.id)
      assert Literature.get_redirect!(redirect.id) == redirect
    end

    test "create_redirect/1 with valid data creates an redirect" do
      publication = publication_fixture()

      valid_attrs = %{
        from: "/from-create",
        to: "/to-create",
        type: 301,
        publication_id: publication.id
      }

      assert {:ok, %Redirect{} = redirect} = Literature.create_redirect(valid_attrs)
      assert redirect.publication_id == publication.id
      assert redirect.from == "/from-create"
      assert redirect.to == "/to-create"
    end

    test "create_redirect/1 should check unqiue publication, from, to" do
      publication = publication_fixture()

      valid_attrs = %{
        from: "/from-create",
        to: "/to-create",
        type: 301,
        publication_id: publication.id
      }

      assert {:ok, %Redirect{}} =
               Literature.create_redirect(valid_attrs)

      assert {:error, %Ecto.Changeset{} = changeset} = Literature.create_redirect(valid_attrs)

      assert [
               from:
                 {"has already been taken",
                  [
                    constraint: :unique,
                    constraint_name: "literature_redirects_publication_id_from_to_index"
                  ]}
             ] = changeset.errors
    end

    test "create_redirect/1 should check from must not be equal to to" do
      publication = publication_fixture()

      valid_attrs = %{
        from: "/redirect-same",
        to: "/redirect-same",
        type: 301,
        publication_id: publication.id
      }

      assert {:error, %Ecto.Changeset{} = changeset} =
               Literature.create_redirect(valid_attrs)

      assert [
               from:
                 {"From and To must not be equal",
                  [constraint: :check, constraint_name: "from_must_not_be_equal_to_to"]}
             ] = changeset.errors
    end

    test "create_redirect/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Literature.create_redirect(@invalid_attrs)
    end

    test "update_redirect/2 with valid data updates the redirect" do
      publication = publication_fixture()
      redirect = redirect_fixture(publication_id: publication.id)
      update_attrs = %{from: "update-from", to: "update-to", type: 302}

      assert {:ok, %Redirect{} = redirect} = Literature.update_redirect(redirect, update_attrs)
      assert redirect.publication_id == publication.id
      assert redirect.from == "/update-from"
      assert redirect.to == "/update-to"
      assert redirect.type == 302
    end

    test "update_redirect/2 with invalid data returns error changeset" do
      publication = publication_fixture()
      redirect = redirect_fixture(publication_id: publication.id)
      assert {:error, %Ecto.Changeset{}} = Literature.update_redirect(redirect, @invalid_attrs)
      assert redirect == Literature.get_redirect!(redirect.id)
    end

    test "delete_redirect/1 deletes the redirect" do
      publication = publication_fixture()
      redirect = redirect_fixture(publication_id: publication.id)
      assert {:ok, %Redirect{}} = Literature.delete_redirect(redirect)
      assert is_nil(Literature.get_redirect!(redirect.id))
    end

    test "change_redirect/1 returns redirect changeset" do
      publication = publication_fixture()

      redirect =
        redirect_fixture(
          publication_id: publication.id,
          from: "from-with-slash",
          to: "to-with-slash"
        )

      assert %Ecto.Changeset{} = changeset = Literature.change_redirect(redirect)

      assert Ecto.Changeset.get_field(changeset, :from) == "/from-with-slash"
      assert Ecto.Changeset.get_field(changeset, :to) == "/to-with-slash"
    end
  end
end
