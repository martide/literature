# Literature Usage Rules

Literature is a Phoenix-based blog content management system designed for creating publication-focused blogs with static HTML generation capabilities.

## Core Concepts

### Publications

- **Primary organizing unit** - Each publication represents a distinct blog or content collection
- **Required for all content** - Posts, authors, and tags belong to a specific publication
- **Separate namespacing** - Allows multiple blogs within one application
- **SEO configuration** - Each publication has its own meta tags, RSS settings, and social media configuration

### Content Hierarchy

```
Publication
├── Authors (many-to-many with posts)
├── Posts (belongs to publication, associated with authors/tags)
└── Tags (scoped to publication)
```

## Setup and Installation

### 1. Add Literature Dependency

Add Literature to your `mix.exs` dependencies:

```elixir
def deps do
  [
    {:literature, "~> 0.4"}
  ]
end
```

### 2. Configuration Setup

Configure Literature in your `config/config.exs` or environment-specific config files:

```elixir
config :literature,
  repo: MyApp.Repo,
  static_pages_storage_dir: "/tmp/literature/static_pages"
```

For image handling, add Waffle configuration:

```elixir
config :literature,
  storage: Waffle.Storage.Local,
  storage_dir_prefix: "/tmp/literature/",
  asset_host: "/tmp/literature"
```

For production with cloud storage (S3 example):

```elixir
config :literature,
  storage: Waffle.Storage.S3,
  bucket: "my-literature-bucket",
  asset_host: "https://my-literature-bucket.s3.amazonaws.com"

config :ex_aws,
  access_key_id: System.get_env("AWS_ACCESS_KEY_ID"),
  secret_access_key: System.get_env("AWS_SECRET_ACCESS_KEY"),
  region: "us-east-1"
```

### 3. Database Migration

Create a migration to set up Literature tables:

```elixir
defmodule MyApp.Repo.Migrations.SetupLiterature do
  use Ecto.Migration

  def up, do: Literature.Migrations.up([])
  def down, do: Literature.Migrations.down([])
end
```

Run the migration:

```bash
mix ecto.migrate
```

### 4. Router Configuration

Add Literature admin routes to your Phoenix router:

```elixir
defmodule MyAppWeb.Router do
  use Phoenix.Router
  use Literature.Router

  ...

  scope "/" do
    # Literature admin dashboard
    literature_dashboard("/literature")

    # Literature static assets (CSS, JS)
    literature_assets("/literature")
  end
end
```

### 5. Initial Data Setup

Create your first publication through the admin dashboard or programmatically:

```elixir
# In IEx or a seed file
alias Literature.{Publications, Authors, Tags}

# Create a publication
{:ok, publication} = Publications.create_publication(%{
  slug: "blog",
  name: "My Blog",
  description: "A blog about technology and life",
  meta_title: "My Blog - Technology and Life",
  meta_description: "Insights about technology and life"
})

# Create an author
{:ok, author} = Authors.create_author(%{
  publication_id: publication.id,
  slug: "john-doe",
  name: "John Doe",
  bio: "Software developer and writer"
})

# Create some tags
{:ok, tech_tag} = Tags.create_tag(%{
  publication_id: publication.id,
  slug: "technology",
  name: "Technology"
})

{:ok, life_tag} = Tags.create_tag(%{
  publication_id: publication.id,
  slug: "life",
  name: "Life"
})
```

### 6. Static Pages Template Setup

Create your templates module for static page generation:

```elixir
defmodule MyAppWeb.Blog.Templates do
  use Phoenix.Component
  @behaviour Literature.StaticPages.Templates

  import Literature.StaticPages.Layout, only: [layout: 1]

  @impl true
  def index(assigns) do
    ~H"""
    <.layout {assigns}>
      <div class="max-w-4xl mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-8"><%= @publication.name %></h1>
        <p class="text-xl text-gray-600 mb-12"><%= @publication.description %></p>

        <div class="grid gap-8">
          <article :for={post <- @posts} class="border-b pb-8 mb-8">
            <h2 class="text-2xl font-semibold mb-2">
              <a href={"/blog/#{post.slug}"} class="hover:text-blue-600">
                <%= post.title %>
              </a>
            </h2>
            <p class="text-gray-600 mb-4"><%= post.excerpt %></p>
            <div class="text-sm text-gray-500">
              <span>By <%= Enum.map(post.authors, & &1.name) |> Enum.join(", ") %></span>
              <span class="mx-2">•</span>
              <span><%= Calendar.strftime(post.published_at, "%B %d, %Y") %></span>
            </div>
          </article>
        </div>
      </div>
    </.layout>
    """
  end

  @impl true
  def show_post(assigns) do
    ~H"""
    <.layout {assigns}>
      <article class="max-w-4xl mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold mb-4"><%= @post.title %></h1>

        <div class="text-gray-600 mb-8">
          <span>By <%= Enum.map(@post.authors, & &1.name) |> Enum.join(", ") %></span>
          <span class="mx-2">•</span>
          <span><%= Calendar.strftime(@post.published_at, "%B %d, %Y") %></span>
        </div>

        <div class="prose prose-lg max-w-none">
          <%= raw(@post.html) %>
        </div>

        <div :if={@post.tags != []} class="mt-8 pt-8 border-t">
          <span class="text-sm font-medium text-gray-700">Tagged: </span>
          <span :for={tag <- @post.tags} class="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2">
            <%= tag.name %>
          </span>
        </div>
      </article>
    </.layout>
    """
  end

  # Additional template implementations...
  @impl true
  def index_page(assigns), do: ~H"<!-- Paginated index template -->"

  @impl true
  def authors(assigns), do: ~H"<!-- Authors index template -->"

  @impl true
  def show_author(assigns), do: ~H"<!-- Author profile template -->"

  @impl true
  def tags(assigns), do: ~H"<!-- Tags index template -->"

  @impl true
  def show_tag(assigns), do: ~H"<!-- Tag listing template -->"
end
```

### 7. Static Pages Generator

Create a generator module for building static files:

```elixir
defmodule MyAppWeb.Blog.Generator do
  alias Literature.StaticPages.Generator, as: LiteratureGenerator

  def generate_all do
    opts = [
      publication_slug: "blog",
      base_url: "https://myblog.com",
      templates: MyAppWeb.Blog.Templates,
      write_to: :file
    ]

    # Generate all page types
    LiteratureGenerator.generate(:index, opts)
    LiteratureGenerator.generate(:index_page, opts)
    LiteratureGenerator.generate(:show_post, opts)
    LiteratureGenerator.generate(:authors, opts)
    LiteratureGenerator.generate(:show_author, opts)
    LiteratureGenerator.generate(:tags, opts)
    LiteratureGenerator.generate(:show_tag, opts)
  end

  def generate_index_page do
    opts = [
      publication_slug: "blog",
      base_url: "https://myblog.com",
      templates: MyAppWeb.Blog.Templates,
      write_to: :file
    ]

    LiteratureGenerator.generate(:index, opts)
  end
end
```

### 8. Serving Static Content

Add routes for your blog pages:

```elixir
# In your router.ex
scope "/blog" do
  pipe_through :browser

  get("/", BlogController, :index)
  get("/page/:page", BlogController, :index_page)
  get("/:slug", BlogController, :show_post)
  get("/tags", BlogController, :tags)
  get("/tags/:slug", BlogController, :show_tag)
  get("/authors", BlogController, :authors)
  get("/authors/:slug", BlogController, :show_author)
end
```

Set up a controller to serve the generated static files:

```elixir
defmodule MyAppWeb.BlogController do
  use MyAppWeb, :controller

  def index(conn, _params) do
    serve_static_file(conn, "/index.html")
  end

  def index_page(conn, %{"page" => page}) do
    serve_static_file(conn, "/page/#{page}/index.html")
  end

  def show_post(conn, %{"slug" => slug}) do
    serve_static_file(conn, "/#{slug}.html")
  end

  def tags(conn, _params) do
    serve_static_file(conn, "/tags/index.html")
  end

  def show_tag(conn, %{"slug" => slug}) do
    serve_static_file(conn, "/tags/#{slug}.html")
  end

  def authors(conn, _params) do
    serve_static_file(conn, "/authors/index.html")
  end

  def show_author(conn, %{"slug" => slug}) do
    serve_static_file(conn, "/authors/#{slug}.html")
  end

  defp serve_static_file(conn, path) do
    storage_dir = Application.get_env(:literature, :static_pages_storage_dir)
    static_file_path = Path.join(storage_dir, path)

    case File.exists?(static_file_path) do
      true ->
        conn
        |> put_resp_header("content-type", "text/html; charset=utf-8")
        |> Plug.Conn.send_file(200, static_file_path)
      false ->
        conn
        |> put_status(:not_found)
        |> text("Page not found")
    end
  end
end
```

## Database Schema Patterns

### Required Fields

- **Publications**: `slug`, `name` (must be unique within application)
- **Posts**: `publication_id`, `slug`, `title`, `is_published` (must be unique within publication)
- **Authors**: `publication_id`, `slug`, `name` (must be unique within publication)
- **Tags**: `publication_id`, `slug`, `name` (must be unique within publication)

### Slug Generation

- Literature automatically generates slugs from names when not provided
- Slugs must be URL-safe and unique within their scope
- Custom slugs can be set but must follow URL conventions

### Publishing Workflow

- Posts have `is_published` boolean and `published_at` datetime
- Only published posts with `published_at <= current_date` are considered "live"
- Draft posts can be created and edited before publishing

## Image Handling

### Image Processing Pipeline

- Uses **Waffle** for file uploads and storage
- Uses **Image** library for processing and optimization
- Automatic responsive image generation with multiple sizes
- Support for both feature images (post thumbnails) and content images

### Image Configuration Requirements

Image handling requires Waffle configuration as shown in the [Configuration Setup](#2-configuration-setup) section above.

### Content Images

- Uploaded through WYSIWYG editor
- Automatically processed into responsive `<picture>` elements
- Converted from markdown `![alt](src)` to optimized HTML during static generation

## Post Content Editor (Milkdown)

### Supported Features

- **Formatting**: Bold, italic, underline, hyperlinks
- **Structure**: Headings (H1-H6), lists, blockquotes, tables
- **Media**: Image uploads with alt text

### Content Storage

- **Markdown**: Original format for editing and version control
- **HTML**: Pre-rendered for fast display, includes responsive images
- **Dual storage** enables both editing flexibility and performance

### Editor Customization

- Built on Milkdown.js framework
- Styled with Tailwind Typography prose classes
- Custom schema plugins for Literature-specific features

## Static Pages Generation

### Generation Workflow

1. **Templates** - Define page structure using Phoenix Components
2. **Layout** - Reusable layout with SEO tags and metadata
3. **Generator** - Processes content and writes static HTML files

### Available Page Types

- **`:index`**: Main index page for posts with no pagination
- **`:index_page`**: Paginated index pages for posts
- **`:show_post`**: Individual post pages
- **`:authors`**: Index page listing all authors
- **`:show_author`**: Individual author profile pages with their posts
- **`:tags`**: Index page listing all tags
- **`:show_tag`**: Individual tag pages with associated posts

### SEO and Meta Tags

- Automatic generation of OpenGraph and Twitter Card tags
- RSS feed generation for publications
- Structured data markup for blog posts
- Customizable meta titles, descriptions, and images

### File Output Options

- **File system**: Write to configured `static_pages_storage_dir`
- **Memory**: Generate in-memory for dynamic serving

## Performance Considerations

### Static Generation Benefits

- **Fast loading** - Pre-generated HTML files
- **SEO optimized** - Server-side rendered with proper meta tags
- **Scalable** - No database queries for content delivery

### Image Optimization

- Multiple sizes generated automatically
- WebP format support for modern browsers
- Lazy loading attributes added automatically
- Responsive images reduce bandwidth usage

## Best Practices

### Content Organization

- Create separate publications for different topics/brands
- Use consistent slug patterns for SEO
- Organize posts with appropriate tags and author assignments

### Image Management

- Use descriptive alt text for accessibility
- Optimize images before upload when possible
- Consider storage costs for high-volume sites

### Static Generation

- Regenerate static files when content changes
- Consider automated regeneration workflows
- Test static output in staging environments
