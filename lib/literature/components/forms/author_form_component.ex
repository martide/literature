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
        <.form_group title="Meta Tags">
          <.form_field form={f} type="text_input" field={:meta_title} label="Meta Title" />
          <.form_field form={f} type="textarea" field={:meta_description} label="Meta Description" />
        </.form_group>
        <.form_group title="Details">
          <.form_field form={f} type="text_input" field={:name} label="Name" />
          <.form_field form={f} type="text_input" field={:slug} label="Slug" />
          <.form_field form={f} type="url_input" field={:profile_image} label="Profile Image" />
          <.form_field form={f} type="url_input" field={:cover_image} label="Cover Image" />
          <.form_field form={f} type="textarea" field={:bio} label="Bio" />
          <.form_field form={f} type="url_input" field={:website} label="Website" />
          <.form_field form={f} type="text_input" field={:location} label="Location" />
          <.form_field form={f} type="url_input" field={:facebook} label="Facebook" />
          <.form_field form={f} type="url_input" field={:twitter} label="Twitter" />
        </.form_group>
        <.button_group>
          <.back_button label="Cancel" return_to={@return_to} />
          <.submit_button label="Save changes" />
        </.button_group>
      </.form>
    </div>
    """
  end

  @impl Phoenix.LiveComponent
  def handle_event("validate", %{"author" => author_params}, socket) do
    changeset =
      socket.assigns.author
      |> Literature.change_author(author_params)
      |> put_validation(socket.assigns.action)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  @impl Phoenix.LiveComponent
  def handle_event("save", %{"author" => author_params}, socket) do
    save_author(socket, socket.assigns.action, author_params)
  end

  defp save_author(socket, :edit_author, author_params) do
    case Literature.update_author(socket.assigns.author, author_params) do
      {:ok, _author} ->
        {:noreply,
         socket
         |> put_flash(:success, "Author updated successfully")
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
         |> put_flash(:success, "Author created successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp put_validation(changeset, :new_author), do: changeset
  defp put_validation(changeset, :edit_author), do: Map.put(changeset, :action, :validate)
end
