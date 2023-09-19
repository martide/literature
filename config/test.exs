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
  secret_key_base: "51QNvBZ+7QSi7qBdaTH4+dO08wGqKxombZ7DgXQN30mtVWVFOq3KuEgCfR5FYOp9"

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
  path: Path.join(Path.dirname(__DIR__), "priv/static/"),
  url: "https://www.example.com"

config :literature, :rss,
  url: "https://www.example.com",
  author: "Literature Team",
  email: "literature@example.com"
