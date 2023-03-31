# Literature

**TODO: Add description**

## Installation

### Clone literature on your machine

```bash
git clone git@github.com:martide/literature.git
```

### Link your Elixir app to literature

Reference your elixir app to use local repo of literature on your machine.

Add to elixir apps' mix.exs (all apps)

```elixir
{:literature, path: "~/path/to/your/literature"}
```

### Download dependencies

```
mix deps.get
```

### Import literature test data
Download test data (literature.sql) from 1Password. Search for lit.sql or literature.sql on Martide 1Password.

```bash
# modify dev database
psql dev_martide
drop table literature_authors, literature_authors_posts, literature_posts, literature_publications, literature_tags, literature_tags_posts;

# import
psql dev_martide < ~/Downloads/lit.sql
```

### Run server

```
mix phx.server
```

---

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `literature` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:literature, "~> 0.1"}
  ]
end
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at <https://hexdocs.pm/literature>.

