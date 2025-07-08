defmodule Literature.StaticPages.Templates do
  use Phoenix.Component
  import Literature.StaticPages.MetaTagHelpers

  def layout(assigns) do
    ~H"""
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="generator" content={"Literature #{Application.spec(:literature, :vsn)}"} />

        <.meta_tags tags={assigns[:meta_tags] || %{}} current_url={@current_url} />
        <.canonical_tag current_url={@current_url} />
        <.pagination_link_tags page={assigns[:page]} current_url={@current_url} />
        <link rel="shortcut icon" type="image/png" href={favicon_path()} />
        <link rel="alternate" type="application/rss+xml" title={@publication.name} href={rss_path()} />

        <link phx-track-static rel="stylesheet" href={css_path()} />
        <!-- Language tag -->
        <.publication_language_tags publication={@publication} current_url={@current_url} />
        <.post_language_tags post={assigns[:post]} publication={@publication} />
        <!-- END Language tag -->
        <script defer phx-track-static type="text/javascript" src={js_path()}>
        </script>
      </head>
      <body>
        {render_slot(@inner_block)}
      </body>
    </html>
    """
  end

  def header(assigns), do: ~H""
  def footer(assigns), do: ~H""

  def index(assigns) do
    ~H"""
    <.layout {assigns}>
      <.header {assigns} />
      <main class="mx-auto max-w-6xl">
        <h1>{@publication.name}</h1>
        <h2>Posts</h2>
        <ul>
          <li :for={post <- @posts}>
            {post.title}
          </li>
        </ul>
      </main>
      <.footer {assigns} />
    </.layout>
    """
  end

  def index_page(assigns) do
    ~H"""
    <.layout>
      <h1>{@publication.name}</h1>
      <h2>Posts - {@page.page_number}</h2>
      <ul>
        <li :for={post <- @page.entries}>
          {post.title}
        </li>
      </ul>
    </.layout>
    """
  end

  def css_path, do: "css/app.css"
  def js_path, do: "js/app.js"
  def favicon_path, do: "favicon/favicon.ico"
  def rss_path, do: "rss/feed.xml"
end
