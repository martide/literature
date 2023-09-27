defmodule Literature.RedirectLive do
  use Literature.Web, :live_view

  alias Literature.Redirect
  alias Literature.TableComponent
  alias Plug.Conn.Status, as: ConnStatus

  @impl Phoenix.LiveView
  def mount(%{"publication_slug" => slug}, _session, socket) do
    socket
    |> assign(
      return_to: literature_dashboard_path(socket, :list_redirects, slug),
      slug: slug,
      columns: columns(),
      type_options: type_options(),
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
        actions_modal?={true}
      />
      <.redirect_modal
        :if={@modal in [:new, :edit]}
        phx_submit={@phx_submit}
        changeset={@changeset}
        type_options={@type_options}
      />
      <.delete_modal
        :if={@modal == :delete}
        label={"Redirect from #{@redirect.from} to #{@redirect.to}"}
        item={@redirect}
        on_close="close_modal"
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
    <.modal id="redirect-modal" on_close="close_modal">
      <h2 class="text-primary-700 font-bold text-3xl mb-4"><%= @title %></h2>
      <.form :let={f} for={@changeset} id="redirect-form" phx-submit={@phx_submit}>
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
      </.form>
      <:footer :let={modal}>
        <.submit_button label="Save" form="redirect-form" />
        <button
          type="button"
          class="w-full md:w-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 md:mr-2 mb-2 text-center"
          phx-click={modal.on_close}
        >
          Cancel
        </button>
      </:footer>
    </.modal>
    """
  end

  @impl Phoenix.LiveView
  def handle_params(params, _url, socket) do
    socket
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

  def handle_event(
        "create_redirect",
        %{"redirect" => params},
        %{assigns: %{slug: slug}} = socket
      ) do
    params
    |> put_publication_id(slug)
    |> Literature.create_redirect()
    |> case do
      {:ok, _redirect} ->
        socket =
          socket
          |> assign(paginate_redirects(socket.assigns.params))
          |> assign(modal: nil, changeset: nil)
          |> put_flash(:success, "Redirect created successfully")

        {:noreply, socket}

      {:error, changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  def handle_event("open_edit_modal", %{"id" => id}, socket) do
    redirect = Literature.get_redirect!(id)

    {:noreply,
     assign(socket,
       modal: :edit,
       phx_submit: "update_redirect",
       redirect: redirect,
       changeset: Redirect.changeset(redirect)
     )}
  end

  def handle_event(
        "update_redirect",
        %{"redirect" => params},
        %{assigns: %{redirect: redirect}} = socket
      ) do
    redirect
    |> Literature.update_redirect(params)
    |> case do
      {:ok, _redirect} ->
        socket =
          socket
          |> assign(paginate_redirects(socket.assigns.params))
          |> assign(modal: nil, changeset: nil)
          |> put_flash(:success, "Redirect updated successfully")

        {:noreply, socket}

      {:error, changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  def handle_event("open_delete_modal", %{"id" => id}, socket) do
    {:noreply, assign(socket, modal: :delete, redirect: Literature.get_redirect!(id))}
  end

  def handle_event("close_modal", _params, socket) do
    {:noreply, assign(socket, modal: nil, redirect: nil, changeset: nil)}
  end

  def handle_event("delete", %{"id" => id}, socket) do
    with redirect <- Literature.get_redirect!(id),
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

  defp type_options do
    Redirect.available_types()
    |> Enum.map(fn code ->
      {"#{code} #{ConnStatus.reason_phrase(code)}", code}
    end)
  end

  defp put_publication_id(params, slug) do
    [slug: slug]
    |> Literature.get_publication!()
    |> then(&Map.put(params, "publication_id", &1.id))
  end
end
