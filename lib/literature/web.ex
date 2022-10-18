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

      alias Literature.{Author, Post, Publication, Tag, Uploaders}

      @primary_key {:id, :binary_id, autogenerate: true}
      @foreign_key_type :binary_id
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
      import Phoenix.Controller,
        only: [get_flash: 2]

      unquote(view_helpers())
    end
  end

  @doc false
  def live_view do
    quote do
      @moduledoc false

      use Phoenix.LiveView, layout: {Literature.LayoutView, "live_dashboard.html"}

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

  defp view_helpers do
    quote do
      use Phoenix.HTML

      import Phoenix.LiveView.Helpers
      import Literature.Helpers
      import Literature.QueryHelpers
    end
  end

  @doc false
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end
end
