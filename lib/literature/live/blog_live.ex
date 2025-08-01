defmodule Literature.BlogLive do
  use Literature.Web, :live_view

  import Literature.Helpers,
    only: [atomize_keys_to_string: 1, literature_image_url: 2]

  alias Literature.Author
  alias Literature.Post
  alias Literature.Publication
  alias Literature.Repo
  alias Literature.Tag

  @page_size Application.compile_env(:literature, :page_size, 10)

  @layout {Literature.LayoutView, :live}

  @impl Phoenix.LiveView
  def mount(%{"tag_slug" => tag_slug} = params, session, socket) do
    socket = assign_defaults(socket, params, session)

    Literature.get_tag!(
      slug: tag_slug,
      publication_slug: session["publication_slug"],
      visibility: true
    )
    |> case do
      %Tag{} = tag ->
        assign_to_socket(socket, :tag, tag |> Repo.preload(:publication))

      _ ->
        render_not_found(socket)
    end
    |> then(&{:ok, &1, layout: @layout})
  end

  def mount(%{"author_slug" => author_slug} = params, session, socket) do
    socket = assign_defaults(socket, params, session)

    Literature.get_author!(
      slug: author_slug,
      publication_slug: session["publication_slug"]
    )
    |> case do
      %Author{} = author ->
        assign_to_socket(socket, :author, author |> Repo.preload(:publication))

      _ ->
        render_not_found(socket)
    end
    |> then(&{:ok, &1, layout: @layout})
  end

  def mount(%{"slug" => slug} = params, session, socket) do
    socket = assign_defaults(socket, params, session)

    # Check if custom routes includes :show_tag and :show_author which are specific routes for tag and author
    # Render not found when :show_tag or :show_author is enabled,
    # Show page for tag should be accessed through :show_tag route -> /tags/:tag_slug
    # Show page for author should be accessed through :show_author route -> /authors/:author_slug
    custom_routes = session["custom_routes"] || []
    show_tag_route? = :show_tag in custom_routes
    show_author_route? = :show_author in custom_routes

    [&Literature.get_post!/1, &Literature.get_tag!/1, &Literature.get_author!/1]
    |> Enum.map(fn fun -> fun.(slug: slug, publication_slug: session["publication_slug"]) end)
    |> Enum.find(&is_struct/1)
    |> case do
      %Post{status: "published"} = post ->
        assign_to_socket(socket, :post, build_post(post))

      %Tag{visibility: true} = tag when not show_tag_route? ->
        assign_to_socket(socket, :tag, preload_tag(tag))

      %Author{} = author when not show_author_route? ->
        assign_to_socket(socket, :author, preload_author(author))

      _ ->
        render_not_found(socket)
    end
    |> then(&{:ok, &1, layout: @layout})
  end

  @impl Phoenix.LiveView
  def mount(params, session, socket) do
    socket
    |> assign(%{
      locale: params["locale"],
      publication_slug: session["publication_slug"],
      view_module: session["view_module"],
      error_view_module: session["error_view_module"],
      error_code: nil
    })
    |> then(&{:ok, &1, layout: @layout})
  end

  @impl Phoenix.LiveView
  def render(
        %{
          view_module: view_module,
          live_action: live_action,
          error_code: error_code
        } = assigns
      )
      when is_nil(error_code) do
    live_action
    |> case do
      show when show in [:show, :show_tag, :show_author] ->
        [
          {assigns[:post], "post.html"},
          {assigns[:tag], "tag.html"},
          {assigns[:author], "author.html"}
        ]
        |> Enum.find(fn {assign, _} -> is_map(assign) end)
        |> elem(1)

      action ->
        "#{to_string(action)}.html"
    end
    |> then(&Phoenix.View.render(view_module, &1, assigns))
  rescue
    _ ->
      reraise Literature.PageNotFound, __STACKTRACE__
  end

  def render(%{error_view_module: error_view_module, error_code: error_code} = assigns),
    do: Phoenix.View.render(error_view_module, "#{error_code}.html", assigns)

  @impl Phoenix.LiveView
  def handle_params(params, url, socket) do
    %{path: path} = URI.parse(url)

    with_page_number? =
      String.contains?(path, "/page/")

    cond do
      with_page_number? ->
        handle_page_param(params, url, socket)

      not with_page_number? and Map.has_key?(params, "page") ->
        render_not_found(socket)

      true ->
        do_handle_params(params, url, socket)
    end
  end

  defp handle_page_param(%{"page" => "1"}, url, socket) do
    %{path: path} = URI.parse(url)

    path
    |> String.replace("/page/1", "")
    |> case do
      "" -> "/"
      path -> path
    end
    |> then(&{:noreply, push_navigate(socket, to: &1, replace: true)})
  end

  defp handle_page_param(params, url, socket) do
    case Integer.parse(params["page"]) do
      {_, ""} -> do_handle_params(params, url, socket)
      _ -> render_not_found(socket)
    end
  end

  defp assign_defaults(socket, params, session) do
    assign(socket,
      application_router: session["application_router"],
      locale: params["locale"],
      publication_slug: session["publication_slug"],
      view_module: session["view_module"],
      error_view_module: session["error_view_module"],
      error_code: nil
    )
  end

  defp do_handle_params(params, url, socket) do
    path_info = String.split(URI.parse(url).path, "/") |> Enum.reject(&(&1 == ""))

    socket
    |> assign(:current_url, url)
    |> assign(:path_info, path_info)
    |> apply_action(socket.assigns.live_action, socket.assigns.publication_slug, params)
    |> then(&{:noreply, &1})
  end

  defp apply_action(socket, action, slug, params) when action in [:index, :search] do
    publication = Literature.get_publication!(slug: slug)
    page = paginate_posts(socket, params)

    socket
    |> assign_meta_tags(publication)
    |> override_title_with_page(page)
    |> assign(:publication, publication)
    |> assign(:page, page)
    |> assign(:posts, page.entries)
    |> assign(:search_term, params["q"])
    |> handle_page_exceeds_total(params, page.total_pages)
  end

  defp apply_action(socket, :tags, slug, _params) do
    publication = Literature.get_publication!(slug: slug)

    socket
    |> assign_meta_tags(publication)
    |> assign(:publication, publication)
    |> assign(:tags, list_tags(socket))
  end

  defp apply_action(socket, :authors, slug, _params) do
    publication = Literature.get_publication!(slug: slug)

    socket
    |> assign_meta_tags(publication)
    |> assign(:publication, publication)
    |> assign(:authors, list_authors(socket))
  end

  defp apply_action(socket, :show_tag, slug, params) do
    publication = Literature.get_publication!(slug: slug)

    page =
      Literature.paginate_posts(%{
        "publication_slug" => slug,
        "tag_slug" => params["tag_slug"],
        "status" => "published",
        "page" => params["page"],
        "page_size" => @page_size
      })

    socket
    |> assign_meta_tags(socket.assigns.tag)
    |> override_title_with_page(page)
    |> assign(:publication, publication || %{name: nil})
    |> assign(:posts, page.entries)
    |> assign(:page, page)
  end

  defp apply_action(socket, :show_author, slug, params) do
    publication = Literature.get_publication!(slug: slug)

    page =
      Literature.paginate_posts(%{
        "publication_slug" => slug,
        "author_slug" => params["author_slug"],
        "status" => "published",
        "page" => params["page"],
        "page_size" => @page_size
      })

    socket
    |> assign_meta_tags(socket.assigns.author)
    |> override_title_with_page(page)
    |> assign(:publication, publication || %{name: nil})
    |> assign(:posts, page.entries)
    |> assign(:page, page)
  end

  defp apply_action(socket, _, slug, _) do
    publication = Literature.get_publication!(slug: slug)
    assign(socket, :publication, publication || %{name: nil})
  end

  defp paginate_posts(%{assigns: %{publication_slug: slug}}, params) do
    %{
      "publication_slug" => slug,
      "status" => "published",
      "preload" => ~w(authors tags)a,
      "page" => params["page"],
      "page_size" => @page_size,
      "q" => params["q"]
    }
    |> Literature.paginate_posts()
  end

  defp list_tags(%{assigns: %{publication_slug: slug}}) do
    Literature.list_tags(%{
      "publication_slug" => slug,
      "status" => "public",
      "with_published_posts_count" => true
    })
  end

  defp list_authors(%{assigns: %{publication_slug: slug}}) do
    Literature.list_authors(%{"publication_slug" => slug, "with_published_posts_count" => true})
  end

  defp build_post(post) do
    post
    |> Repo.preload([:publication])
    |> Post.resolve_prev_and_next_post()
    |> Post.resolve_similar_posts()
  end

  defp preload_tag(tag),
    do: Repo.preload(tag, ~w(published_posts publication)a)

  defp preload_author(author),
    do: Repo.preload(author, ~w(published_posts publication)a)

  defp assign_to_socket(socket, name, struct) do
    socket
    |> assign(name, struct)
    |> assign_meta_tags(struct)
  end

  defp assign_meta_tags(socket, struct) do
    publication =
      case struct do
        %Publication{} -> struct
        _ -> struct.publication
      end

    meta_tags_from_view = get_meta_tags_from_view_module(socket, publication)

    struct
    |> Map.take(meta_tag_keys())
    |> maybe_convert_name_to_title(struct)
    |> maybe_put_description(struct)
    |> convert_image_to_url(struct)
    |> atomize_keys_to_string()
    |> then(&assign(socket, :meta_tags, Map.merge(&1, meta_tags_from_view)))
  end

  defp maybe_convert_name_to_title(meta_tags, %struct{} = author_or_tag)
       when struct in [Author, Tag, Publication],
       do: Map.put(meta_tags, :title, author_or_tag.name)

  defp maybe_convert_name_to_title(meta_tags, _), do: meta_tags

  defp maybe_put_description(meta_tags, %Post{} = post),
    do: Map.put(meta_tags, :description, post.excerpt)

  defp maybe_put_description(meta_tags, %Author{} = author),
    do: Map.put(meta_tags, :description, author.bio)

  defp maybe_put_description(meta_tags, _), do: meta_tags

  defp convert_image_to_url(meta_tags, resource) do
    {image, publication} =
      case resource do
        %Author{} = author ->
          {literature_image_url(author, :profile_image) ||
             literature_image_url(author, :cover_image), author.publication}

        %struct{} = tag_or_post when struct in [Post, Tag] ->
          {literature_image_url(tag_or_post, :feature_image), tag_or_post.publication}

        publication ->
          {nil, publication}
      end

    # default to publication if resource has no og or twitter image
    Map.merge(meta_tags, %{
      image: image,
      og_image:
        literature_image_url(resource, :og_image) || image ||
          literature_image_url(publication, :og_image),
      twitter_image:
        literature_image_url(resource, :twitter_image) || image ||
          literature_image_url(publication, :twitter_image)
    })
  end

  defp get_meta_tags_from_view_module(
         %{
           assigns:
             %{
               view_module: view_module,
               live_action: action
             } = assigns
         },
         publication
       ) do
    resource =
      case action do
        action when action in [:show_tag, :show_author] -> assigns
        _ -> publication
      end

    view_module.meta_tags(action, resource)
    |> Kernel.||(%{})
    |> convert_image_tags_to_url()
    |> atomize_keys_to_string()
  rescue
    _ -> %{}
  end

  defp get_meta_tags_from_view_module(_, _), do: %{}

  defp convert_image_tags_to_url(meta_tags) do
    image_tags =
      meta_tags
      |> Map.take([:image, :og_image, :twitter_image])
      |> Enum.reduce(%{}, fn {key, value}, acc ->
        value =
          case value do
            %{} -> literature_image_url(meta_tags, key)
            _ -> value
          end

        Map.put(acc, key, value)
      end)

    Map.merge(meta_tags, image_tags)
  end

  defp override_title_with_page(socket, %{page_number: 1}), do: socket

  defp override_title_with_page(%{assigns: %{meta_tags: meta_tags}} = socket, page) do
    %{
      meta_tags
      | "title" => meta_tags["title"] <> " Page (#{page.page_number})"
    }
    |> then(&assign(socket, :meta_tags, &1))
  end

  # Render not found when page exceeds total pages
  defp handle_page_exceeds_total(
         socket,
         %{"page" => page},
         total_pages
       ) do
    with {page, _} <- Integer.parse(page),
         true <- page <= total_pages do
      socket
    else
      _ ->
        render_not_found(socket)
    end
  end

  defp handle_page_exceeds_total(socket, _, _), do: socket

  def render_not_found(%Phoenix.LiveView.Socket{} = socket) do
    if socket.assigns.error_view_module do
      assign(socket, error_code: 404)
    else
      raise Literature.PageNotFound
    end
  end

  defp meta_tag_keys do
    [
      :title,
      :meta_title,
      :description,
      :meta_description,
      :meta_keywords,
      :image,
      :og_title,
      :og_image,
      :og_description,
      :twitter_image,
      :twitter_title,
      :twitter_description
    ]
  end
end
