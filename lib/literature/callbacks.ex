defmodule Literature.Callbacks do
  @moduledoc """
  Use to define callbacks when a resource is created/updated/deleted.
  Any changes within the callback will not be passed as a result so this is used primarily
  for side effects only.

  Example:

  ```
  defmodule MyApp.LiteratureCallbacks do
    use Literature.Callbacks

    def after_create(result, changeset) do
      # Do something with the result and changeset
    end

    def after_update(result, changeset) do
      # Do something with the result and changeset
    end
  end
  ```
  """
  @callback after_create(result :: any(), changeset :: Ecto.Changeset.t) :: any
  @callback after_update(result :: any(), changeset :: Ecto.Changeset.t) :: any

  defmacro __using__(_opts) do
    quote do
      @behaviour unquote(__MODULE__)

      def after_create(_result, _changeset), do: :ok
      def after_update(_result, _changeset), do: :ok

      defoverridable unquote(__MODULE__)
    end
  end
end
