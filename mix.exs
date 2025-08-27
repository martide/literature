defmodule Literature.MixProject do
  use Mix.Project

  @version "0.4.21"

  def project do
    [
      app: :literature,
      version: @version,
      elixir: "~> 1.13",
      start_permanent: Mix.env() == :prod,
      aliases: aliases(),
      package: package(),
      config_path: "./config/config.exs",
      elixirc_paths: elixirc_paths(Mix.env()),
      deps: deps(),
      test_coverage: [tool: ExCoveralls],
      preferred_cli_env: [
        coveralls: :test,
        "coveralls.detail": :test,
        "coveralls.html": :test,
        "coveralls.json": :test,
        "coveralls.post": :test
      ],
      dialyzer: [plt_add_apps: [:mix, :ex_unit]],
      description: "A simple CMS / Blog"
    ]
  end

  def application do
    [
      mod: {Literature.Application, []},
      extra_applications: [:logger, :poolboy]
    ]
  end

  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_env), do: ["lib"]

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      # JSON
      {:jason, "~> 1.4", optional: true},

      # Phoenix
      {:ecto_sql, "~> 3.9"},
      {:phoenix, "~> 1.7"},
      {:phoenix_ecto, "~> 4.4"},
      {:phoenix_live_view, "~> 1.0"},
      {:phoenix_html, "~> 4.1"},
      {:phoenix_view, "~> 2.0"},
      {:postgrex, ">= 0.0.0", only: :test},

      # Pagination
      {:flop, "~> 0.26"},

      # Images
      {:waffle, "~> 1.1"},
      {:waffle_ecto, "~> 0.0"},
      {:image, "~> 0.37"},

      # Others
      {:atomex, "~> 0.5"},
      {:ex_doc, "~> 0.28", only: [:dev, :test], runtime: false},
      {:httpoison, "~> 1.0 or ~> 2.0"},
      {:sitemapper, "~> 0.7"},
      {:slugy, "~> 4.1"},
      {:timex, "~> 3.7"},
      {:poolboy, "~> 1.5"},
      {:ex_cldr_languages, "~> 0.3"},
      {:floki, "~> 0.38"},
      {:html2markdown, "~> 0.3.0"},
      {:earmark, "~> 1.4"},

      # Test
      {:credo, "~> 1.6", only: [:test, :dev], runtime: false},
      {:dialyxir, "~> 1.2", only: [:test, :dev], runtime: false},
      {:excoveralls, "~> 0.15", only: [:test, :dev], runtime: false},
      {:sobelow, "~> 0.11", only: [:test, :dev], runtime: false},
      {:lazy_html, ">= 0.1.0", only: :test},
      {:usage_rules, "~> 0.1", only: [:dev]}
    ]
  end

  defp package do
    [
      maintainers: ["Martide"],
      licenses: ["Apache-2.0"],
      links: %{"GitHub" => "https://github.com/martide/literature"}
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
        "cmd npm install --prefix assets",
        "cmd npm run build --prefix assets",
        "phx.digest",
        "phx.digest.clean"
      ],
      publish: [
        "cmd npm install --prefix assets",
        "cmd npm run build --prefix assets",
        "hex.publish"
      ]
    ]
  end
end
