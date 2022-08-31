defmodule Literature.Umbrella.MixProject do
  use Mix.Project

  def project do
    [
      apps_path: "apps",
      version: "0.1.0",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      aliases: aliases()
    ]
  end

  defp deps do
    []
  end

  defp aliases do
    [
      "assets.deploy": ["tailwind default --minify", "esbuild default --minify", "phx.digest"],
      setup: ["cmd mix setup"]
    ]
  end
end
