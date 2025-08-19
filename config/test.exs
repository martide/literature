import Config

config :literature,
  ecto_repos: [Literature.Test.Repo]

config :literature, Literature.Test.Repo,
  priv: "test/support/",
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "literature_test",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

config :literature, Literature.Test.Endpoint,
  live_view: [signing_salt: "FxLLYxALKW2d8gBG"],
  secret_key_base: "51QNvBZ+7QSi7qBdaTH4+dO08wGqKxombZ7DgXQN30mtVWVFOq3KuEgCfR5FYOp9",
  pubsub_server: Literature.PubSub

config :literature,
  repo: Literature.Test.Repo,
  page_title: "Literature Blog",
  image_path: "/favicon/favicon.ico"

config :literature, :metatags,
  title: "Literature Blog",
  description: "Literature Blog description"

config :literature, :sitemap,
  router: Literature.Test.Router,
  changefreq: :daily,
  path: "priv/static"

config :flop,
  repo: Literature.Test.Repo,
  default_limit: 50,
  max_limit: false,
  default_pagination_type: :page

config :waffle,
  storage: Waffle.Storage.Local,
  storage_dir_prefix: "/tmp/literature/",
  asset_host: "/tmp/literature"

config :literature,
  storage: Waffle.Storage.Local,
  storage_dir_prefix: "/tmp/literature/",
  asset_host: "/tmp/literature"

config :literature,
  static_pages_storage_dir: "/tmp/literature/static_pages"

config :phoenix_live_view,
  enable_expensive_runtime_checks: true
