defmodule Literature.StaticPages.Templates do
  @moduledoc """
  Behaviour for the `templates` opt for `Literature.StaticPages.Generator`.
  Contains the `Phoenix.Component` callbacks for all `Generator.page_types()`.
  Also contains placeholder implementations for each page type.
  """
  use Phoenix.Component

  import Literature.StaticPages.Layout

  @callback index(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @callback index_page(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @callback show_post(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @callback authors(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @callback show_author(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @callback show_author_page(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @callback tags(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @callback show_tag(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @callback show_tag_page(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @optional_callbacks [
    index: 1,
    index_page: 1,
    show_post: 1,
    authors: 1,
    show_author: 1,
    show_author_page: 1,
    tags: 1,
    show_tag: 1,
    show_tag_page: 1
  ]

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

  def show_author_page(assigns) do
    ~H"""
    <.layout {assigns}>
      <.header {assigns} />
      <.main>
        <h1>{@author.name} - Page {@page.page_number}</h1>
        <h2>Posts</h2>
        <ul>
          <li :for={post <- @page.entries}>
            {post.title}
          </li>
        </ul>
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

  def show_tag_page(assigns) do
    ~H"""
    <.layout {assigns}>
      <.header {assigns} />
      <.main>
        <h1>{@tag.name} - Page {@page.page_number}</h1>
        <h2>Posts</h2>
        <ul>
          <li :for={post <- @page.entries}>
            {post.title}
          </li>
        </ul>
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
end
