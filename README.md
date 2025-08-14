# Literature

`Literature` is a content management system and static page generator that uses `Phoenix.Components` to generate static html content.

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

2. Setup Literature database tables that will be used for content management by creating a new migration. This will create all necessary tables `Publication`, `Post`, `Author`, and `Tag`.

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
