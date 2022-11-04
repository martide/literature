defmodule Literature.Cloudflare do
  @moduledoc """
    Literature Cloudflare
  """
  require Logger

  alias Literature.Config

  @doc """
  Purge cloudflare files.
  """
  def purge_cloudflare_files(socket, slug) do
    if Config.cloudflare_config() do
      "#{Config.cloudflare_api_host()}/zones/#{Config.cloudflare_identifier()}/purge_cache"
      |> HTTPoison.post(build_json(socket, slug), [
        {"X-Auth-Email", Config.cloudflare_email()},
        {"X-Auth-Key", Config.cloudflare_api_key()},
        {"Content-Type", "application/json"}
      ])
      |> case do
        {:ok, response} -> Logger.info(response)
        {:error, reason} -> Logger.error(reason)
      end
    else
      :ok
    end
  end

  defp build_json(socket, slug) do
    Map.new()
    |> Map.put(:files, build_url(socket, slug))
    |> Jason.encode!()
  end

  defp build_url(%{assigns: assigns, endpoint: endpoint, router: router}, slug) do
    publication_slug = assigns[:slug] || assigns.params["publication_slug"]

    router.__routes__()
    |> Enum.reject(&(&1.helper in ~w(literature_dashboard literature_assets)))
    |> Enum.find(&(&1.plug_opts == :show && &1.path =~ publication_slug))
    |> build_url(endpoint, slug)
  end

  defp build_url(%{path: path}, endpoint, slug) do
    for locale <- Config.cloudflare_locales() do
      path =
        path
        |> String.replace(":locale", locale)
        |> String.replace(":slug", slug)

      "#{endpoint.url()}#{path}"
    end
  end
end
