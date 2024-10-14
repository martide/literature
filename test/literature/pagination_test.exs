defmodule Literature.PaginationTest do
  use Literature.DataCase

  import Literature.Test.Fixtures
  import Ecto.Query, only: [from: 2, where: 2]

  alias Literature.Pagination
  alias Literature.Post

  @languages [
    "C#",
    "C++",
    "Clojure",
    "Elixir",
    "Erlang",
    "Go",
    "JAVA",
    "JavaScript",
    "Lisp",
    "PHP",
    "Perl",
    "Python",
    "Ruby",
    "Rust",
    "SQL"
  ]
  @total_entries length(@languages)
  @pagination_params %{page: 2, page_size: 4}

  describe "paginate list using a repo module" do
    setup do
      Application.put_env(:flop, :default_limit, 5)
    end

    test "can paginate a list using a Repo module  - 1" do
      page = Repo.paginate(@languages)

      assert page.page_size == 5
      assert page.page_number == 1
      assert page.entries == ["C#", "C++", "Clojure", "Elixir", "Erlang"]
      assert page.total_entries == @total_entries
      assert page.total_pages == Float.ceil(length(@languages) / 5)
    end

    test "can paginate a list using a Repo module - 2" do
      languages = Enum.take(@languages, 3)
      page = Repo.paginate(languages)

      assert page.page_number == 1
      assert page.page_size == 5
      assert page.entries == ["C#", "C++", "Clojure"]
      assert page.total_entries == 3
      assert page.total_pages == Float.ceil(length(languages) / 5)
    end

    test "can paginate a list when provided the current page and page size as a params map" do
      page = Repo.paginate(@languages, %{"page" => "2", "page_size" => "3"})

      assert page.page_size == 3
      assert page.page_number == 2
      assert page.entries == ["Elixir", "Erlang", "Go"]
      assert page.total_entries == @total_entries
      assert page.total_pages == Float.ceil(length(@languages) / 3)
    end

    test "can paginate a list when only provided with the page size as a keyword list
        and the page number defaults to page 1" do
      page = Repo.paginate(@languages, page_size: 3)

      assert page.page_size == 3
      assert page.page_number == 1
      assert page.entries == ["C#", "C++", "Clojure"]
      assert page.total_pages == Float.ceil(length(@languages) / 3)
      assert page.total_entries == @total_entries
    end

    test "can paginate a list when only provided with the page number as a keyword list
        and the page size defaults to the Repo configured page size" do
      page = Repo.paginate(@languages, page: 2)

      assert page.page_size == 5
      assert page.page_number == 2
      assert page.entries == ["Go", "JAVA", "JavaScript", "Lisp", "PHP"]
      assert page.total_pages == Float.ceil(length(@languages) / 5)
      assert page.total_entries == @total_entries
    end

    test "can respect a max_limit configuration" do
      Application.put_env(:flop, :max_limit, 10)

      assert_raise Flop.InvalidParamsError, fn ->
        Repo.paginate(@languages, page: 2, page_size: 200)
      end
    end
  end

  describe "paginate list without using a repo module" do
    test "can paginate a list when passed a pagination params directly - 1" do
      page = Pagination.paginate(@languages, @pagination_params, [])

      assert page.page_number == 2
      assert page.page_size == 4
      assert page.entries == ["Erlang", "Go", "JAVA", "JavaScript"]
      assert page.total_entries == @total_entries
      assert page.total_pages == Float.ceil(length(@languages) / 4)
    end

    test "can paginate a list when passed a pagination params directly - 2" do
      languages = Enum.take(@languages, 3)
      page = Pagination.paginate(languages, @pagination_params, [])

      assert page.page_number == 2
      assert page.page_size == 4
      assert page.entries == []
      assert page.total_entries == 3
      assert page.total_pages == Float.ceil(length(languages) / 4)
    end

    test "raises an error when provided the current page and page size as a params map" do
      assert_raise ArithmeticError, fn ->
        Pagination.paginate(@languages, %{"page" => "2", "page_size" => "3"}, [])
      end
    end

    test "can paginate a list when provided the current page and page size as a keyword list" do
      page = Pagination.paginate(@languages, [page: 2, page_size: 3], [])

      assert page.page_size == 3
      assert page.page_number == 2
      assert page.entries == ["Elixir", "Erlang", "Go"]
      assert page.total_pages == Float.ceil(length(@languages) / 3)
      assert page.total_entries == @total_entries
    end

    test "raises an error when only provided with the page size as a keyword list" do
      assert_raise ArithmeticError, fn ->
        Pagination.paginate(@languages, [page_size: 3], [])
      end
    end

    test "raises an error when only provided with the page number as a keyword list" do
      assert_raise ArithmeticError, fn ->
        Pagination.paginate(@languages, [page: 2], [])
      end
    end

    test "cannot respect a max_limit configuration" do
      Application.put_env(:flop, :max_limit, 10)
      page = Pagination.paginate(@languages, [page: 2, page_size: 200], [])

      refute page.page_size < 200
      assert page.page_number == 2
      assert page.entries == []
      assert page.total_pages == Float.ceil(length(@languages) / 200)
      assert page.total_entries == @total_entries
    end
  end

  describe "paginate Literature resource / and Ecto query in using repo module" do
    setup do
      Application.put_env(:flop, :default_limit, 5)

      publication =
        publication_fixture(
          name: "Blog",
          description: "Blog description",
          locale: "en",
          ex_default_locale: "en"
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
end
