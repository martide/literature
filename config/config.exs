import Config

config :literature, ecto_repos: [Literature.Repo]

import_config "#{config_env()}.exs"
