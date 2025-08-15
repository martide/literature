# Literature

`Literature` is a content management system built with `Phoenix.LiveView` and static pages generator that uses `Phoenix.Components`. It comes with a WYSIWYG post editor, image optimization, reusable SEO tags, and seamless integration to an existing Phoenix application.

## Installation

```elixir
def deps do
  [
    {:literature, "~> 0.4"}
  ]
end
```

## Quick Setup

Literature comes with built in databse tables that can be added through a migration and content management dashboard built with LiveView.

1. Setup config including Ecto repo for Literature to use and directory where static pages will be stored.

```elixir
config :literature,
  repo: MyApp.Repo,
  static_pages_storage_dir: "/tmp/literature/static_pages"
```

2. Setup Literature database tables by creating a new migration. This will create all necessary tables `Publication`, `Post`, `Author`, and `Tag`.

```elixir
defmodule MyApp.Repo.Migrations.SetupLiterature do
  use Ecto.Migration

  def up, do: Literature.Migrations.up([])
  def down, do: Literature.Migrations.down([])
end
```

3. Setup content management dashboard in your router. Use `Literature.Router` and add `literature_assets/1` for styling and JS files and `literature_dashboard/1` for the dashboard LiveView pages.

```elixir
defmodule MyAppWeb.Router do
  ...
  use Literature.Router

  literature_assets("/literature")
  literature_dashboard("/literature")
end
```

4. You can separate content by main topic by creating a publication for each. Create a publication e.g. `Blog` then create authors and tags. You can now start creating Posts with a WSYIWYG editor.

## Generating Static pages

`Literature.StaticPages.Generator`, `Literature.StaticPages.Layout`, and `Literature.StaticPages.Templates` will be used to generate your static HTML files.

- `Literature.StaticPages.Layout` - Behaviour for static pages layout. Provides a built in `layout/1` component that can be used readily with SEO tags.
- `Literature.StaticPages.Templates` - Behaviour that should contain all templates that will be used for static page generation. Provides placeholder components for all page types. See Available Pages for all available page types.
- `Literature.StaticPages.Generator` - contains all functions that will write your static files, either to a file or in memory.

1. Create your templates module using the built in layout. Here you can fully customize the content of your page and add more assigns using `Phoenix.Components`.

```elixir
defmodule MyAppWeb.Blog.Templates do
  use Phoenix.Component
  @behavior Literature.StaticPages.Templates

  import Literature.StaticPages.Layout, only: [layout: 1]

  @impl true
  def index(assigns) do
    ~H"""
    <.layout {assigns}>
      <h1>{@publication.name}</h1>
      <h2>Posts</h2>
      <ul>
        <li :for={post <- @posts}>
          {post.title}
        </li>
      </ul>
    </.layout>
    """
  end
end
```

2. Create your own generator file

```elixir
defmodule MyAppWeb.Blog.Generator do
  alias Literature.StaticPages.Generator, as: LiteratureGenerator

  def generate_index_page do
    opts =
      [
        publication_slug: "blog",
        base_url: "http://localhost:4000",
        templates: MyAppWeb.Blog.Templates,
        write_to: :file
      ]

    LiteratureGenerator.generate(:show, opts)
  end
end
```

Calling `MyAppWeb.Blog.Generator.generate_index_page()` should generate an `index.html` inside your set `static_pages_storage_dir`.
See `Literature.StaticPages.Generator` for more information.

Generated files can be served through `Plug.Static` or through a controller.

```elixir
defmodule MyAppWeb.BlogController do
  use Phoenix.Controller

  def index(conn, _params) do
    static_file_path = "/tmp/literature/static_pages/index.html"

    conn
    |> put_resp_header("content-type", "text/html; charset=utf-8")
    |> Conn.send_file(200, static_file_path)
  end
end
```

## Images
