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
      </.form>
    </div>
    """
  end
end
