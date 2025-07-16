defmodule Literature.StaticPages.GeneratorTest do
  use Literature.ConnCase

  import Literature.Test.Fixtures
  import Literature.TestHelpers
  import Floki, only: [parse_document!: 1, find: 2, attribute: 2, text: 1]

  alias Literature.StaticPages.Generator

  @opts [
    publication_slug: "blog",
    path: "/en/blog",
    base_url: @endpoint.url(),
    templates: Literature.StaticPages.Templates,
    page_size: 10
  ]

  setup do
    pages_dir()
    |> File.rm_rf!()

    on_exit(fn ->
      pages_dir()
      |> File.rm_rf!()
    end)

    :ok
  end

  setup do
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

    {:ok, binding()}
  end

  describe "generate static pages" do
    test "generate/2 index", %{publication: publication} do
      Generator.generate(:index, @opts)
      html = read_file("/index.html")

      assert html =~ "<h1>#{publication.name}</h1>"
    end

    test "generate/2 index pages", %{publication: publication, author: author, tag: tag} do
      for i <- 1..20 do
        post_fixture(
          title: "Post #{i}",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )
      end

      # 21 posts -> 3 pages -> default 10 per page
      Generator.generate(:index_page, @opts)

      for page_number <- 1..3 do
        html = read_file("/page/#{page_number}/index.html")
        assert html =~ "<h1>#{publication.name} - Page #{page_number}</h1>"
      end
    end

    test "generate/2 show_post", %{
      post: post_1,
      publication: publication,
      author: author,
      tag: tag
    } do
      [post_2, post_3] =
        for i <- 1..2 do
          post_fixture(
            title: "Post #{i}",
            publication_id: publication.id,
            authors_ids: [author.id],
            tags_ids: [tag.id]
          )
        end

      Generator.generate(:show_post, @opts)

      for post <- [post_1, post_2, post_3] do
        html = read_file("/#{post.slug}.html")
        assert html =~ "<h1>#{post.title}</h1>"
      end
    end

    test "generate/2 authors index", %{publication: publication, author: author} do
      Generator.generate(:authors, @opts)
      html = read_file("/authors/index.html")

      assert html =~ "<h1>#{publication.name}</h1>"
      assert html =~ "#{author.name}"
    end

    test "generate/2 show author", %{publication: _publication, author: author} do
      Generator.generate(:show_author, @opts)
      html = read_file("/authors/#{author.slug}.html")

      assert html =~ "<h1>#{author.name}</h1>"
    end

    test "generate/2 tags index", %{publication: publication, tag: tag} do
      Generator.generate(:tags, @opts)
      html = read_file("/tags/index.html")

      assert html =~ "<h1>#{publication.name}</h1>"
      assert html =~ "#{tag.name}"
    end

    test "generate/2 show tag", %{publication: _publication, tag: tag} do
      Generator.generate(:show_tag, @opts)
      html = read_file("/tags/#{tag.slug}.html")

      assert html =~ "<h1>#{tag.name}</h1>"
    end

    test "generate/2 with missing publication" do
      assert_raise RuntimeError, "Publication with slug 'non-existent' not found.", fn ->
        Generator.generate(:index, Keyword.put(@opts, :publication_slug, "non-existent"))
      end
    end

    test "generate/2 with missing template" do
      assert_raise RuntimeError, "Template index not found in TemplateModule", fn ->
        Generator.generate(:index, Keyword.put(@opts, :templates, TemplateModule))
      end
    end

    test "generate/3 for show_post", %{post: post} do
      Generator.generate(:show_post, post.slug, @opts)
      html = read_file("/#{post.slug}.html")

      assert html =~ "<h1>#{post.title}</h1>"
      assert html =~ post.excerpt
    end

    test "generate/3 for show_author", %{author: author} do
      Generator.generate(:show_author, author.slug, @opts)
      html = read_file("/authors/#{author.slug}.html")

      assert html =~ "<h1>#{author.name}</h1>"
      assert html =~ author.bio
    end

    test "generate/3 for show_tag", %{tag: tag} do
      Generator.generate(:show_tag, tag.slug, @opts)
      html = read_file("/tags/#{tag.slug}.html")

      assert html =~ "<h1>#{tag.name}</h1>"
      assert html =~ tag.description
    end

    test "generate/3 for show_post with non-existent slug" do
      assert_raise RuntimeError, "Post with slug 'non-existent' not found.", fn ->
        Generator.generate(:show_post, "non-existent", @opts)
      end
    end

    test "generate/3 for show_author with non-existent slug" do
      assert_raise RuntimeError, "Author with slug 'non-existent' not found.", fn ->
        Generator.generate(:show_author, "non-existent", @opts)
      end
    end

    test "generate/3 for show_tag with non-existent slug" do
      assert_raise RuntimeError, "Tag with slug 'non-existent' not found.", fn ->
        Generator.generate(:show_tag, "non-existent", @opts)
      end
    end
  end

  test "publication language tags" do
    Generator.generate(:index, @opts)
    html = read_file("/index.html") |> parse_document!()

    current_url = @endpoint.url() <> "/en/blog/index.html"

    assert get_element(html, "link[href='#{current_url}'][hreflang='en'][rel='alternate']")

    assert get_element(
             html,
             "link[href='#{current_url}'][hreflang='x-default'][rel='alternate']"
           )
  end

  test "post language tags", %{post: post} do
    Generator.generate(:show_post, @opts)
    html = read_file("/#{post.slug}.html")

    current_url = @endpoint.url() <> "/en/blog/#{post.slug}.html"
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
    publication: publication,
    post: post
  } do
    # Update x-default to 'de' and then 'en' tag should not be shown
    Literature.update_publication(publication, %{ex_default_locale: "de"})

    Generator.generate(:show_post, @opts)
    html = read_file("/#{post.slug}.html") |> parse_document!()

    current_url = @endpoint.url() <> "/en/blog/#{post.slug}.html"

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

  test "full url canonical" do
    Generator.generate(:index, @opts)
    html = read_file("/index.html") |> parse_document!()

    assert get_element(
             html,
             "link[href='http://localhost/en/blog/index.html'][rel='canonical']"
           )
  end

  test "pagination links", %{publication: publication, tag: tag, author: author} do
    for i <- 1..20 do
      post_fixture(
        title: "Post #{i}",
        publication_id: publication.id,
        authors_ids: [author.id],
        tags_ids: [tag.id]
      )
    end

    Generator.generate(:index_page, @opts)
    html = read_file("/page/1/index.html") |> parse_document!()

    next_url = @endpoint.url() <> "/en/blog/page/2/index.html"

    assert get_element(html, "link[href='#{next_url}'][rel='next']")
    refute get_element(html, "link[rel='prev']")

    html = read_file("/page/2/index.html") |> parse_document!()
    next_url = @endpoint.url() <> "/en/blog/page/3/index.html"
    prev_url = @endpoint.url() <> "/en/blog/page/1/index.html"

    assert get_element(html, "link[href='#{next_url}'][rel='next']")
    assert get_element(html, "link[href='#{prev_url}'][rel='prev']")

    html = read_file("/page/3/index.html") |> parse_document!()
    prev_url = @endpoint.url() <> "/en/blog/page/2/index.html"

    refute get_element(html, "link[rel='next']")
    assert get_element(html, "link[href='#{prev_url}'][rel='prev']")
  end

  @meta_keys ~w(meta_title meta_description meta_keywords og_title og_description  twitter_title twitter_description)a
  describe "Meta tags" do
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

      {:ok, binding()}
    end

    test "posts index with pagination", %{publication: publication, tag: tag, author: author} do
      for i <- 1..20 do
        post_fixture(
          title: "Post #{i}",
          publication_id: publication.id,
          authors_ids: [author.id],
          tags_ids: [tag.id]
        )
      end

      Generator.generate(:index_page, @opts)
      html = read_file("/page/1/index.html") |> parse_document!()
      url = @endpoint.url() <> "/en/blog/page/1/index.html"

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

      assert_meta_tags(html, resources)

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

      Generator.generate(:index_page, @opts)
      html = read_file("/page/1/index.html") |> parse_document!()

      resources =
        Map.merge(resources, %{
          meta_title: publication.name,
          meta_description: publication.description,
          og_title: publication.name,
          og_description: publication.description,
          twitter_title: publication.name,
          twitter_description: publication.description
        })

      assert_meta_tags(html, resources)

      html = read_file("/page/2/index.html") |> parse_document!()
      title = publication.name <> " Page (2)"
      url = @endpoint.url() <> "/en/blog/page/2/index.html"

      resources =
        Map.merge(resources, %{
          meta_title: title,
          og_title: title,
          twitter_title: title,
          og_url: url,
          twitter_url: url
        })

      assert_meta_tags(html, resources)
    end

    test "show_post", %{post: post} do
      Generator.generate(:show_post, @opts)
      html = read_file("/#{post.slug}.html") |> parse_document!()
      url = @endpoint.url() <> "/en/blog/#{post.slug}.html"

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

      assert_meta_tags(html, resources)

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

      Generator.generate(:show_post, @opts)
      html = read_file("/#{post.slug}.html") |> parse_document!()

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

      assert_meta_tags(html, resources)

      # Fallback to publication images
      {:ok, post} = Literature.update_post(post, %{feature_image: nil})
      Generator.generate(:show_post, @opts)
      html = read_file("/#{post.slug}.html") |> parse_document!()

      resources =
        Map.merge(resources, %{
          og_image: "publication-og-image",
          twitter_image: "publication-twitter-image"
        })

      assert_meta_tags(html, resources)
    end

    test "authors index", %{publication: publication} do
      Generator.generate(:authors, @opts)
      html = read_file("/authors/index.html") |> parse_document!()

      url = @endpoint.url() <> "/en/blog/authors/index.html"

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

      assert_meta_tags(html, resources)

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

      title = publication.name

      resources =
        Map.merge(resources, %{
          meta_title: title,
          meta_description: publication.description,
          og_title: title,
          og_description: publication.description,
          twitter_title: title,
          twitter_description: publication.description
        })

      Generator.generate(:authors, @opts)
      html = read_file("/authors/index.html") |> parse_document!()

      assert_meta_tags(html, resources)
    end

    test "show author", %{author: author} do
      Generator.generate(:show_author, @opts)
      html = read_file("/authors/#{author.slug}.html") |> parse_document!()
      url = @endpoint.url() <> "/en/blog/authors/#{author.slug}.html"
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

      assert_meta_tags(html, resources)

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

      Generator.generate(:show_author, @opts)
      html = read_file("/authors/#{author.slug}.html") |> parse_document!()

      assert_meta_tags(html, resources)

      # Fallback to publication image
      {:ok, author} = Literature.update_author(author, %{cover_image: nil})

      resources =
        Map.merge(resources, %{
          meta_title: author.name,
          meta_description: author.bio,
          og_image: "publication-og-image",
          twitter_image: "publication-twitter-image"
        })

      Generator.generate(:show_author, @opts)
      html = read_file("/authors/#{author.slug}.html") |> parse_document!()
      assert_meta_tags(html, resources)
    end

    test "tags index", %{publication: publication} do
      Generator.generate(:tags, @opts)
      html = read_file("/tags/index.html") |> parse_document!()
      url = @endpoint.url() <> "/en/blog/tags/index.html"

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

      assert_meta_tags(html, resources)

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

      title = publication.name

      resources =
        Map.merge(resources, %{
          meta_title: title,
          meta_description: publication.description,
          og_title: title,
          og_description: publication.description,
          twitter_title: title,
          twitter_description: publication.description
        })

      Generator.generate(:tags, @opts)
      html = read_file("/tags/index.html") |> parse_document!()

      assert_meta_tags(html, resources)
    end

    test "show tag", %{tag: tag} do
      Generator.generate(:show_tag, @opts)
      html = read_file("/tags/#{tag.slug}.html") |> parse_document!()
      url = @endpoint.url() <> "/en/blog/tags/#{tag.slug}.html"

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

      assert_meta_tags(html, resources)

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

      Generator.generate(:show_tag, @opts)
      html = read_file("/tags/#{tag.slug}.html") |> parse_document!()
      assert_meta_tags(html, resources)

      # Fallback to publication images
      {:ok, tag} = Literature.update_tag(tag, %{feature_image: nil})

      resources =
        Map.merge(resources, %{
          og_image: "publication-og-image",
          twitter_image: "publication-twitter-image"
        })

      Generator.generate(:show_tag, @opts)
      html = read_file("/tags/#{tag.slug}.html") |> parse_document!()

      assert_meta_tags(html, resources)
    end
  end

  defp pages_dir do
    storate_dir = Application.get_env(:literature, :static_pages_storage_dir)
    Path.join(storate_dir, "/en/blog")
  end

  defp read_file(file_path) do
    pages_dir()
    |> Path.join(file_path)
    |> File.read!()
  end

  defp assert_meta_tags(html, resources) do
    assert_default_meta_tags(html, resources)
    assert_og_meta_tags(html, resources)
    assert_twitter_meta_tags(html, resources)
  end

  def assert_default_meta_tags(html, resources) do
    assert get_element(html, "title") |> text() == resources.meta_title

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

  defp get_element(html, selector) do
    html
    |> find(selector)
    |> Enum.at(0)
  end

  defp get_attribute(html, selector, attribute) do
    html
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
