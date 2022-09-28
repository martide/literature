defmodule Literature.PostFormComponent do
  @moduledoc false
  use Literature.Web, :live_component

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
        <.form_group title="Details">
          <%= if @action == :edit_post do %>
            <div class="relative col-span-2 h-96 overflow-hidden border border-gray-300 rounded-lg">
              <%= link to: literature_dashboard_path(@socket, :edit_content, @slug, @post.slug), class: "absolute w-full h-96 top-0" do %>
                <div class="flex items-center justify-center space-x-2 rounded-md text-primary-600 bg-primary-100 bg-opacity-20 hover:bg-opacity-90 text-lg cursor-pointer transition-all duration-300 ease-in-out group h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 opacity-10 group-hover:opacity-90 transition-all duration-300 ease-in-out">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                  <span class="opacity-10 group-hover:opacity-90 transition-all duration-300 ease-in-out">Edit post content</span>
                </div>
              <% end %>
              <div class="prose prose-sm sm:prose"><%= raw @post.html %></div>
            </div>
          <% end %>
          <.form_field form={f} type="text_input" field={:title} label="Title" />
          <.form_field form={f} type="text_input" field={:slug} label="Slug" disabled={@action == :new_post} placeholder={if @action == :new_post, do: "(auto-generate) you can change from edit page", else: ""} />
          <.form_field form={f} type="checkbox_group" field={:authors_ids} options={@authors} label="Authors" />
          <.form_field form={f} type="checkbox_group" field={:tags_ids} options={@tags} label="Tags" />
          <.form_field form={f} type="image_upload" field={:feature_image} label="Feature Image" uploads={@uploads} />
          <.form_field form={f} type="text_input" field={:feature_image_alt} label="Feature Image Alt" />
          <.form_field form={f} type="text_input" field={:feature_image_caption} label="Feature Image Caption" />
          <.form_field form={f} type="textarea" field={:excerpt} label="Excerpt" />
          <.form_field form={f} type="radio_group" field={:status} label="Status" options={[draft: "Draft", publish: "Publish"]} />
        </.form_group>
        <.accordion title="Meta Tags">
          <.form_field form={f} type="text_input" field={:meta_title} label="Meta Title" />
          <.form_field form={f} type="textarea" field={:meta_description} label="Meta Description" />
        </.accordion>
        <.accordion title="Facebook Meta Tags">
          <.form_field form={f} type="image_upload" field={:og_image} label="Facebook Image" uploads={@uploads} />
          <.form_field form={f} type="text_input" field={:og_title} label="Facebook Title" />
          <.form_field form={f} type="textarea" field={:og_description} label="Facebook Description" />
        </.accordion>
        <.accordion title="Twitter Meta Tags">
          <.form_field form={f} type="image_upload" field={:twitter_image} label="Twitter Image" uploads={@uploads} />
          <.form_field form={f} type="text_input" field={:twitter_title} label="Twitter Title" />
          <.form_field form={f} type="textarea" field={:twitter_description} label="Twitter Description" />
        </.accordion>
        <.button_group>
          <.back_button label="Cancel" return_to={@return_to} />
          <.submit_button label="Save Changes" />
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
    post_params =
      post_params
      |> put_publication_id(socket)
      |> Map.merge(build_uploaded_entries(socket, ~w(og_image twitter_image feature_image)a))

    case Literature.create_post(post_params) do
      {:ok, post} ->
        {:noreply,
         socket
         |> put_flash(:success, "Post created successfully")
         |> push_redirect(
           to: literature_dashboard_path(socket, :edit_content, socket.assigns.slug, post.slug)
         )}

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
