defmodule Literature.PostFormComponent do
  @moduledoc false
  use Literature.Web, :live_component

  import Literature.Cloudflare
  import Literature.FormComponent
  import Literature.ImageComponent

  @accept ~w(.jpg .jpeg .png)

  @impl Phoenix.LiveComponent
  def update(%{post: post, slug: slug} = assigns, socket) do
    socket =
      socket
      |> assign(assigns)
      |> assign(:changeset, Literature.change_post(post))
      |> assign(:post_params, Map.new())
      |> assign(:authors, list_authors(slug))
      |> assign(:tags, list_tags(slug))
      |> assign(:loading, false)
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
        :let={f}
        for={@changeset}
        id="post-form"
        multipart
        phx-target={@myself}
        phx-change="validate"
        phx-submit="save"
      >
        <div class="md:flex">
          <div id="ignore-updates" class="w-full" phx-update="ignore">
            <div
              id="editorjs"
              data-post-data={f.params["editor_json"] || @post.editor_json}
              phx-hook="EditorJS"
            >
            </div>
            <%= hidden_input(f, :editor_json) %>
            <%= hidden_input(f, :html) %>
          </div>
          <div class="w-full md:w-2/3 md:border-l md:pl-8">
            <div class="space-y-5 mb-5">
              <.form_field
                form={f}
                type="text_input"
                field={:title}
                label="Title"
                required={true}
                maxcharacters={60}
                characters={@post_params["title"] || @post.title}
              />
              <.form_field
                form={f}
                type="text_input"
                field={:slug}
                label="Slug"
                required={true}
                disabled={@action == :new_post}
                placeholder={
                  if @action == :new_post,
                    do: "(auto-generate) you can change from edit page",
                    else: ""
                }
              />
              <.form_field
                form={f}
                type="checkbox_group"
                field={:authors_ids}
                options={@authors}
                label="Authors"
                required={true}
              />
              <.form_field
                form={f}
                type="checkbox_group"
                field={:tags_ids}
                options={@tags}
                label="Tags"
                required={true}
              />
              <.form_field
                form={f}
                type="image_upload"
                field={:feature_image}
                label="Feature Image"
                uploads={@uploads}
              />
              <.form_field
                form={f}
                type="text_input"
                field={:feature_image_alt}
                label="Feature Image Alt"
              />
              <.form_field
                form={f}
                type="text_input"
                field={:feature_image_caption}
                label="Feature Image Caption"
              />
              <.form_field
                form={f}
                required={true}
                type="radio_group"
                field={:is_published}
                label="Status"
                options={[{"false", "Draft"}, {"true", "Published"}]}
              />
              <.form_field form={f} type="textarea" field={:excerpt} label="Excerpt" />
              <.form_field
                form={f}
                type="datetime_local_input"
                field={:published_at}
                label="Date Published"
              />
            </div>
            <.accordion id="meta-tags" title="Meta Tags" nogrid>
              <.form_field
                form={f}
                type="text_input"
                field={:meta_title}
                label="Meta Title"
                maxcharacters={60}
                characters={@post_params["meta_title"] || @post.meta_title}
              />
              <.form_field
                form={f}
                type="textarea"
                field={:meta_description}
                label="Meta Description"
                maxcharacters={145}
                characters={@post_params["meta_description"] || @post.meta_description}
              />
              <.form_field form={f} type="text_input" field={:meta_keywords} label="Meta Keywords" />
              <div>
                <div class="text-gray-900 block mb-2 text-sm font-medium">
                  Languages
                </div>
                <.inputs_for :let={locale_form} field={f[:locales]}>
                  <input type="hidden" name="post[locales_order][]" value={locale_form.index} />
                  <div class="flex justify-between items-center">
                    <.form_field
                      form={locale_form}
                      type="select"
                      field={:locale}
                      options={@available_languages}
                      label={false}
                      placeholder="Language"
                      container_class="flex-1 mr-2"
                    />
                    <.form_field
                      form={locale_form}
                      type="text_input"
                      field={:url}
                      label={false}
                      placeholder="URL"
                      container_class="flex-1 mr-2"
                    />

                    <label class="cursor-pointer hover:text-red-600 transition duration-300 ease-in-out mb-1">
                      <input
                        type="checkbox"
                        name="post[locales_delete][]"
                        class="hidden"
                        value={locale_form.index}
                      />
                      <.delete_icon />
                    </label>
                  </div>
                </.inputs_for>
                <label class="my-2 block text-primary-700 font-medium cursor-pointer text-sm">
                  <input type="checkbox" name="post[locales_order][]" class="hidden" />
                  <span>+ Add Language</span>
                </label>
              </div>
            </.accordion>
            <.accordion id="facebook-meta-tags" title="Facebook Meta Tags" nogrid>
              <.form_field
                form={f}
                type="image_upload"
                field={:og_image}
                label="Facebook Image"
                uploads={@uploads}
              />
              <.form_field form={f} type="text_input" field={:og_title} label="Facebook Title" />
              <.form_field
                form={f}
                type="textarea"
                field={:og_description}
                label="Facebook Description"
              />
            </.accordion>
            <.accordion id="twitter-meta-tags" title="Twitter Meta Tags" nogrid>
              <.form_field
                form={f}
                type="image_upload"
                field={:twitter_image}
                label="Twitter Image"
                uploads={@uploads}
              />
              <.form_field form={f} type="text_input" field={:twitter_title} label="Twitter Title" />
              <.form_field
                form={f}
                type="textarea"
                field={:twitter_description}
                label="Twitter Description"
              />
            </.accordion>
            <div class="mt-5">
              <.form_field form={f} type="textarea" field={:notes} label="Notes" />
            </div>
            <div class="mt-5">
              <.button_group>
                <.back_button label="Cancel" return_to={@return_to} />
                <.submit_button :if={@loading} label="Saving..." disabled={true} />
                <.submit_button :if={!@loading} label="Save Changes" />
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

    {:noreply, assign(socket, changeset: changeset, post_params: post_params)}
  end

  @impl Phoenix.LiveComponent
  def handle_event("save", %{"post" => post_params}, socket) do
    html = post_params["html"]
    html = if is_binary(html) and html != "", do: Jason.decode!(post_params["html"]), else: []
    post_params = Map.put(post_params, "html", html)

    socket
    |> assign(:loading, true)
    |> start_async(:save_task, fn ->
      save_post(socket, socket.assigns.action, post_params)
    end)
    |> then(&{:noreply, &1})
  end

  @impl true
  def handle_async(:save_task, {:ok, {:error, changeset}}, socket) do
    {:noreply, assign(socket, changeset: changeset, loading: false)}
  end

  def handle_async(:save_task, {:ok, {:ok, saved_post}}, socket) do
    purge_cloudflare_files(socket, saved_post.slug)
    # Need to call parent liveview to do the redirect & flash message because
    # currently handle_async/3 does not support it.
    # Ref issue: https://github.com/phoenixframework/phoenix_live_view/issues/2878
    send(
      self(),
      {:redirect, socket.assigns.return_to, {:success, save_flash_message(socket.assigns.action)}}
    )

    {:noreply, consume_all_uploaded_entries(socket)}
  end

  def handle_async(:save_task, {:exit, reason}, socket) do
    socket
    |> consume_all_uploaded_entries()
    |> put_flash(:error, "Error: #{inspect(reason)}")
    |> then(&{:noreply, &1})
  end

  defp save_flash_message(:new_post), do: "Post created successfully"
  defp save_flash_message(:edit_post), do: "Post updated successfully"

  defp save_post(socket, :edit_post, post_params) do
    post_params =
      post_params
      |> Map.merge(build_uploaded_entries(socket, ~w(og_image twitter_image feature_image)a))
      |> build_images()
      |> build_html()
      |> Map.put_new("locales", [])

    Literature.update_post(socket.assigns.post, post_params)
  end

  defp save_post(socket, :new_post, post_params) do
    post_params =
      post_params
      |> put_publication_id(socket)
      |> Map.merge(build_uploaded_entries(socket, ~w(og_image twitter_image feature_image)a))
      |> build_images()
      |> build_html()

    Literature.create_post(post_params)
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

  defp build_html(%{"html" => html} = params) do
    html = Enum.map(html, &parse_image_tag/1)
    %{params | "html" => html}
  end

  defp delete_icon(assigns) do
    ~H"""
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
    """
  end
end
