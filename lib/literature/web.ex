defmodule Literature.Web do
  @moduledoc false

  @doc false
  def model do
    quote do
      @moduledoc false

      use Ecto.Schema
      use Waffle.Ecto.Schema

      import Ecto.Changeset
      import Slugy

      alias Literature.Author
      alias Literature.Post
      alias Literature.Publication
      alias Literature.Redirect
      alias Literature.Tag
      alias Literature.TagPost
      alias Literature.Uploaders

      @primary_key {:id, :binary_id, autogenerate: false}
      @foreign_key_type :binary_id

      def maybe_generate_id(%{id: nil} = schema),
        do: change(schema, id: Ecto.UUID.generate())

      def maybe_generate_id(schema), do: schema
    end
  end

  @doc false
  def controller do
    quote do
      @moduledoc false

      use Phoenix.Controller, namespace: Literature
      import Plug.Conn

      unquote(view_helpers())
    end
  end

  @doc false
  def view do
    quote do
      @moduledoc false

      use Phoenix.View,
        namespace: Literature,
        root: "lib/literature/templates"

      # Import convenience functions from controllers
      import Phoenix.Controller, only: [get_flash: 2, get_csrf_token: 0]
      import Plug.Conn, only: [request_url: 1]

      unquote(view_helpers())
    end
  end

  @doc false
  def live_view do
    quote do
      @moduledoc false

      use Phoenix.LiveView, layout: {Literature.LayoutView, :live_dashboard}

      import Literature.CardComponent
      import Literature.FormComponent
      import Literature.LayoutComponent
      import Literature.SidebarComponent

      unquote(view_helpers())
    end
  end

  @doc false
  def live_component do
    quote do
      @moduledoc false

      use Phoenix.LiveComponent

      unquote(view_helpers())
    end
  end

  def html do
    quote do
      use Phoenix.Component

      unquote(view_helpers())
    end
  end

  defp view_helpers do
    quote do
      import Phoenix.HTML
      import Phoenix.HTML.Form

      import Phoenix.LiveView.Helpers
      import Literature.Helpers
      import Literature.QueryHelpers
      import Literature.ReadingTimeHelpers
    end
  end

  @doc false
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end

defimpl Plug.Exception, for: Literature.PageNotFound do
  def status(_exception), do: 404
  def actions(_exception), do: []
end
