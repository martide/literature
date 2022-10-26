defmodule Literature.PostFormComponent do
  @moduledoc false
  use Literature.Web, :live_component

  import Literature.Cloudflare
  import Literature.FormComponent

  @accept ~w(.jpg .jpeg .png)

  @impl Phoenix.LiveComponent
  def update(%{post: post, slug: slug} = assigns, socket) do
    socket =
      socket
      |> assign(assigns)
      |> assign(:changeset, Literature.change_post(post))
      |> assign(:authors, list_authors(slug))
      |> assign(:tags, list_tags(slug))
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
        <div class="md:flex">
          <div id="ignore-updates" class="w-full" phx-update="ignore">
            <div id="editorjs" data-post-data={f.params["editor_json"] || @post.editor_json} phx-hook="EditorJS"></div>
            <%= hidden_input f, :editor_json %>
            <%= hidden_input f, :html %>
          </div>
          <div class="w-full md:w-2/3 md:border-l md:pl-8">
            <div class="space-y-5 mb-5">
              <.form_field form={f} type="text_input" field={:title} label="Title" required={true} />
              <.form_field form={f} type="text_input" field={:slug} label="Slug" required={true} disabled={@action == :new_post} placeholder={if @action == :new_post, do: "(auto-generate) you can change from edit page", else: ""} />
              <.form_field form={f} type="checkbox_group" field={:authors_ids} options={@authors} label="Authors" required={true} />
              <.form_field form={f} type="checkbox_group" field={:tags_ids} options={@tags} label="Tags" required={true} />
              <.form_field form={f} type="image_upload" field={:feature_image} label="Feature Image" uploads={@uploads} />
              <.form_field form={f} type="text_input" field={:feature_image_alt} label="Feature Image Alt" />
              <.form_field form={f} type="text_input" field={:feature_image_caption} label="Feature Image Caption" />
              <.form_field form={f} type="textarea" field={:excerpt} label="Excerpt" />
              <.form_field form={f} type="datetime_local_input" field={:published_at} label="Date Published" />
            </div>  
            <.accordion title="Meta Tags" nogrid>
              <.form_field form={f} type="text_input" field={:meta_title} label="Meta Title" />
              <.form_field form={f} type="textarea" field={:meta_description} label="Meta Description" />
              <.form_field form={f} type="text_input" field={:meta_keywords} label="Meta Keywords" />
            </.accordion>
            <.accordion title="Facebook Meta Tags" nogrid>
              <.form_field form={f} type="image_upload" field={:og_image} label="Facebook Image" uploads={@uploads} />
              <.form_field form={f} type="text_input" field={:og_title} label="Facebook Title" />
              <.form_field form={f} type="textarea" field={:og_description} label="Facebook Description" />
            </.accordion>
            <.accordion title="Twitter Meta Tags" nogrid>
              <.form_field form={f} type="image_upload" field={:twitter_image} label="Twitter Image" uploads={@uploads} />
              <.form_field form={f} type="text_input" field={:twitter_title} label="Twitter Title" />
              <.form_field form={f} type="textarea" field={:twitter_description} label="Twitter Description" />
            </.accordion>
            <div class="mt-5">
              <.button_group>
                <.back_button label="Cancel" return_to={@return_to} />
                <.submit_button label="Save Changes" />
              </.button_group>
            </div>
          </div>
        </div>
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
    post_params = Map.put(post_params, "html", String.split(post_params["html"], ","))
    save_post(socket, socket.assigns.action, post_params)
  end

  defp save_post(socket, :edit_post, post_params) do
    images = build_uploaded_entries(socket, ~w(og_image twitter_image feature_image)a)
    post_params = Map.merge(post_params, images)

    case Literature.update_post(socket.assigns.post, post_params) do
      {:ok, post} ->
        purge_cloudflare_files(socket, post.slug)

        {:noreply,
         socket
         |> put_flash(:success, "Post updated successfully")
         |> push_redirect(to: socket.assigns.return_to)}

      {:error, %Ecto.Changeset{} = changeset} ->
        {:noreply, assign(socket, :changeset, changeset)}
    end
  end

  defp save_post(socket, :new_post, post_params) do
    post_params =
      post_params
      |> put_publication_id(socket)
      |> Map.merge(build_uploaded_entries(socket, ~w(og_image twitter_image feature_image)a))

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

  defp list_authors(slug) do
    %{"publication_slug" => slug}
    |> Literature.list_authors()
    |> select_options()
  end

  defp list_tags(slug) do
    %{"publication_slug" => slug}
    |> Literature.list_tags()
    |> select_options()
  end

  defp put_publication_id(params, %{assigns: %{slug: slug}}) do
    [slug: slug]
    |> Literature.get_publication!()
    |> then(&Map.put(params, "publication_id", &1.id))
  end

  defp put_validation(changeset, :new_post), do: changeset
  defp put_validation(changeset, :edit_post), do: Map.put(changeset, :action, :validate)
end
