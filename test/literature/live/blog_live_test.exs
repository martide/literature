defmodule Literature.BlogLiveTest do
  use Literature.ConnCase

  import Floki, only: [parse_document!: 1, find: 2, attribute: 2]
  import Literature.TestHelpers
  import Literature.Test.Fixtures
  import Phoenix.LiveViewTest

  alias Literature.BlogView

  @sample_html [
    ~s"""
    <picture>
      <source srcset=\"/path/to/image-w100.jpg 100w, /path/to/image-w200.jpg 200w, /path/to/image-w300.jpg 300w\"/>
      <source srcset=\"/path/to/image-w100.webp 100w, /path/to/image-w200.webp 200w, /path/to/image-w300.webp 300w\"/>
      <img src=\"/path/to/image-w300x453.jpg\" alt=\"An image's test\" width=\"300\" height=\"453\" loading=\"lazy\" />
      <figcaption style="font-style: italic;";></figcaption>
    </picture>
    """,
    ~s"""
      <img src=\"/path/to/image-w300x453.jpg\" alt=\"An image's test\" caption=\"An image's test\" />
    """
  ]

  defp create_blog(_) do
    publication =
      publication_fixture(
        name: "Blog",
        description: "Blog description",
        locale: "en",
        ex_default_locale: "en"
      )

    author =
      author_fixture(publication_id: publication.id, name: "Author", bio: "Author description")

    tag = tag_fixture(publication_id: publication.id, name: "Tag", description: "Tag description")

    post =
      post_fixture(
        publication_id: publication.id,
        excerpt: "Post excerpt",
        authors_ids: [author.id],
        tags_ids: [tag.id],
        html: ["<p>content</p>"],
        locales: [
          %{locale: "en", url: "http://example.com/en"},
          %{locale: "de", url: "http://example.com/de"}
        ]
      )

    %{publication: publication, author: author, tag: tag, post: post}
  end

  describe "Blog live" do
    setup [:create_blog]

    test "redirects to / when path is /page/1", %{conn: conn} do
      assert {_, {:live_redirect, %{to: to}}} =
               live(conn, Routes.literature_path(conn, :index, 1))

      assert to == "/blog"
    end

    test "lists all blog posts", %{conn: conn, publication: publication, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :index))

      assert get_element(html, "link[href='#{@endpoint.url()}/blog'][rel='canonical']")

      assert html =~ publication.name
      assert html =~ publication.description
      assert html =~ post.title
    end

    test "lists blog posts page 2", %{
      conn: conn,
      publication: publication,
      tag: tag,
      author: author
    } do
      for i <- 1..20 do
        post_fixture(
          title: "Post #{i}",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )
      end

      assert {:ok, _view, html} = live(conn, Routes.literature_path(conn, :index, 2))

      prev_url = @endpoint.url() <> Routes.literature_path(conn, :index)
      next_url = @endpoint.url() <> Routes.literature_path(conn, :index, 3)

      html = parse_document!(html)
      assert get_element(html, "link[href='#{prev_url}'][rel='prev']")
      assert get_element(html, "link[href='#{next_url}'][rel='next']")
    end

    test "returns 404 error when page is not an integer", %{conn: conn} do
      assert_raise Literature.PageNotFound, fn ->
        get(conn, Routes.literature_path(conn, :index, "a"))
      end
    end

    test "returns 404 error when exceeds total pages", %{conn: conn} do
      assert_raise Literature.PageNotFound, fn ->
        get(conn, Routes.literature_path(conn, :index, 2))
      end
    end

    test "lists all blog tags", %{conn: conn, publication: publication, tag: tag} do
      {:ok, view, html} = live(conn, Routes.literature_path(conn, :tags))

      assert html =~ tag.name
      assert html =~ tag.description
      assert html =~ "1 post"
      assert page_title(view) == BlogView.meta_tags(:tags, publication).title
    end

    test "lists all blog authors", %{conn: conn, author: author, publication: publication} do
      {:ok, view, html} = live(conn, Routes.literature_path(conn, :authors))

      assert html =~ author.name
      assert html =~ author.bio
      assert html =~ "1 post"
      assert page_title(view) == BlogView.meta_tags(:authors, publication).title
    end

    test "renders single tag page", %{conn: conn, tag: tag, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, tag.slug))

      assert html =~ tag.name
      assert html =~ tag.description
      assert html =~ post.title
    end

    test "renders single author page", %{conn: conn, author: author, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, author.slug))

      assert html =~ author.name
      assert html =~ author.bio
      assert html =~ post.title
    end

    test "renders single post page", %{
      conn: conn,
      author: author,
      tag: tag,
      publication: publication
    } do
      # 3 mins reading time
      additional_html =
        for i <- 1..80 do
          # 5 words per paragraph
          # Create paragraphs with 5 words each to fill out 1 minute
          ~s"""
            <p> Paragraph with five words #{i} </p>
            <p></p>
          """
        end

      post =
        post_fixture(
          title: "3 minute read post",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id],
          html: @sample_html ++ additional_html,
          locales: [
            %{locale: "en", url: "http://example.com/en"},
            %{locale: "de", url: "http://example.com/de"}
          ]
        )

      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, post.slug))

      assert html =~ post.title
      assert html =~ "3 mins read"
      assert html =~ author.name
      assert html =~ tag.name
    end

    test "returns 404 error when page not found", %{conn: conn} do
      assert_raise Literature.PageNotFound, fn ->
        get(conn, Routes.literature_path(conn, :show, "page-not-exists"))
      end
    end

    test "redirects", %{conn: conn, publication: publication} do
      redirect = redirect_fixture(publication_id: publication.id, from: "/", to: "/tags")

      conn = get(conn, Routes.literature_path(conn, :index))
      assert redirected_to(conn, redirect.type) == Routes.literature_path(conn, :tags)

      redirect =
        redirect_fixture(publication_id: publication.id, from: "/some-post", to: "/", type: 302)

      conn = get(conn, Routes.literature_path(conn, :show, "some-post"))
      assert redirected_to(conn, redirect.type) == "/blog/"
    end

    test "publication language tags", %{conn: conn} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :index))

      current_url = @endpoint.url() <> Routes.literature_path(conn, :index)

      html = parse_document!(html)
      assert get_element(html, "link[href='#{current_url}'][hreflang='en'][rel='alternate']")

      assert get_element(
               html,
               "link[href='#{current_url}'][hreflang='x-default'][rel='alternate']"
             )
    end

    test "post language tags", %{conn: conn, post: post} do
      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :show, post.slug))

      current_url = @endpoint.url() <> Routes.literature_path(conn, :show, post.slug)
      html = parse_document!(html)

      assert get_element(
               html,
               "link[href='#{current_url}'][hreflang='en'][rel='alternate']"
             )

      assert get_element(
               html,
               "link[href='#{current_url}'][hreflang='x-default'][rel='alternate']"
             )

      for locale <- post.locales do
        assert get_element(
                 html,
                 "[href='#{locale.url}'][hreflang='#{locale.locale}'][rel='alternate']"
               )
      end
    end

    test "post language tags only renders equal to x-default", %{
      conn: conn,
      publication: publication,
      post: post
    } do
      # Update x-default to 'de' and then 'en' tag should not be shown
      Literature.update_publication(publication, %{ex_default_locale: "de"})

      path = Routes.literature_path(conn, :show, post.slug)
      {:ok, _view, html} = live(conn, path)

      current_url = @endpoint.url() <> path
      html = parse_document!(html)

      assert get_element(
               html,
               "link[href=\"#{current_url}\"][hreflang=\"en\"][rel=\"alternate\"]"
             )

      assert get_element(
               html,
               "link[href=\"#{current_url}\"][hreflang='x-default'][rel='alternate']"
             )

      assert get_element(
               html,
               "link[href=\"http://example.com/de\"][hreflang=\"de\"][rel=\"alternate\"]"
             )

      refute get_element(
               html,
               "link[href='http://example.com/en'][hreflang='en'][rel='alternate']"
             )
    end

    test "full url from conn", %{conn: conn} do
      conn =
        Map.merge(
          conn,
          %{host: "www.localhost", port: 4001}
        )

      {:ok, _view, html} = live(conn, Routes.literature_path(conn, :index))

      assert get_element(html, "link[href='http://www.localhost:4001/blog'][rel='canonical']")
    end
  end

  @meta_keys ~w(meta_title meta_description meta_keywords og_title og_description  twitter_title twitter_description)a
  describe "Meta tags" do
    setup [:create_blog]

    setup %{publication: publication, author: author, tag: tag, post: post} do
      {:ok, publication} =
        Literature.update_publication(publication, %{
          meta_title: "Publication Meta Title",
          meta_description: "Publication Meta Description",
          meta_keywords: "news, blog, articles",
          og_title: "Publication OG Title",
          og_description: "Publication OG Description",
          twitter_title: "Publication Twitter Title",
          twitter_description: "Publication Twitter Description",
          og_image: file_upload_image("publication-og-image"),
          twitter_image: file_upload_image("publication-twitter-image")
        })

      {:ok, post} =
        Literature.update_post(post, %{
          meta_title: "Post Meta Title",
          meta_description: "Post Meta Description",
          meta_keywords: "news, blog, articles",
          og_title: "Post OG Title",
          og_description: "Post OG Description",
          twitter_title: "Post Twitter Title",
          twitter_description: "Post Twitter Description",
          feature_image: file_upload_image("post-feature-image"),
          og_image: file_upload_image("post-og-image"),
          twitter_image: file_upload_image("post-twitter-image")
        })

      {:ok, author} =
        Literature.update_author(author, %{
          meta_title: "Author Meta Title",
          meta_description: "Author Meta Description",
          meta_keywords: "news, blog, articles",
          profile_image: file_upload_image("author-profile-image"),
          cover_image: file_upload_image("author-cover-image")
        })

      {:ok, tag} =
        Literature.update_tag(tag, %{
          meta_title: "Tag Meta Title",
          meta_description: "Tag Meta Description",
          meta_keywords: "news, blog, articles",
          og_title: "Tag OG Title",
          og_description: "Tag OG Description",
          twitter_title: "Tag Twitter Title",
          twitter_description: "Tag Twitter Description",
          feature_image: file_upload_image("tag-feature-image"),
          og_image: file_upload_image("tag-og-image"),
          twitter_image: file_upload_image("tag-twitter-image")
        })

      %{publication: publication, author: author, tag: tag, post: post}
    end

    test "posts index", %{conn: conn, publication: publication, tag: tag, author: author} do
      {:ok, view, html} = live(conn, Routes.literature_path(conn, :index))
      document = parse_document!(html)
      url = @endpoint.url() <> "/blog"

      assert_fixed_meta_tags(html)

      resources =
        publication
        |> Map.take(@meta_keys)
        |> Map.merge(%{
          og_image: "publication-og-image",
          og_url: url,
          twitter_image: "publication-twitter-image",
          twitter_url: url
        })

      assert_meta_tags(view, document, resources)

      # Fallback values
      {:ok, publication} =
        Literature.update_publication(publication, %{
          meta_title: nil,
          meta_description: nil,
          og_title: nil,
          og_description: nil,
          twitter_title: nil,
          twitter_description: nil
        })

      resources =
        Map.merge(resources, %{
          meta_title: publication.name,
          meta_description: publication.description,
          og_title: publication.name,
          og_description: publication.description,
          twitter_title: publication.name,
          twitter_description: publication.description
        })

      {:ok, view, html} = live(conn, Routes.literature_path(conn, :index))
      document = parse_document!(html)
      assert_meta_tags(view, document, resources)

      title = publication.name <> " Page (2)"
      url = @endpoint.url() <> "/blog/page/2"

      resources =
        Map.merge(resources, %{
          meta_title: title,
          og_title: title,
          twitter_title: title,
          og_url: url,
          twitter_url: url
        })

      for i <- 1..20 do
        post_fixture(
          title: "Post #{i}",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )
      end

      {:ok, view, html} = live(conn, Routes.literature_path(conn, :index, 2))
      document = parse_document!(html)
      assert_meta_tags(view, document, resources)
    end

    test "show post", %{conn: conn, post: post} do
      {:ok, view, html} = live(conn, Routes.literature_path(conn, :show, post.slug))
      document = parse_document!(html)
      url = @endpoint.url() <> Routes.literature_path(conn, :show, post.slug)

      assert_fixed_meta_tags(html)

      resources =
        post
        |> Map.take(@meta_keys)
        |> Map.merge(%{
          og_image: "post-og-image",
          og_url: url,
          twitter_image: "post-twitter-image",
          twitter_url: url
        })

      assert_meta_tags(view, document, resources)

      # Fallback values
      # Fallback images to feature image
      {:ok, post} =
        Literature.update_post(post, %{
          meta_title: nil,
          meta_description: nil,
          og_title: nil,
          og_description: nil,
          twitter_title: nil,
          twitter_description: nil,
          og_image: nil,
          twitter_image: nil
        })

      title = post.title

      resources =
        Map.merge(resources, %{
          meta_title: title,
          meta_description: post.excerpt,
          og_title: title,
          og_description: post.excerpt,
          og_image: "post-feature-image",
          twitter_title: title,
          twitter_description: post.excerpt,
          twitter_image: "post-feature-image"
        })

      {:ok, view, html} = live(conn, Routes.literature_path(conn, :show, post.slug))
      document = parse_document!(html)
      assert_meta_tags(view, document, resources)

      # Fallback to publication images
      {:ok, post} = Literature.update_post(post, %{feature_image: nil})

      resources =
        Map.merge(resources, %{
          og_image: "publication-og-image",
          twitter_image: "publication-twitter-image"
        })

      {:ok, view, html} = live(conn, Routes.literature_path(conn, :show, post.slug))
      document = parse_document!(html)
      assert_meta_tags(view, document, resources)
    end

    test "authors index", %{conn: conn, publication: publication} do
      {:ok, view, html} = live(conn, Routes.literature_path(conn, :authors))
      document = parse_document!(html)
      url = @endpoint.url() <> "/blog/authors"

      assert_fixed_meta_tags(html)

      resources =
        publication
        |> Map.take(@meta_keys)
        |> Map.merge(%{
          og_image: "publication-og-image",
          og_url: url,
          twitter_image: "publication-twitter-image",
          twitter_url: url
        })

      assert_meta_tags(view, document, resources)

      # Fallback values
      {:ok, publication} =
        Literature.update_publication(publication, %{
          meta_title: nil,
          meta_description: nil,
          og_title: nil,
          og_description: nil,
          twitter_title: nil,
          twitter_description: nil
        })

      title = publication.name <> " Authors"

      resources =
        Map.merge(resources, %{
          meta_title: title,
          meta_description: publication.description,
          og_title: title,
          og_description: publication.description,
          twitter_title: title,
          twitter_description: publication.description
        })

      {:ok, view, html} = live(conn, Routes.literature_path(conn, :authors))
      document = parse_document!(html)
      assert_meta_tags(view, document, resources)
    end

    test "show author", %{conn: conn, author: author} do
      {:ok, view, html} = live(conn, Routes.literature_path(conn, :show, author.slug))
      document = parse_document!(html)
      url = @endpoint.url() <> Routes.literature_path(conn, :show, author.slug)

      assert_fixed_meta_tags(html)

      resources =
        author
        |> Map.take(@meta_keys)
        |> Map.merge(%{
          og_title: author.name,
          og_description: author.bio,
          og_image: "author-profile-image",
          og_url: url,
          twitter_title: author.name,
          twitter_description: author.bio,
          twitter_image: "author-profile-image",
          twitter_url: url
        })

      assert_meta_tags(view, document, resources)

      # Fallback to cover image
      {:ok, author} =
        Literature.update_author(author, %{
          meta_description: nil,
          meta_title: nil,
          profile_image: nil
        })

      resources =
        Map.merge(resources, %{
          meta_title: author.name,
          meta_description: author.bio,
          og_image: "author-cover-image",
          twitter_image: "author-cover-image"
        })

      {:ok, view, html} = live(conn, Routes.literature_path(conn, :show, author.slug))
      document = parse_document!(html)
      assert_meta_tags(view, document, resources)

      # Fallback to publication image
      {:ok, author} = Literature.update_author(author, %{cover_image: nil})

      resources =
        Map.merge(resources, %{
          meta_title: author.name,
          meta_description: author.bio,
          og_image: "publication-og-image",
          twitter_image: "publication-twitter-image"
        })

      {:ok, view, html} = live(conn, Routes.literature_path(conn, :show, author.slug))
      document = parse_document!(html)
      assert_meta_tags(view, document, resources)
    end

    test "tags index", %{conn: conn, publication: publication} do
      {:ok, view, html} = live(conn, Routes.literature_path(conn, :tags))
      document = parse_document!(html)
      url = @endpoint.url() <> "/blog/tags"

      assert_fixed_meta_tags(html)

      resources =
        publication
        |> Map.take(@meta_keys)
        |> Map.merge(%{
          og_image: "publication-og-image",
          og_url: url,
          twitter_image: "publication-twitter-image",
          twitter_url: url
        })

      assert_meta_tags(view, document, resources)

      # Fallback values
      {:ok, publication} =
        Literature.update_publication(publication, %{
          meta_title: nil,
          meta_description: nil,
          og_title: nil,
          og_description: nil,
          twitter_title: nil,
          twitter_description: nil
        })

      title = publication.name <> " Tags"

      resources =
        Map.merge(resources, %{
          meta_title: title,
          meta_description: publication.description,
          og_title: title,
          og_description: publication.description,
          twitter_title: title,
          twitter_description: publication.description
        })

      {:ok, view, html} = live(conn, Routes.literature_path(conn, :tags))
      document = parse_document!(html)
      assert_meta_tags(view, document, resources)
    end

    test "show tag", %{conn: conn, tag: tag} do
      {:ok, view, html} = live(conn, Routes.literature_path(conn, :show, tag.slug))
      document = parse_document!(html)
      url = @endpoint.url() <> Routes.literature_path(conn, :show, tag.slug)

      assert_fixed_meta_tags(html)

      resources =
        tag
        |> Map.take(@meta_keys)
        |> Map.merge(%{
          og_image: "tag-og-image",
          og_url: url,
          twitter_image: "tag-twitter-image",
          twitter_url: url
        })

      assert_meta_tags(view, document, resources)

      # Fallback values
      # Fallback images to feature image
      {:ok, tag} =
        Literature.update_tag(tag, %{
          meta_title: nil,
          meta_description: nil,
          og_title: nil,
          og_description: nil,
          twitter_title: nil,
          twitter_description: nil,
          og_image: nil,
          twitter_image: nil
        })

      resources =
        Map.merge(resources, %{
          meta_title: tag.name,
          meta_description: tag.description,
          og_title: tag.name,
          og_description: tag.description,
          og_image: "tag-feature-image",
          twitter_title: tag.name,
          twitter_description: tag.description,
          twitter_image: "tag-feature-image"
        })

      {:ok, view, html} = live(conn, Routes.literature_path(conn, :show, tag.slug))
      document = parse_document!(html)
      assert_meta_tags(view, document, resources)

      # Fallback to publication images
      {:ok, tag} = Literature.update_tag(tag, %{feature_image: nil})

      resources =
        Map.merge(resources, %{
          og_image: "publication-og-image",
          twitter_image: "publication-twitter-image"
        })

      {:ok, view, html} = live(conn, Routes.literature_path(conn, :show, tag.slug))
      document = parse_document!(html)
      assert_meta_tags(view, document, resources)
    end
  end

  describe "On root routes" do
    setup do
      publication =
        publication_fixture(
          name: "On root",
          description: "On root description"
        )

      author =
        author_fixture(publication_id: publication.id, name: "Author", bio: "Author description")

      tag =
        tag_fixture(publication_id: publication.id, name: "Tag", description: "Tag description")

      post =
        post_fixture(
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id],
          html: ["<p>content</p>"],
          locales: [
            %{locale: "en", url: "http://example.com/en"},
            %{locale: "de", url: "http://example.com/de"}
          ]
        )

      %{publication: publication, author: author, tag: tag, post: post}
    end

    test "redirects on root routes", %{conn: conn, publication: publication} do
      redirect =
        redirect_fixture(publication_id: publication.id, from: "/some-post", to: "/", type: 302)

      conn = get(conn, Routes.on_root_path(conn, :show, "some-post"))
      assert redirected_to(conn, redirect.type) == "/"
    end

    test "lists blog posts page 2", %{
      conn: conn,
      publication: publication,
      tag: tag,
      author: author
    } do
      for i <- 1..20 do
        post_fixture(
          title: "Post #{i}",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )
      end

      assert {:ok, _view, html} = live(conn, Routes.on_root_path(conn, :index, 2))

      prev_url = @endpoint.url()
      next_url = @endpoint.url() <> Routes.on_root_path(conn, :index, 3)
      html = parse_document!(html)
      assert get_element(html, "link[href='#{prev_url}'][rel='prev']")
      assert get_element(html, "link[href='#{next_url}'][rel='next']")
    end
  end

  describe "without pagination route" do
    setup do
      publication =
        publication_fixture(
          name: "With only",
          description: "With only description"
        )

      author =
        author_fixture(publication_id: publication.id, name: "Author", bio: "Author description")

      tag =
        tag_fixture(publication_id: publication.id, name: "Tag", description: "Tag description")

      post =
        post_fixture(
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

      {:ok, binding()}
    end

    test "No pagination links", %{
      conn: conn,
      publication: publication,
      tag: tag,
      author: author
    } do
      for i <- 1..20 do
        post_fixture(
          title: "Post #{i}",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )
      end

      assert {:ok, _view, html} = live(conn, Routes.with_only_path(conn, :index))
      html = parse_document!(html)
      refute get_element(html, "link[rel='next']")
    end
  end

  describe "Custom routes" do
    setup do
      publication =
        publication_fixture(
          name: "Custom routes",
          og_image: file_upload_image("publication-og-image"),
          twitter_image: file_upload_image("publication-twitter-image")
        )

      author =
        author_fixture(publication_id: publication.id, name: "Author", bio: "Author description")

      tag =
        tag_fixture(
          publication_id: publication.id,
          name: "Custom Routes Tag",
          description: "Tag description"
        )

      post =
        post_fixture(
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )

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

    test "show_tag", %{conn: conn, tag: tag, post: post} do
      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_tag, tag.slug))

      assert html =~ tag.name
      assert page_title(view) == BlogView.meta_tags(:show_tag, %{tag: tag}).title

      # Not found when accessed through show path
      assert_raise Literature.PageNotFound, fn ->
        live(conn, Routes.custom_routes_path(conn, :show, tag.slug))
      end

      # Not found when tag does not exist
      assert_raise Literature.PageNotFound, fn ->
        live(conn, Routes.custom_routes_path(conn, :show_tag, "does-not-exist"))
      end

      # Show post should work as usual
      assert {:ok, _view, _html} =
               live(conn, Routes.custom_routes_path(conn, :show, post.slug))

      # Redirects to / when path is /page/1
      assert {_, {:live_redirect, %{to: to}}} =
               live(conn, Routes.custom_routes_path(conn, :show_tag, tag.slug, 1))

      assert to == "/custom-routes/tags/#{tag.slug}"

      # Renders /page/:page
      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_tag, tag.slug, 2))

      assert html =~ tag.name

      assert page_title(view) == "#{BlogView.meta_tags(:show_tag, %{tag: tag}).title} Page (2)"
    end

    test "show_tag meta tags", %{conn: conn, tag: tag} do
      {:ok, tag} =
        Literature.update_tag(tag, %{
          meta_title: "Tag Meta Title",
          meta_description: "Tag Meta Description",
          meta_keywords: "news, blog, articles",
          og_title: "Tag OG Title",
          og_description: "Tag OG Description",
          twitter_title: "Tag Twitter Title",
          twitter_description: "Tag Twitter Description",
          feature_image: file_upload_image("tag-feature-image"),
          og_image: file_upload_image("tag-og-image"),
          twitter_image: file_upload_image("tag-twitter-image")
        })

      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_tag, tag.slug))

      document = parse_document!(html)
      url = @endpoint.url() <> Routes.custom_routes_path(conn, :show_tag, tag.slug)

      resources =
        tag
        |> Map.take(@meta_keys)
        |> Map.merge(%{
          og_image: "tag-og-image",
          og_url: url,
          twitter_image: "tag-twitter-image",
          twitter_url: url
        })

      assert_meta_tags(view, document, resources)

      # Fallback values
      # Fallback images to feature image
      {:ok, tag} =
        Literature.update_tag(tag, %{
          meta_title: nil,
          meta_description: nil,
          og_title: nil,
          og_description: nil,
          twitter_title: nil,
          twitter_description: nil,
          og_image: nil,
          twitter_image: nil
        })

      title = tag.name <> " Tag"

      resources =
        Map.merge(resources, %{
          meta_title: title,
          meta_description: tag.description,
          og_title: title,
          og_description: tag.description,
          og_image: "tag-feature-image",
          twitter_title: title,
          twitter_description: tag.description,
          twitter_image: "tag-feature-image"
        })

      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_tag, tag.slug))

      document = parse_document!(html)
      assert_meta_tags(view, document, resources)

      # Fallback to publication images
      {:ok, tag} = Literature.update_tag(tag, %{feature_image: nil})

      resources =
        Map.merge(resources, %{
          og_image: "publication-og-image",
          twitter_image: "publication-twitter-image"
        })

      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_tag, tag.slug))

      document = parse_document!(html)
      assert_meta_tags(view, document, resources)

      # with pagination
      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_tag, tag.slug, 2))

      document = parse_document!(html)
      title = tag.name <> " Tag Page (2)"
      url = @endpoint.url() <> Routes.custom_routes_path(conn, :show_tag, tag.slug, 2)

      resources =
        Map.merge(resources, %{
          meta_title: title,
          og_title: title,
          twitter_title: title,
          og_url: url,
          twitter_url: url
        })

      assert_meta_tags(view, document, resources)
    end

    test "show_author", %{conn: conn, author: author, post: post} do
      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_author, author.slug))

      assert html =~ author.name

      assert page_title(view) == BlogView.meta_tags(:show_author, %{author: author}).title

      # Not found when accessed through show path
      assert_raise Literature.PageNotFound, fn ->
        live(conn, Routes.custom_routes_path(conn, :show, author.slug))
      end

      # Not found when author does not exist
      assert_raise Literature.PageNotFound, fn ->
        live(conn, Routes.custom_routes_path(conn, :show_author, "does-not-exist"))
      end

      # Show post and author should work as usual
      assert {:ok, _view, _html} =
               live(conn, Routes.custom_routes_path(conn, :show, post.slug))

      # Redirects to / when path is /page/1
      assert {_, {:live_redirect, %{to: to}}} =
               live(conn, Routes.custom_routes_path(conn, :show_author, author.slug, 1))

      assert to == "/custom-routes/authors/#{author.slug}"

      # Renders /page/:page
      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_author, author.slug, 2))

      assert html =~ author.name

      assert page_title(view) ==
               "#{BlogView.meta_tags(:show_author, %{author: author}).title} Page (2)"
    end

    test "show_author meta authors", %{conn: conn, author: author} do
      {:ok, author} =
        Literature.update_author(author, %{
          meta_title: "Author Meta Title",
          meta_description: "Author Meta Description",
          meta_keywords: "news, blog, articles",
          profile_image: file_upload_image("author-profile-image"),
          cover_image: file_upload_image("author-cover-image")
        })

      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_author, author.slug))

      document = parse_document!(html)
      url = @endpoint.url() <> Routes.custom_routes_path(conn, :show_author, author.slug)

      resources =
        author
        |> Map.take(@meta_keys)
        |> Map.merge(%{
          og_title: author.name <> " Author",
          og_description: author.bio,
          og_image: "author-profile-image",
          og_url: url,
          twitter_title: author.name <> " Author",
          twitter_description: author.bio,
          twitter_image: "author-profile-image",
          twitter_url: url
        })

      assert_meta_tags(view, document, resources)

      # Fallback values
      # Fallback images to cover image
      {:ok, author} =
        Literature.update_author(author, %{
          profile_image: nil,
          meta_title: nil,
          meta_description: nil
        })

      title = author.name <> " Author"

      resources =
        Map.merge(resources, %{
          meta_title: title,
          meta_description: author.bio,
          og_title: title,
          og_description: author.bio,
          og_image: "author-cover-image",
          twitter_title: title,
          twitter_description: author.bio,
          twitter_image: "author-cover-image"
        })

      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_author, author.slug))

      document = parse_document!(html)
      assert_meta_tags(view, document, resources)

      # Fallback to publication images
      {:ok, author} = Literature.update_author(author, %{cover_image: nil})

      resources =
        Map.merge(resources, %{
          og_image: "publication-og-image",
          twitter_image: "publication-twitter-image"
        })

      assert {:ok, view, html} =
               live(conn, Routes.custom_routes_path(conn, :show_author, author.slug))

      document = parse_document!(html)
      assert_meta_tags(view, document, resources)
    end
  end

  describe "Error view" do
    test "Display 404 page when page not found", %{conn: conn} do
      {:ok, view, _html} = live(conn, Routes.error_view_path(conn, :show, "page-not-exists"))
      html = render(view)

      assert html =~ "Page not found"
      assert html =~ "Sorry, we could not find the page you are looking for."
    end
  end

  defp assert_meta_tags(view, document, resources) do
    assert_default_meta_tags(view, document, resources)
    assert_og_meta_tags(document, resources)
    assert_twitter_meta_tags(document, resources)
  end

  def assert_default_meta_tags(view, html, resources) do
    assert page_title(view) == resources.meta_title

    assert get_attribute(html, "meta[name='description']", "content") ==
             resources.meta_description

    assert get_attribute(html, "meta[name='keywords']", "content") == resources.meta_keywords
  end

  def assert_fixed_meta_tags(html) do
    assert get_attribute(html, "meta[property='og:type']", "content") == "website"
    assert get_attribute(html, "meta[property='og:locale']", "content") == "en"
    assert get_attribute(html, "meta[name='twitter:card']", "content") == "summary_large_image"
  end

  defp assert_og_meta_tags(html, resources) do
    assert get_attribute(html, "meta[property='og:title']", "content") == resources.og_title
    assert get_attribute(html, "meta[property='og:url']", "content") == resources.og_url
    assert get_attribute(html, "meta[property='og:image']", "content") =~ resources.og_image

    assert get_attribute(html, "meta[property='og:description']", "content") ==
             resources.og_description
  end

  defp assert_twitter_meta_tags(html, resources) do
    assert get_attribute(html, "meta[name='twitter:title']", "content") == resources.twitter_title
    assert get_attribute(html, "meta[name='twitter:url']", "content") == resources.twitter_url
    assert get_attribute(html, "meta[name='twitter:image']", "content") =~ resources.twitter_image

    assert get_attribute(html, "meta[name='twitter:description']", "content") ==
             resources.twitter_description
  end

  defp get_element(document, selector) do
    document
    |> find(selector)
    |> Enum.at(0)
  end

  defp get_attribute(document, selector, attribute) do
    document
    |> get_element(selector)
    |> case do
      nil ->
        nil

      element ->
        element
        |> attribute(attribute)
        |> Enum.at(0)
    end
  end
end
