defmodule Literature.BlogLive do
  use Literature.Web, :live_view

  import Literature.Helpers,
    only: [atomize_keys_to_string: 1, literature_image_url: 2]

  alias Literature.{Author, Post, Repo, Tag}

  @layout {Literature.LayoutView, :live}

  @impl Phoenix.LiveView
  def mount(%{"slug" => slug} = params, session, socket) do
    [&Literature.get_post!/1, &Literature.get_tag!/1, &Literature.get_author!/1]
    |> Enum.map(fn fun -> fun.(slug: slug, publication_slug: session["publication_slug"]) end)
    |> Enum.find(&is_struct/1)
    |> case do
      %Post{status: "published"} = post ->
        assign_to_socket(socket, :post, build_post(post, session["publication_slug"]))

      %Tag{visibility: true} = tag ->
        assign_to_socket(socket, :tag, preload_tag(tag))

      %Author{} = author ->
        assign_to_socket(socket, :author, preload_author(author))

      _ ->
        socket
    end
    |> assign(%{
      application_router: session["application_router"],
      locale: params["locale"],
      publication_slug: session["publication_slug"],
      view_module: session["view_module"]
    })
    |> then(&{:ok, &1, layout: @layout})
  end

  @impl Phoenix.LiveView
  def mount(params, session, socket) do
    socket
    |> assign(%{
      locale: params["locale"],
      publication_slug: session["publication_slug"],
      view_module: session["view_module"]
    })
    |> then(&{:ok, &1, layout: @layout})
  end

  @impl Phoenix.LiveView
  def render(%{view_module: view_module, live_action: live_action} = assigns) do
    live_action
    |> case do
      :show ->
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
      reraise Literature.PageNotFound,
              [
                conn: %{path_info: assigns[:path_info], method: "GET"},
                router: assigns[:application_router]
              ],
              __STACKTRACE__
  end

  @impl Phoenix.LiveView
  def handle_params(params, url, socket) do
    %{path: path} = URI.parse(url)
    
    cond do
      is_nil(params["page"]) ->
        do_handle_params(params, url, socket)

      params["page"] == "1" ->
        path
        |> String.replace("/?page=#{params["page"]}", "")
        |> then(&{:noreply, push_navigate(socket, to: &1, replace: true)})

      Integer.parse(params["page"]) == :error ->
        raise Literature.PageNotFound

      true ->
        do_handle_params(params, url, socket)
    end
  end

  defp do_handle_params(params, url, socket) do
    path_info = String.split(URI.parse(url).path, "/") |> Enum.reject(&(&1 == ""))
    socket
    |> assign(:current_url, url)
    |> assign(:path_info, path_info)
    |> apply_action(socket.assigns.live_action, socket.assigns.publication_slug, params)
    |> then(&{:noreply, &1})
  end

  defp apply_action(socket, :index, slug, params) do
    publication = Literature.get_publication!(slug: slug)
    page = paginate_posts(socket, params)
    
    socket
    |> assign_meta_tags(publication)
    |> override_title_with_page(page)
    |> assign(:publication, publication)
    |> assign(:page, page)
    |> assign(:posts, page.entries)
    |> path_not_found_when_page_number_exceeds_from_total_pages(params, page.total_pages)
  end

  defp apply_action(socket, :tags, slug, _params) do
    publication = Literature.get_publication!(slug: slug)
    meta_tags = get_meta_tags_from_view_module(socket, :tags, publication)

    socket
    |> assign_meta_tags(meta_tags)
    |> assign(:publication, publication)
    |> assign(:tags, list_tags(socket))
  end

  defp apply_action(socket, :authors, slug, _params) do
    publication = Literature.get_publication!(slug: slug)
    meta_tags = get_meta_tags_from_view_module(socket, :authors, publication)

    socket
    |> assign_meta_tags(meta_tags)
    |> assign(:publication, publication)
    |> assign(:authors, list_authors(socket))
  end

  defp apply_action(socket, _, slug, _) do
    publication = Literature.get_publication!(slug: slug)
    assign(socket, :publication, publication)
  end

  defp paginate_posts(%{assigns: %{publication_slug: slug}}, params) do
    %{
      "publication_slug" => slug,
      "status" => "published",
      "preload" => ~w(authors tags)a,
      "page" => params["page"],
      "page_size" => 10
    }
    |> Literature.paginate_posts()
  end

  defp list_tags(%{assigns: %{publication_slug: slug}}) do
    %{"publication_slug" => slug, "status" => "public"}
    |> Literature.list_tags()
    |> preload_tag()
  end

  defp list_authors(%{assigns: %{publication_slug: slug}}) do
    %{"publication_slug" => slug}
    |> Literature.list_authors()
    |> preload_author()
  end

  defp build_post(post, slug) do
    publication =
      Literature.get_publication!(slug: slug) |> Repo.preload(published_posts: ~w(authors tags)a)

    post
    |> Post.resolve_prev_and_next_post(publication)
    |> Post.resolve_similar_posts(publication)
  end

  defp preload_tag(tag),
    do: Repo.preload(tag, ~w(published_posts)a)

  defp preload_author(author),
    do: Repo.preload(author, ~w(published_posts)a)

  defp assign_to_socket(socket, name, struct) do
    socket
    |> assign(name, struct_to_map(struct))
    |> assign_meta_tags(struct)
  end

  defp assign_meta_tags(socket, struct) do
    struct
    |> struct_to_map()
    |> convert_name_to_title()
    |> convert_excerpt_to_description()
    |> convert_image_to_url()
    |> atomize_keys_to_string()
    |> then(&assign(socket, :meta_tags, &1))
  end

  defp struct_to_map(struct) when is_struct(struct),
    do: Map.from_struct(struct)

  defp struct_to_map(map), do: map

  defp convert_name_to_title(author_or_tag),
    do: Map.put_new(author_or_tag, :title, author_or_tag[:name])

  defp convert_excerpt_to_description(post),
    do: Map.put_new(post, :description, post[:excerpt])

  defp convert_image_to_url(author_or_tag_or_post) do
    image =
      literature_image_url(author_or_tag_or_post, :feature_image) ||
        literature_image_url(author_or_tag_or_post, :profile_image)

    author_or_tag_or_post
    |> Map.put(:image, image)
    |> Map.put(:og_image, literature_image_url(author_or_tag_or_post, :og_image))
    |> Map.put(:twitter_image, literature_image_url(author_or_tag_or_post, :twitter_image))
  end

  defp get_meta_tags_from_view_module(socket, action, publication) do
    socket.assigns.view_module.meta_tags(action, publication) || %{}
  rescue
    _ -> %{}
  end

  defp override_title_with_page(socket, %{page_number: 1}), do: socket

  defp override_title_with_page(%{assigns: %{meta_tags: meta_tags}} = socket, page) do
    %{
      meta_tags
      | "title" => meta_tags["title"] <> " - Page #{page.page_number} of #{page.total_pages}"
    }
    |> then(&assign(socket, :meta_tags, &1))
  end

  defp path_not_found_when_page_number_exceeds_from_total_pages(
         socket,
         %{"page" => page},
         total_pages
       ) do
    if String.to_integer(page) > total_pages do
      raise Literature.PageNotFound
    else
      socket
    end
  end

  defp path_not_found_when_page_number_exceeds_from_total_pages(socket, _, _), do: socket
end

defmodule Literature.PageNotFound do
  @moduledoc """
    Exception raised when no route is found.
  """
  defexception plug_status: 404, message: "no route found", conn: nil, router: nil

  if Mix.env() == :dev do
    def exception(opts) do
      conn = Keyword.fetch!(opts, :conn)
      router = Keyword.fetch!(opts, :router)
      path = "/" <> Enum.join(conn.path_info, "/")

      %Phoenix.Router.NoRouteError{
        message: "no route found for #{conn.method} #{path} (#{inspect(router)})",
        conn: conn,
        router: router
      }
    end
  end
end
