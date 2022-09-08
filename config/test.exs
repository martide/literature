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

config :literature,
  repo: Literature.Test.Repo

config :literature, Literature.Test.Endpoint,
  live_view: [signing_salt: "FxLLYxALKW2d8gBG"],
  secret_key_base: "51QNvBZ+7QSi7qBdaTH4+dO08wGqKxombZ7DgXQN30mtVWVFOq3KuEgCfR5FYOp9"
