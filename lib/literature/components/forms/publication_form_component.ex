defmodule Literature.PublicationFormComponent do
  @moduledoc false
  use Literature.Web, :live_component

  import Literature.FormComponent

  @accept ~w(.jpg .jpeg .png)

  @impl Phoenix.LiveComponent
  def update(%{publication: publication} = assigns, socket) do
    socket =
      socket
      |> assign(assigns)
      |> assign(:changeset, Literature.change_publication(publication))
      |> allow_upload()

    {:ok, socket}
  end

  defp allow_upload(socket) do
    socket
    |> allow_upload(:og_image, accept: @accept, max_entries: 1, auto_upload: true)
    |> allow_upload(:twitter_image, accept: @accept, max_entries: 1, auto_upload: true)
  end

  @impl Phoenix.LiveComponent
  def render(assigns) do
    ~H"""
    <div>
      <.form
        let={f}
        for={@changeset}
        id="publication-form"
        multipart
        phx-target={@myself}
        phx-change="validate"
        phx-submit="save">
        <.form_group title="Meta Tags">
          <.form_field form={f} type="text_input" field={:meta_title} label="Meta Title" />
          <.form_field form={f} type="textarea" field={:meta_description} label="Meta Description" />
        </.form_group>
        <.form_group title="Facebook Tags">
          <.form_field form={f} type="image_upload" field={:og_image} label="Og Image" uploads={@uploads} />
          <.form_field form={f} type="text_input" field={:og_title} label="Og Title" />
          <.form_field form={f} type="textarea" field={:og_description} label="Og Description" />
        </.form_group>
        <.form_group title="Twitter Tags">
          <.form_field form={f} type="image_upload" field={:twitter_image} label="Twitter Image" uploads={@uploads} />
          <.form_field form={f} type="text_input" field={:twitter_title} label="Twitter Title" />
          <.form_field form={f} type="textarea" field={:twitter_description} label="Twitter Description" />
        </.form_group>
        <.form_group title="Contents">
          <.form_field form={f} type="text_input" field={:name} label="Name" />
          <.form_field form={f} type="text_input" field={:slug} label="Slug" disabled={@action == :new_publication} placeholder={if @action == :new_publication, do: "(auto-generate) you can change from edit page", else: ""} />
          <.form_field form={f} type="textarea" field={:description} label="Description" />
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
  def handle_event("validate", %{"publication" => publication_params}, socket) do
    changeset =
      socket.assigns.publication
      |> Literature.change_publication(publication_params)
      |> put_validation(socket.assigns.action)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  @impl Phoenix.LiveComponent
  def handle_event("save", %{"publication" => publication_params}, socket) do
    save_publication(socket, socket.assigns.action, publication_params)
  end

  defp save_publication(socket, :edit_publication, publication_params) do
    images = build_uploaded_entries(socket, ~w(og_image twitter_image feature_image)a)
    publication_params = Map.merge(publication_params, images)

    case Literature.update_publication(socket.assigns.publication, publication_params) do
      {:ok, _publication} ->
        {:noreply,
         socket
         |> put_flash(:success, "Publication updated successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_publication(socket, :new_publication, publication_params) do
    images = build_uploaded_entries(socket, ~w(og_image twitter_image feature_image)a)
    publication_params = Map.merge(publication_params, images)

    case Literature.create_publication(publication_params) do
      {:ok, _publication} ->
        {:noreply,
         socket
         |> put_flash(:success, "Publication created successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp put_validation(changeset, :new_publication), do: changeset
  defp put_validation(changeset, :edit_publication), do: Map.put(changeset, :action, :validate)
end
