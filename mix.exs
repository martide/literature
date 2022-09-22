defmodule Literature.MixProject do
  use Mix.Project

  @version "0.1.0"

  def project do
    [
      app: :literature,
      version: @version,
      elixir: "~> 1.13",
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      config_path: "./config/config.exs",
      elixirc_paths: elixirc_paths(Mix.env()),
      deps: deps(),
      test_coverage: [tool: ExCoveralls],
      preferred_cli_env: [
        coveralls: :test,
        "coveralls.detail": :test,
        "coveralls.post": :test,
        "coveralls.html": :test
      ],
      dialyzer: [plt_add_apps: [:mix, :ex_unit]]
    ]
  end

  def application do
    [
      mod: {Literature.Application, []},
      extra_applications: [:logger]
    ]
  end

  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_env), do: ["lib"]

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      # JSON
      {:jason, "~> 1.3", optional: true},

      # Phoenix
      {:ecto_sql, "~> 3.8"},
      {:phoenix_ecto, "~> 4.4"},
      {:phoenix_live_view, "~> 0.17.11"},
      {:postgrex, ">= 0.0.0", only: :test},

      # Pagination
      {:scrivener_ecto, "~> 2.7"},
      {:scrivener_phoenix, "~> 0.3.2"},

      # Images
      {:waffle, "~> 1.1"},
      {:waffle_ecto, "~> 0.0.11"},
      {:waffle_gcs, "~> 0.2.0"},

      # Others
      {:atomex, "~> 0.5.1"},
      {:sitemapper, "~> 0.6.0"},
      {:slugy, "~> 4.1"},

      # Test
      {:credo, "~> 1.6", only: [:test, :dev], runtime: false},
      {:dialyxir, "~> 1.0", only: [:test, :dev], runtime: false},
      {:excoveralls, "~> 0.10", only: :test},
      {:floki, ">= 0.33.1", only: :test},
      {:sobelow, "~> 0.8", only: [:test, :dev], runtime: false}
    ]
  end

  defp aliases do
    [
      setup: ["deps.get", "ecto.setup"],
      test: ["ecto.create --quiet", "ecto.migrate --quiet", "test"],
      "test.ci": [
        "format --check-formatted",
        "deps.unlock --check-unused",
        "credo --strict",
        "test --raise",
        "dialyzer"
      ],
      "assets.watch": "cmd npm run watch --prefix assets",
      "assets.build": [
        "cmd npm run build --prefix assets",
        "phx.digest",
        "phx.digest.clean"
      ],
      publish: [
        "assets.build",
        "hex.publish"
      ]
    ]
  end
end
