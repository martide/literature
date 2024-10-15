defmodule Literature.PaginationTest do
  use Literature.DataCase

  import Literature.Test.Fixtures

  alias Literature.Pagination
  alias Literature.Post

  @pagination_params %{page: 2, page_size: 4}

  setup :setup_posts

  setup do
    original_config = Application.get_all_env(:flop)
    on_exit(fn -> Application.put_all_env(flop: original_config) end)
  end

  describe "paginate Literature resource / and Ecto query using repo module" do
    test "can paginate resource using a Repo module", %{posts: posts} do
      page = Repo.paginate(Post)

      assert page.page_size == 5
      assert page.page_number == 1
      assert page.total_entries == Enum.count(posts)
      assert page.total_pages == Float.ceil(length(posts) / 5)
    end

    test "can paginate provided the page and page size as a params map", %{posts: posts} do
      page = Repo.paginate(Post, %{"page" => "2", "page_size" => "3"})

      assert page.page_size == 3
      assert page.page_number == 2
      assert page.total_entries == Enum.count(posts)
      assert page.total_pages == Float.ceil(length(posts) / 3)
    end

    test "can paginate when only provided with the page size as a keyword list
        and the page number defaults to page 1",
         %{posts: posts} do
      page = Repo.paginate(Post, page_size: 3)

      assert page.page_size == 3
      assert page.page_number == 1
      assert page.total_entries == Enum.count(posts)
      assert page.total_pages == Float.ceil(length(posts) / 3)
    end

    test "can paginate when only provided with the page number as a keyword list
        and the page size defaults to the Repo configured page size",
         %{posts: posts} do
      page = Repo.paginate(Post, page: 2)

      assert page.page_size == 5
      assert page.page_number == 2
      assert page.total_entries == Enum.count(posts)
      assert page.total_pages == Float.ceil(length(posts) / 5)
    end

    test "can respect a max_limit configuration", %{posts: posts} do
      Application.put_env(:flop, :max_limit, 10)

      assert_raise Flop.InvalidParamsError, fn ->
        Repo.paginate(posts, page: 2, page_size: 200)
      end
    end

    test "can paginate with ecto query provided", %{publication: publication} do
      publication_2 = publication_fixture()
      author_2 = author_fixture(publication_id: publication.id)
      tag_2 = tag_fixture(publication_id: publication.id)

      posts =
        for i <- 1..20 do
          post_fixture(
            title: "Post 2 #{i}",
            publication_id: publication_2.id,
            authors_ids: [author_2.id],
            tags_ids: [tag_2.id]
          )
        end

      query =
        Post
        |> from(as: :post)
        |> where(publication_id: ^publication_2.id)

      page = Repo.paginate(query)

      assert page.page_size == 5
      assert page.page_number == 1
      assert page.total_entries == Enum.count(posts)
      assert page.total_pages == Float.ceil(length(posts) / 5)
    end
  end

  describe "paginate Literature resource and Ecto query without repo module" do
    test "can paginate when passed with a pagination params directly", %{posts: posts} do
      page = Pagination.paginate(Post, @pagination_params, [])

      assert page.page_size == 4
      assert page.page_number == 2
      assert page.total_entries == Enum.count(posts)
      assert page.total_pages == Float.ceil(length(posts) / 4)
    end

    test "can paginate when passed with string pagination params", %{posts: posts} do
      page = Pagination.paginate(Post, %{"page" => "2", "page_size" => "5"}, [])

      assert page.page_size == 5
      assert page.page_number == 2
      assert page.total_entries == Enum.count(posts)
      assert page.total_pages == Float.ceil(length(posts) / 5)
    end

    test "can respect a max_limit configuration" do
      Application.put_env(:flop, :max_limit, 10)

      assert_raise Flop.InvalidParamsError, fn ->
        Pagination.paginate(Post, %{page: 2, page_size: 200}, [])
      end
    end

    test "can paginate with ecto query provided", %{publication: publication} do
      publication_2 = publication_fixture()
      author_2 = author_fixture(publication_id: publication.id)
      tag_2 = tag_fixture(publication_id: publication.id)

      posts =
        for i <- 1..20 do
          post_fixture(
            title: "Post 2 #{i}",
            publication_id: publication_2.id,
            authors_ids: [author_2.id],
            tags_ids: [tag_2.id]
          )
        end

      query =
        Post
        |> from(as: :post)
        |> where(publication_id: ^publication_2.id)

      page = Pagination.paginate(query, @pagination_params, [])

      assert page.page_size == 4
      assert page.page_number == 2
      assert page.total_entries == Enum.count(posts)
      assert page.total_pages == Float.ceil(length(posts) / 4)
    end
  end

  defp setup_posts(_) do
    Application.put_env(:flop, :default_limit, 5)

    publication =
      publication_fixture(
        name: "Blog",
        description: "Blog description"
      )

    author =
      author_fixture(publication_id: publication.id, name: "Author", bio: "Author description")

    tag =
      tag_fixture(publication_id: publication.id, name: "Tag", description: "Tag description")

    posts =
      for i <- 1..20 do
        post_fixture(
          title: "Post #{i}",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )
      end

    {:ok, binding()}
  end
end
