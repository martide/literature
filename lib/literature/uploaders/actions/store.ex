defmodule Literature.Uploaders.Actions.Store do
  @moduledoc false

  alias Literature.Uploaders.Actions.Store
  alias Literature.Uploaders.Processor
  alias Literature.Uploaders.Versioning

  defmacro __using__(_) do
    quote do
      def store(args), do: Store.store(__MODULE__, args)
    end
  end

  def store(definition, {file, scope}) when is_binary(file) or is_map(file) do
    put(definition, {Waffle.File.new(file, definition), scope})
  end

  def store(definition, filepath) when is_binary(filepath) or is_map(filepath) do
    store(definition, {filepath, nil})
  end

  #
  # Private
  #

  defp put(_definition, {error = {:error, _msg}, _scope}), do: error

  defp put(definition, {%Waffle.File{} = file, scope}) do
    case definition.validate({file, scope}) do
      result when result == true or result == :ok ->
        put_versions(definition, {file, scope})
        |> cleanup!(file)

      {:error, message} ->
        {:error, message}

      _ ->
        {:error, :invalid_file}
    end
  end

  defp put_versions(definition, {file, scope}) do
    %{width: original_width} = Mogrify.verbose(Mogrify.open(file.path))

    if definition.async do
      definition.__versions
      |> Enum.map(fn r -> async_process_version(definition, r, {file, scope}) end)
      |> Enum.map(fn task -> Task.await(task, version_timeout()) end)
      |> ensure_all_success
      |> Enum.map(fn {v, r} -> async_put_version(definition, v, {r, scope}, original_width) end)
      |> Enum.map(fn task -> Task.await(task, version_timeout()) end)
      |> handle_responses(file.file_name)
    else
      definition.__versions
      |> Enum.map(fn version -> process_version(definition, version, {file, scope}) end)
      |> ensure_all_success
      |> Enum.map(fn {version, result} ->
        put_version(definition, version, {result, scope}, original_width)
      end)
      |> handle_responses(file.file_name)
    end
  end

  defp ensure_all_success(responses) do
    responses = List.flatten(responses)
    errors = Enum.filter(responses, fn {_version, resp} -> elem(resp, 0) == :error end)

    if Enum.empty?(errors), do: responses, else: errors
  end

  defp handle_responses(responses, filename) do
    errors =
      Enum.filter(responses, fn resp -> elem(resp, 0) == :error end)
      |> Enum.map(fn err -> elem(err, 1) end)

    if Enum.empty?(errors), do: {:ok, filename}, else: {:error, errors}
  end

  defp version_timeout do
    Application.get_env(:waffle, :version_timeout) || 90_000
  end

  defp async_process_version(definition, version, {file, scope}) do
    Task.async(fn ->
      process_version(definition, version, {file, scope})
    end)
  end

  defp async_put_version(definition, version, {result, scope}, original_width) do
    Task.async(fn ->
      put_version(definition, version, {result, scope}, original_width)
    end)
  end

  defp process_version(definition, version, {file, scope}) do
    Processor.process(definition, version, {file, scope})
    |> Enum.map(&{version, &1})
  end

  defp put_version(definition, version, {result, scope}, original_width) do
    case result do
      {:error, error} ->
        {:error, error}

      {:ok, nil} ->
        {:ok, nil}

      {:ok, file} ->
        save_version(definition, version, {file, scope}, original_width)
    end
  end

  defp save_version(definition, version, {file, scope}, original_width) do
    # Get image width to set in file name
    %{width: width} = Mogrify.verbose(Mogrify.open(file.path))

    if width <= original_width || version == :original do
      file_name = Versioning.resolve_file_name(definition, version, {file, scope}, width)
      file = %Waffle.File{file | file_name: file_name}
      result = definition.__storage.put(definition, version, {file, scope})

      case definition.transform(version, {file, scope}) do
        :noaction ->
          # We don't have to cleanup after `:noaction` transformations
          # because final `cleanup!` will remove the original temporary file.
          result

        _ ->
          cleanup!(result, file)
      end
    else
      {:ok, nil}
    end
  end

  defp cleanup!(result, file) do
    # If we were working with binary data or a remote file, a tempfile was
    # created that we need to clean up.
    if file.is_tempfile? do
      File.rm!(file.path)
    end

    result
  end
end
