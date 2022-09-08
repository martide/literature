defmodule Literature.TagFormComponent do
  use Literature.Web, :live_component

  import Literature.FormComponent

  @impl Phoenix.LiveComponent
  def update(%{tag: tag} = assigns, socket) do
    changeset = Literature.change_tag(tag)

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
        id="tag-form"
        phx-target={@myself}
        phx-change="validate"
        phx-submit="save">
        <.form_group title="Meta Tags">
          <.form_field form={f} type="text_input" field={:meta_title} label="Meta Title" />
          <.form_field form={f} type="textarea" field={:meta_description} label="Meta Description" />
        </.form_group>
        <.form_group title="Facebook Tags">
          <.form_field form={f} type="url_input" field={:og_image} label="Og Image" />
          <.form_field form={f} type="text_input" field={:og_title} label="Og Title" />
          <.form_field form={f} type="textarea" field={:og_description} label="Og Description" />
        </.form_group>
        <.form_group title="Twitter Tags">
          <.form_field form={f} type="url_input" field={:twitter_image} label="Twitter Image" />
          <.form_field form={f} type="text_input" field={:twitter_title} label="Twitter Title" />
          <.form_field form={f} type="textarea" field={:twitter_description} label="Twitter Description" />
        </.form_group>
        <.form_group title="Contents">
          <.form_field form={f} type="text_input" field={:name} label="Name" />
          <.form_field form={f} type="text_input" field={:slug} label="Slug" />
          <.form_field form={f} type="textarea" field={:description} label="Description" />
          <.form_field form={f} type="url_input" field={:feature_image} label="Feature Image" />
          <.form_field form={f} type="url_input" field={:url} label="Url" />
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
  def handle_event("validate", %{"tag" => tag_params}, socket) do
    changeset =
      socket.assigns.tag
      |> Literature.change_tag(tag_params)
      |> put_validation(socket.assigns.action)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  @impl Phoenix.LiveComponent
  def handle_event("save", %{"tag" => tag_params}, socket) do
    save_tag(socket, socket.assigns.action, tag_params)
  end

  defp save_tag(socket, :edit_tag, tag_params) do
    case Literature.update_tag(socket.assigns.tag, tag_params) do
      {:ok, _tag} ->
        {:noreply,
         socket
         |> put_flash(:success, "Tag updated successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_tag(socket, :new_tag, tag_params) do
    case Literature.create_tag(tag_params) do
      {:ok, _tag} ->
        {:noreply,
         socket
         |> put_flash(:success, "Tag created successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp put_validation(changeset, :new_tag), do: changeset
  defp put_validation(changeset, :edit_tag), do: Map.put(changeset, :action, :validate)
end
