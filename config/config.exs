import Config

config :literature,
  ecto_repos: [Literature.Test.Repo]

config :literature, Literature.Test.Repo,
  hostname: System.get_env("POSTGRES_HOSTNAME") || "localhost",
  database: System.get_env("POSTGRES_DATABASE") || "literature_test",
  username: System.get_env("POSTGRES_USERNAME") || "postgres",
  password: System.get_env("POSTGRES_PASSWORD") || "postgres",
  pool_size: 10
