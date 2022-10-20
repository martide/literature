defmodule Literature.Config do
  @moduledoc false

  def logo,
    do: Application.get_env(:literature, :image_path)

  def title,
    do: Application.get_env(:literature, :page_title)

  def repo,
    do: Application.get_env(:literature, :repo)

  def env,
    do: Application.get_env(:literature, :env)

  # Waffle Config

  def waffle_asset_host,
    do: Application.get_env(:literature, :asset_host)

  def waffle_bucket,
    do: Application.get_env(:literature, :bucket)

  def waffle_storage,
    do: Application.get_env(:literature, :storage)

  def waffle_width_step,
    do: Application.get_env(:literature, :width_step, 100)

  # Sitemap Config

  def sitemap_changefreq, do: sitemap_config()[:changefreq]
  def sitemap_path, do: sitemap_config()[:path]
  def sitemap_router, do: sitemap_config()[:router]
  def sitemap_url, do: sitemap_config()[:url]

  defp sitemap_config,
    do: Application.get_env(:literature, :sitemap)

  # RSS Config

  def feed_author, do: feed_config()[:author]
  def feed_email, do: feed_config()[:email]
  def feed_url, do: feed_config()[:url]

  defp feed_config,
    do: Application.get_env(:literature, :rss)
end
