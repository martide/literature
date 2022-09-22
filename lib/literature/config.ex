defmodule Literature.Config do
  @moduledoc false

  def logo,
    do: Application.get_env(:literature, :image_path)

  def title,
    do: Application.get_env(:literature, :page_title)

  def repo,
    do: Application.get_env(:literature, :repo)

  # Waffle Config

  def waffle_asset_host,
    do: Application.get_env(:literature, :asset_host)

  def waffle_bucket,
    do: Application.get_env(:literature, :bucket)

  def waffle_storage,
    do: Application.get_env(:literature, :storage)

  # Meta tags Config

  def meta_title, do: meta_config()[:title]
  def meta_description, do: meta_config()[:description]
  def meta_og_type, do: meta_config()[:og_type]
  def meta_og_locale, do: meta_config()[:og_locale]
  def meta_twitter_card, do: meta_config()[:twitter_card]

  defp meta_config,
    do: Application.get_env(:literature, :metatags)

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
