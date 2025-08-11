defmodule Literature.StaticPages.Layout do
  @moduledoc """
  Behaviour for static pages layout.
  Provides a `layout/1` component that can be used for all available static pages.

  ## Provided Components
  * `layout/1` – main HTML layout component that can be used for all available static pages. Useful for setting up SEO tags.
  """
  use Phoenix.Component

  import Literature.StaticPages.MetaTagHelpers

  @callback layout(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @callback header(assigns :: map()) :: Phoenix.LiveView.Rendered.t()
  @callback footer(assigns :: map()) :: Phoenix.LiveView.Rendered.t()

  @optional_callbacks [
    header: 1,
    footer: 1
  ]

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

  def header(assigns), do: ~H""
  def footer(assigns), do: ~H""
  def css_path, do: "/css/app.css"
  def js_path, do: "/js/app.js"
  def favicon_path, do: "/favicon/favicon.ico"
  def rss_path, do: "/feed"
end
