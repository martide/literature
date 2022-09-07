defmodule Literature.AuthorFormComponent do
  use Literature.Web, :live_component

  import Literature.FormComponent

  @impl Phoenix.LiveComponent
  def update(%{author: author} = assigns, socket) do
    changeset = Literature.change_author(author)

    {:ok,
     socket
     |> assign(assigns)
     |> assign(:changeset, changeset)}
  end

  @impl Phoenix.LiveComponent
  def render(assigns) do
    ~H"""
    <div>
      <.form
        let={f}
        for={@changeset}
        id="author-form"
        phx-target={@myself}
        phx-change="validate"
        phx-submit="save">
        <.form_field form={f} type="text_input" field={:name} label="Name" />
        <.form_field form={f} type="text_input" field={:slug} label="Slug" />
        <.form_field form={f} type="text_input" field={:profile_image} label="Profile Image" />
        <.form_field form={f} type="text_input" field={:cover_image} label="Cover Image" />
        <.form_field form={f} type="textarea" field={:bio} label="Bio" />
        <.form_field form={f} type="text_input" field={:website} label="Website" />
        <.form_field form={f} type="text_input" field={:location} label="Location" />
        <.form_field form={f} type="url_input" field={:facebook} label="Facebook" />
        <.form_field form={f} type="url_input" field={:twitter} label="Twitter" />
        <.form_field form={f} type="text_input" field={:meta_title} label="Meta title" />
        <.form_field form={f} type="textarea" field={:meta_description} label="Meta description" />
        <.form_field form={f} type="url_input" field={:url} label="Url" />

        <div class="flex items-center justify-end">
          <%= live_patch "Cancel", to: "", class: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" %>
          <%= submit "Save changes", class: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none" %>
        </div>
      </.form>
    </div>
    """
  end

  @impl true
  def handle_event("validate", %{"author" => author_params}, socket) do
    changeset =
      socket.assigns.author
      |> Literature.change_author(author_params)
      |> Map.put(:action, :validate)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  def handle_event("save", %{"author" => author_params}, socket) do
    save_author(socket, socket.assigns.action, author_params)
  end

  defp save_author(socket, :edit_author, author_params) do
    case Literature.update_author(socket.assigns.author, author_params) do
      {:ok, _author} ->
        {:noreply,
         socket
         |> put_flash(:info, "Author updated successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_author(socket, :new_author, author_params) do
    case Literature.create_author(author_params) do
      {:ok, _author} ->
        {:noreply,
         socket
         |> put_flash(:info, "Author created successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end
end
