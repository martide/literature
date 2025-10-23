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

## Database Schema Patterns

### Required Fields

- **Publications**: `slug`, `name` (must be unique within application)
- **Posts**: `publication_id`, `slug`, `title`, `content` (must be unique within publication)
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

```elixir
config :literature,
  storage: Waffle.Storage.Local,  # or S3, GCS, etc.
  storage_dir_prefix: "/tmp/literature/",
  asset_host: "/tmp/literature"
```

### Content Images

- Uploaded through WYSIWYG editor
- Automatically processed into responsive `<picture>` elements
- Converted from markdown `![alt](src)` to optimized HTML during static generation

## Post Content Editor (Milkdown)

### Supported Features

- **Formatting**: Bold, italic, underline, hyperlinks
- **Structure**: Headings (H1-H6), lists, blockquotes, tables
- **Media**: Image uploads with alt text
- **Code**: Code blocks with syntax highlighting

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
2. **Layout** - Reusable layout with SEO tags and meta data
3. **Generator** - Processes content and writes static HTML files

### Available Page Types

- **Index**: Publication homepage with post listings
- **Post Show**: Individual post pages
- **Author Show**: Author profile pages with their posts
- **Tag Show**: Tag pages with associated posts
- **Archive**: Date-based post archives

### SEO and Meta Tags

- Automatic generation of OpenGraph and Twitter Card tags
- RSS feed generation for publications
- Structured data markup for blog posts
- Customizable meta titles, descriptions, and images

### File Output Options

- **File system**: Write to configured `static_pages_storage_dir`
- **Memory**: Generate in-memory for dynamic serving
- **Custom storage**: Implement custom storage backends

## Integration Patterns

### Phoenix Application Integration

```elixir
# Router setup
use Literature.Router
literature_assets("/literature")      # CSS/JS assets
literature_dashboard("/literature")   # Admin interface

# Content serving
literature_public("/blog", publication: "blog")  # Public pages
```

### Database Integration

- Requires Ecto repository configuration
- Uses existing Phoenix app's database connection
- Can coexist with existing tables and schemas

### Authentication Integration

- Admin dashboard can integrate with existing auth systems
- Public pages are static and don't require authentication
- Content access can be controlled through Phoenix pipelines

## Performance Considerations

### Static Generation Benefits

- **Fast loading** - Pre-generated HTML files
- **CDN friendly** - Static assets can be cached aggressively
- **SEO optimized** - Server-side rendered with proper meta tags
- **Scalable** - No database queries for content delivery

### Image Optimization

- Multiple sizes generated automatically
- WebP format support for modern browsers
- Lazy loading attributes added automatically
- Responsive images reduce bandwidth usage

### Caching Strategies

- Static files can be cached indefinitely with cache-busting
- Image assets include content-based hashes
- RSS feeds and sitemaps generated as static files

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

### Development Workflow

- Use draft posts for content review processes
- Test responsive image generation locally
- Validate HTML output with tools like W3C validator

## Common Patterns

### Multi-tenant Blogs

```elixir
# Different publications for different brands/topics
create_publication(slug: "tech-blog", name: "Tech Blog")
create_publication(slug: "company-news", name: "Company News")
```

### Content Syndication

- Generate RSS feeds for each publication
- Use structured data for rich snippets
- Export content as JSON for API consumption

### SEO Optimization

- Use publication-specific meta tag templates
- Generate XML sitemaps for search engines
- Implement breadcrumb navigation in templates
