defmodule Literature.PostFormComponent do
  use Literature.Web, :live_component

  import Literature.FormComponent

  @accept ~w(.jpg .jpeg .png)

  @impl Phoenix.LiveComponent
  def update(%{post: post} = assigns, socket) do
    socket =
      socket
      |> assign(assigns)
      |> assign(:changeset, Literature.change_post(post))
      |> assign(:authors, Literature.list_authors() |> select_options)
      |> assign(:tags, Literature.list_tags() |> select_options)
      |> allow_upload()

    {:ok, socket}
  end

  defp allow_upload(socket) do
    socket
    |> allow_upload(:og_image, accept: @accept, max_entries: 1, auto_upload: true)
    |> allow_upload(:twitter_image, accept: @accept, max_entries: 1, auto_upload: true)
    |> allow_upload(:feature_image, accept: @accept, max_entries: 1, auto_upload: true)
  end

  @impl Phoenix.LiveComponent
  def render(assigns) do
    ~H"""
    <div>
      <.form
        let={f}
        for={@changeset}
        id="post-form"
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
          <.form_field form={f} type="text_input" field={:title} label="Title" />
          <.form_field form={f} type="text_input" field={:slug} label="Slug" />
          <.form_field form={f} type="select" field={:primary_author_id} options={@authors} label="Primary Author" prompt="Select author" />
          <.form_field form={f} type="select" field={:primary_tag_id} options={@tags} label="Primary Tag" prompt="Select tag" />
          <.form_field form={f} type="image_upload" field={:feature_image} label="Feature Image" uploads={@uploads} />
          <.form_field form={f} type="text_input" field={:feature_image_alt} label="Feature Image Alt" />
          <.form_field form={f} type="text_input" field={:feature_image_caption} label="Feature Image Caption" />
          <.form_field form={f} type="textarea" field={:custom_excerpt} label="Custom Excerpt" />
          <.form_field form={f} type="text_editor" field={:excerpt} label="Excerpt" />
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
  def handle_event("validate", %{"post" => post_params}, socket) do
    changeset =
      socket.assigns.post
      |> Literature.change_post(post_params)
      |> put_validation(socket.assigns.action)

    {:noreply, assign(socket, :changeset, changeset)}
  end

  @impl Phoenix.LiveComponent
  def handle_event("save", %{"post" => post_params}, socket) do
    save_post(socket, socket.assigns.action, post_params)
  end

  defp save_post(socket, :edit_post, post_params) do
    images = build_uploaded_entries(socket, ~w(og_image twitter_image feature_image)a)

    post_params = Map.merge(post_params, images)

    case Literature.update_post(socket.assigns.post, post_params) do
      {:ok, _post} ->
        {:noreply,
         socket
         |> put_flash(:success, "Post updated successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_post(socket, :new_post, post_params) do
    images = build_uploaded_entries(socket, ~w(og_image twitter_image feature_image)a)
    post_params = Map.merge(post_params, images)

    case Literature.create_post(post_params) do
      {:ok, _post} ->
        {:noreply,
         socket
         |> put_flash(:success, "Post created successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, changeset: changeset)}
    end
  end

  defp put_validation(changeset, :new_post), do: changeset
  defp put_validation(changeset, :edit_post), do: Map.put(changeset, :action, :validate)
end
