defmodule Literature.BlogTest do
  use Literature.DataCase

  alias Literature.Blog

  describe "posts" do
    alias Literature.Blog.Post

    import Literature.BlogFixtures

    @invalid_attrs %{
      feature_image: nil,
      feature_image_alt: nil,
      feature_image_caption: nil,
      featured: nil,
      html: nil,
      meta_description: nil,
      meta_title: nil,
      slug: nil,
      title: nil
    }

    test "list_posts/0 returns all posts" do
      post = post_fixture()
      assert Blog.list_posts() == [post]
    end

    test "get_post!/1 returns the post with given id" do
      post = post_fixture()
      assert Blog.get_post!(post.id) == post
    end

    test "create_post/1 with valid data creates a post" do
      valid_attrs = %{
        feature_image: "some feature_image",
        feature_image_alt: "some feature_image_alt",
        feature_image_caption: "some feature_image_caption",
        featured: true,
        html: "some html",
        meta_description: "some meta_description",
        meta_title: "some meta_title",
        slug: "some slug",
        title: "some title"
      }

      assert {:ok, %Post{} = post} = Blog.create_post(valid_attrs)
      assert post.feature_image == "some feature_image"
      assert post.feature_image_alt == "some feature_image_alt"
      assert post.feature_image_caption == "some feature_image_caption"
      assert post.featured == true
      assert post.html == "some html"
      assert post.meta_description == "some meta_description"
      assert post.meta_title == "some meta_title"
      assert post.slug == "some slug"
      assert post.title == "some title"
    end

    test "create_post/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Blog.create_post(@invalid_attrs)
    end

    test "update_post/2 with valid data updates the post" do
      post = post_fixture()

      update_attrs = %{
        feature_image: "some updated feature_image",
        feature_image_alt: "some updated feature_image_alt",
        feature_image_caption: "some updated feature_image_caption",
        featured: false,
        html: "some updated html",
        meta_description: "some updated meta_description",
        meta_title: "some updated meta_title",
        slug: "some updated slug",
        title: "some updated title"
      }

      assert {:ok, %Post{} = post} = Blog.update_post(post, update_attrs)
      assert post.feature_image == "some updated feature_image"
      assert post.feature_image_alt == "some updated feature_image_alt"
      assert post.feature_image_caption == "some updated feature_image_caption"
      assert post.featured == false
      assert post.html == "some updated html"
      assert post.meta_description == "some updated meta_description"
      assert post.meta_title == "some updated meta_title"
      assert post.slug == "some updated slug"
      assert post.title == "some updated title"
    end

    test "update_post/2 with invalid data returns error changeset" do
      post = post_fixture()
      assert {:error, %Ecto.Changeset{}} = Blog.update_post(post, @invalid_attrs)
      assert post == Blog.get_post!(post.id)
    end

    test "delete_post/1 deletes the post" do
      post = post_fixture()
      assert {:ok, %Post{}} = Blog.delete_post(post)
      assert_raise Ecto.NoResultsError, fn -> Blog.get_post!(post.id) end
    end

    test "change_post/1 returns a post changeset" do
      post = post_fixture()
      assert %Ecto.Changeset{} = Blog.change_post(post)
    end
  end
end
