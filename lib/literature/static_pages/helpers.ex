defmodule Literature.StaticPages.Helpers do
  @moduledoc """
  Provides helper functions for the static pages generator in Literature.
  """
  require Logger

  @spec paginate_published_posts(String.t(), integer(), integer(), map()) ::
          Literature.Pagination.Page.t()
  def paginate_published_posts(publication_slug, page, page_size, params \\ %{}) do
    publication_slug
    |> published_posts_params()
    |> Map.merge(%{
      "page_size" => page_size,
      "page" => page,
      "preload" => ~w(authors tags)a
    })
    |> Map.merge(params)
    |> Literature.paginate_posts()
  end

  @spec list_published_posts(String.t()) :: [Literature.Post.t()]
  def list_published_posts(publication_slug, params \\ %{}) do
    publication_slug
    |> published_posts_params()
    |> Map.put("preload", ~w(authors tags)a)
    |> Map.merge(params)
    |> Literature.list_posts()
  end

  @spec list_authors(String.t()) :: [Literature.Author.t()]
  def list_authors(publication_slug, params \\ %{}) do
    %{
      "publication_slug" => publication_slug,
      "with_published_posts_count" => true
    }
    |> Map.merge(params)
    |> Literature.list_authors()
  end

  @spec list_public_tags(String.t()) :: [Literature.Tag.t()]
  def list_public_tags(publication_slug, params \\ %{}) do
    %{
      "publication_slug" => publication_slug,
      "status" => "public",
      "with_published_posts_count" => true
    }
    |> Map.merge(params)
    |> Literature.list_tags()
  end

  defp published_posts_params(publication_slug) do
    %{
      "publication_slug" => publication_slug,
      "status" => "published"
    }
  end

  @spec format_result(
          :ok | {:ok, tuple()} | {:error, term()},
          String.t(),
          String.t()
        ) :: :ok | {:ok, list()}
  def format_result(:ok, publication_slug, file_path) do
    Logger.info("Generated static page for #{publication_slug}: #{file_path}")

    :ok
  end

  def format_result({:ok, file_tuple}, _publication_slug, _file_path) do
    {:ok, [file_tuple]}
  end

  def format_result(error, publication_slug, file_path) do
    Logger.error(
      "Failed to generate static page for #{publication_slug} at #{file_path}: #{inspect(error)}"
    )

    :ok
  end

  @spec get_publication!(String.t()) :: Literature.Publication.t()
  def get_publication!(publication_slug) do
    case Literature.get_publication!(slug: publication_slug) do
      nil ->
        raise "Publication with slug '#{publication_slug}' not found."

      publication ->
        publication
    end
  end

  @spec get_post!(String.t(), String.t()) :: Literature.Post.t()
  def get_post!(post_slug, publication_slug) do
    case Literature.get_post!(slug: post_slug, publication_slug: publication_slug) do
      nil ->
        raise "Post with slug '#{post_slug}' not found."

      post ->
        post
    end
  end

  @spec get_author!(String.t(), String.t()) :: Literature.Author.t()
  def get_author!(author_slug, publication_slug) do
    case Literature.get_author!(slug: author_slug, publication_slug: publication_slug) do
      nil ->
        raise "Author with slug '#{author_slug}' not found."

      author ->
        author
    end
  end

  @spec get_tag!(String.t(), String.t()) :: Literature.Tag.t()
  def get_tag!(tag_slug, publication_slug) do
    case Literature.get_tag!(slug: tag_slug, publication_slug: publication_slug) do
      nil ->
        raise "Tag with slug '#{tag_slug}' not found."

      tag ->
        tag
    end
  end

  @type async_task :: {module(), atom(), [any()]}
  @type async_opt ::
          {:timeout, timeout()}
          | {:ordered, boolean()}
          | {:max_concurrency, integer()}
          | {:flatten, boolean()}

  @doc """
  Wrapper around `Task.async_stream/3` to returns only the result of the task
  """
  @spec async!(Enumerable.t(), (term() -> term()), [async_opt()]) :: [term()]
  def async!(enum, fun, opts \\ []) do
    timeout = Keyword.get(opts, :timeout, 5_000)
    ordered = Keyword.get(opts, :ordered, false)

    max_concurrency =
      Keyword.get_lazy(opts, :max_concurrency, fn -> System.schedulers_online() end)

    flatten = Keyword.get(opts, :flatten, false)

    enum
    |> Task.async_stream(fun,
      ordered: ordered,
      max_concurrency: max_concurrency,
      timeout: timeout
    )
    |> then(fn enum -> map_async_result(enum, flatten) end)
  end

  defp map_async_result(enum, flatten) do
    if flatten do
      Enum.flat_map(enum, fn
        {:ok, result} -> result
        result -> result
      end)
    else
      Enum.map(enum, fn
        {:ok, result} -> result
        result -> result
      end)
    end
  end

  @doc """
  Checks if the given module has the specified template function.
  Raises an error if the template is not found.
  """
  @spec check_for_template!(module(), atom()) :: :ok
  def check_for_template!(module, template) do
    if Code.ensure_loaded?(module) and function_exported?(module, template, 1) do
      :ok
    else
      raise "Template #{template} not found in #{inspect(module)}"
    end
  end

  def render_markdown(markdown) do
    markdown
    |> Earmark.as_html!()
    |> Phoenix.HTML.raw()
  end
end
