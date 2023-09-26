defmodule Literature.RedirectLive do
  use Literature.Web, :live_view

  alias Literature.TableComponent
  alias Literature.Redirect

  @impl Phoenix.LiveView
  def mount(%{"publication_slug" => slug}, _session, socket) do
    socket
    |> assign(
      return_to: literature_dashboard_path(socket, :list_redirects, slug),
      slug: slug,
      columns: columns(),
      type_options: Redirect |> Ecto.Enum.values(:type),
      modal: nil
    )
    |> then(&{:ok, &1})
  end

  @impl Phoenix.LiveView
  def render(%{socket: %{transport_pid: nil}} = assigns), do: ~H"<.loading_page />"

  @impl Phoenix.LiveView
  def render(assigns) do
    ~H"""
    <.sidebar_default id="redirect-sidebar" live_action={@live_action} slug={@slug} socket={@socket} />
    <.container>
      <.h1><%= @page_title %></.h1>
      <.live_component
        module={TableComponent}
        id="redirects-table"
        slug={@slug}
        items={@redirects}
        page={@page}
        params={@params}
        live_action={@live_action}
        columns={@columns}
        base_path={@return_to}
      />
      <.redirect_modal
        :if={@modal in [:new, :edit]}
        phx_submit={@phx_submit}
        changeset={@changeset}
        type_options={@type_options}
      />
    </.container>
    """
  end

  defp redirect_modal(assigns) do
    assigns =
      assign_new(assigns, :title, fn
        %{phx_submit: "create_redirect"} -> "Add Redirect"
        %{phx_submit: "update_redirect"} -> "Edit Redirect"
      end)

    ~H"""
    <.modal id="redirect-modal">
      <.form
        :let={f}
        for={@changeset}
        id="redirect-form"
        phx-target={@myself}
        phx-submit={@phx_submit}
      >
        <.form_group title={@title}>
          <.form_field form={f} type="text_input" field={:from} label="From" required={true} />
          <.form_field form={f} type="text_input" field={:to} label="To" required={true} />
          <.form_field
            form={f}
            type="select"
            field={:type}
            label="Type"
            options={@type_options}
            required={true}
          />
        </.form_group>
      </.form>
      <:footer :let={modal}></:footer>
    </.modal>
    """
  end

  @impl Phoenix.LiveView
  def handle_params(params, url, socket) do
    socket
    |> assign(:uri, URI.parse(url))
    |> apply_action(socket.assigns.live_action, params)
    |> then(&{:noreply, &1})
  end

  @impl Phoenix.LiveView
  def handle_event("open_create_modal", _, socket) do
    {:noreply,
     assign(socket,
       modal: :new,
       phx_submit: "create_redirect",
       changeset: Redirect.changeset(%Redirect{})
     )}
  end

  def handle_event("open_edit_modal", %{"id" => id}, socket) do
    redirect = Literature.get_redirect!(id)

    {:noreply,
     assign(socket,
       modal: :edit,
       phx_submit: "update_redirect",
       changeset: Redirect.changeset(redirect)
     )}
  end

  def handle_event("close_modal", _params, socket) do
    {:noreply, assign(socket, modal: nil, redirect: nil, changeset: nil)}
  end

  def handle_event("open_delete_modal", %{"id" => id}, socket) do
    {:noreply, assign(socket, modal: :delete, redirect: Literature.get_redirect!(id))}
  end

  def handle_event("close_delete_modal", _params, socket) do
    {:noreply, assign(socket, modal: nil, redirect: nil)}
  end

  def handle_event("delete", %{"id" => id}, socket) do
    with redirect = Literature.get_redirect!(id),
         {:ok, _} <- Literature.delete_redirect(redirect) do
      socket =
        socket
        |> assign(paginate_redirects(socket.assigns.params))
        |> assign(modal: nil, redirect: nil)
        |> put_flash(:success, "Redirect deleted successfully")

      {:noreply, socket}
    else
      _ ->
        socket =
          socket
          |> assign(modal: nil, redirect: nil)
          |> put_flash(:error, "Failed to delete redirect")

        {:noreply, socket}
    end
  end

  defp apply_action(socket, :list_redirects, params) do
    socket
    |> assign(paginate_redirects(params))
    |> assign(
      params: params,
      page_title: "Redirects"
    )
  end

  defp paginate_redirects(params) do
    page = Literature.paginate_redirects(params)

    %{
      redirects: page.entries,
      page: page
    }
  end

  defp columns do
    [
      {:from, "From"},
      {:to, "To"},
      {:type, "Type"}
    ]
  end
end
