defmodule Literature.StaticPages.Helpers do
  @moduledoc """
  Provides helper functions for the static pages generator in Literature.
  """

  require Logger

  @spec paginate_published_posts(String.t(), integer(), integer()) ::
          Literature.Pagination.Page.t()
  def paginate_published_posts(publication_slug, page, page_size) do
    publication_slug
    |> published_posts_params()
    |> Map.merge(%{
      "page_size" => page_size,
      "page" => page,
      "preload" => ~w(authors tags)a
    })
    |> Literature.paginate_posts()
  end

  @spec list_published_posts(String.t()) :: [Literature.Post.t()]
  def list_published_posts(publication_slug) do
    publication_slug
    |> published_posts_params()
    |> Map.put("preload", ~w(authors tags)a)
    |> Literature.list_posts()
  end

  defp published_posts_params(publication_slug) do
    %{
      "publication_slug" => publication_slug,
      "status" => "published"
    }
  end

  @spec format_result(:ok | {:error, term()}, String.t(), String.t()) :: :ok
  def format_result(:ok, publication_slug, file_path) do
    Logger.info("Generated static page for #{publication_slug}: #{file_path}")

    :ok
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
    |> then(fn enum ->
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
    end)
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
end
