defmodule Literature.StaticPages.Templates do
  @moduledoc """
  Provides `Phoenix.Components` for rendering static pages in Literature publications.

  This module defines components used by the `Literature.StaticPages.Generator` various page types, such as index and paginated index pages.
  It includes a `layout/1` component with extensive coverage for SEO tags.
  It also contains placeholder components for all `Available Pages` in the `Literature.StaticPages.Generator`.

  ## Provided Components
    * `layout/1` – main HTML layout component that can be used for all available static pages. Useful for setting up SEO tags.
                  `rss_path`, `favicon_path`, `css_path`, and `js_path` should be provided.


  ## Usage

  This module is intended to be used as a `:templates` option in `Literature.StaticPages.Generator` or a pattern for
  a more custom templates module for the `Literature.StaticPages.Generator`.

  """
  use Phoenix.Component

  import Literature.StaticPages.MetaTagHelpers

  def layout(assigns) do
    assigns =
      assigns
      |> assign_new(:meta_tags, fn -> %{} end)
      |> assign_new(:rss_path, fn -> rss_path() end)
      |> assign_new(:favicon_path, fn -> favicon_path() end)
      |> assign_new(:css_path, fn -> css_path() end)
      |> assign_new(:js_path, fn -> js_path() end)

    ~H"""
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="generator" content={"Literature #{Application.spec(:literature, :vsn)}"} />

        <.meta_tags tags={@meta_tags} current_url={@current_url} />
        <.canonical_tag current_url={@current_url} />
        <.pagination_link_tags {assigns} />

        <link rel="shortcut icon" type="image/png" href={@favicon_path} />
        <link rel="alternate" type="application/rss+xml" title={@publication.name} href={@rss_path} />
        <link rel="stylesheet" href={@css_path} />
        <!-- Language tag -->
        <.publication_language_tags publication={@publication} current_url={@current_url} />
        <.post_language_tags post={assigns[:post]} publication={@publication} />
        <!-- END Language tag -->
        <script defer type="text/javascript" src={@js_path}>
        </script>
      </head>
      <body>
        {render_slot(@inner_block)}
      </body>
    </html>
    """
  end

  defp header(assigns), do: ~H""
  defp footer(assigns), do: ~H""

  def index(assigns) do
    ~H"""
    <.layout {assigns}>
      <.header {assigns} />
      <.main>
        <h1>{@publication.name}</h1>
        <h2>Posts</h2>
        <ul>
          <li :for={post <- @posts}>
            {post.title}
          </li>
        </ul>
      </.main>
      <.footer {assigns} />
    </.layout>
    """
  end

  def index_page(assigns) do
    ~H"""
    <.layout {assigns}>
      <.main>
        <h1>{@publication.name} - Page {@page.page_number}</h1>
        <h2>Posts</h2>
        <ul>
          <li :for={post <- @page.entries}>
            {post.title}
          </li>
        </ul>
      </.main>
    </.layout>
    """
  end

  def show_post(assigns) do
    ~H"""
    <.layout {assigns}>
      <.main>
        <h1>{@post.title}</h1>
        <p>{@post.excerpt}</p>
      </.main>
    </.layout>
    """
  end

  def authors(assigns) do
    ~H"""
    <.layout {assigns}>
      <.header {assigns} />
      <.main>
        <h1>{@publication.name}</h1>
        <h2>Authors</h2>
        <ul>
          <li :for={author <- @authors}>
            {author.name}
          </li>
        </ul>
      </.main>
      <.footer {assigns} />
    </.layout>
    """
  end

  def show_author(assigns) do
    ~H"""
    <.layout {assigns}>
      <.header {assigns} />
      <.main>
        <h1>{@author.name}</h1>
      </.main>
      <.footer {assigns} />
    </.layout>
    """
  end

  def tags(assigns) do
    ~H"""
    <.layout {assigns}>
      <.header {assigns} />
      <.main>
        <h1>{@publication.name}</h1>
        <h2>Tags</h2>
        <ul>
          <li :for={tag <- @tags}>
            {tag.name}
          </li>
        </ul>
      </.main>
      <.footer {assigns} />
    </.layout>
    """
  end

  def show_tag(assigns) do
    ~H"""
    <.layout {assigns}>
      <.header {assigns} />
      <.main>
        <h1>{@tag.name}</h1>
      </.main>
      <.footer {assigns} />
    </.layout>
    """
  end

  defp main(assigns) do
    ~H"""
    <main class="mx-auto max-w-6xl">
      {render_slot(@inner_block)}
    </main>
    """
  end

  def css_path, do: "/css/app.css"
  def js_path, do: "/js/app.js"
  def favicon_path, do: "/favicon/favicon.ico"
  def rss_path, do: "/feed"
end
