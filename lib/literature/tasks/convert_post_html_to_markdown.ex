defmodule Literature.Tasks.ConvertPostHtmlToMarkdown do
  @moduledoc """
  Task to convert HTML content in posts to Markdown format.
  Make sure database version is V12.
  """
  import Ecto.Query

  alias Html2Markdown.Converter
  alias Html2Markdown.Options
  alias Html2Markdown.Parser
  alias Literature.Repo

  @batch_size 100

  def run do
    Repo.transaction(fn ->
      "literature_posts"
      |> select([p], %{
        id: p.id,
        html: p.html,
        title: p.title,
        slug: p.slug,
        inserted_at: p.inserted_at,
        updated_at: p.updated_at
      })
      |> Repo.stream()
      |> Stream.chunk_every(@batch_size)
      |> Enum.each(&convert_html_to_markdown/1)
    end)
  end

  defp convert_html_to_markdown(batch) do
    params =
      batch
      |> Enum.map(fn post ->
        html =
          post.html
          |> Kernel.||([])
          |> Enum.join("")

        post
        |> Map.put(:markdown, convert_html(html))
      end)

    Repo.insert_all("literature_posts", params,
      on_conflict: {:replace, [:markdown]},
      conflict_target: :id
    )
  end

  defp convert_html(html) do
    opts = Options.merge(%{})

    html
    |> Parser.preprocess_content(opts)
    |> convert_table_headers()
    |> Converter.convert_to_markdown(opts)
  end

  # Convert table headers to th elements
  # Milkdown expects th for table headers and tables are not rendered correctly without header
  defp convert_table_headers(document) do
    document
    |> Floki.find_and_update("table tr:first-child td", fn {"td", attrs} -> {"th", attrs} end)
  end
end
