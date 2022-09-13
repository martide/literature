defmodule Literature.FormComponent do
  use Literature.Web, :live_component

  @impl Phoenix.LiveComponent
  def form_field(assigns) do
    assigns =
      assigns
      |> assign_new(:input_opts, fn ->
        assigns_to_attributes(assigns, [
          :form,
          :field,
          :label,
          :required
        ])
      end)

    ~H"""
    <div class={@type == "text_editor" && "col-span-2 mb-10" || "mb-6"}>
      <%= case @type do %>
        <% "text_input" -> %>
          <.form_label form={@form} field={@field} label={@label} />
          <.text_input form={@form} field={@field} {@input_opts} />
        <% "textarea" -> %>
          <.form_label form={@form} field={@field} label={@label} />
          <.textarea form={@form} field={@field} {@input_opts} />
        <% "text_editor" -> %>
          <.form_label form={@form} field={@field} label={@label} />
          <.text_editor form={@form} field={@field} {@input_opts} />
        <% "select" -> %>
          <.form_label form={@form} field={@field} label={@label} />
          <.select form={@form} field={@field} {@input_opts} />
        <% "url_input" -> %>
          <.form_label form={@form} field={@field} label={@label} />
          <.url_input form={@form} field={@field} {@input_opts} />
      <% end %>
      <.form_field_error form={@form} field={@field} />
    </div>
    """
  end

  def button_group(assigns) do
    ~H"""
    <div class="flex items-center justify-end">
      <%= render_slot(@inner_block) %>
    </div>
    """
  end

  def form_group(assigns) do
    ~H"""
    <hr class="mb-6 border-gray-200 sm:mx-auto" />
    <p class="text-primary-700 font-semibold uppercase mb-3"><%= @title %></p>
    <div class="grid grid-cols-2 gap-5">
      <%= render_block(@inner_block) %>
    </div>
    """
  end

  def back_button(assigns) do
    ~H"""
    <%= live_patch @label, to: @return_to, class: "text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" %>
    """
  end

  def submit_button(assigns) do
    ~H"""
    <%= submit @label, class: "text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none" %>
    """
  end

  defp form_label(assigns) do
    assigns =
      assigns
      |> assign_new(:classes, fn -> label_classes(assigns) end)
      |> assign_rest(~w(classes form field label)a)

    ~H"""
    <%= label @form, @field, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest do %>
      <%= @label %>
    <% end %>
    """
  end

  defp text_input(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(assigns))

    ~H"""
      <%= text_input @form, @field, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  defp url_input(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(assigns))

    ~H"""
    <%= url_input @form, @field, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  defp textarea(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(assigns))

    ~H"""
    <%= textarea @form, @field, [class: @classes, rows: "5", phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  defp text_editor(assigns) do
    ~H"""
    <div class="editor-menu">
      <.menu_editor name="heading" to="#editor" data-level="1" label="H1" />
      <.menu_editor name="heading" to="#editor" data-level="2" label="H2" />
      <.menu_editor name="heading" to="#editor" data-level="3" label="H3" />
      <.menu_editor name="bold" to="#editor" label="Bold" />
      <.menu_editor name="italic" to="#editor" label="Italic" />
      <.menu_editor name="bulletList" to="#editor" label="Bullet List" />
      <.menu_editor name="orderedList" to="#editor" label="Ordered List" />
      <.menu_editor name="blockquote" to="#editor" label="Blockquote" />
      <.menu_editor name="horizontalRule" to="#editor" label="HR" />
    </div>
    <div id="editor" data-target={"##{input_id(@form, @field)}"} phx-hook="HTMLEditor"></div>
    <.textarea form={@form} field={@field} hidden="true" />
    """
  end

  defp menu_editor(assigns) do
    assigns = assign_rest(assigns, ~w(label name to)a)

    ~H"""
    <button
      type="button"
      phx-click={JS.dispatch(@name, to: @to)}
      data-name={@name}
      {@rest}
    >
      <%= @label %>
    </button>
    """
  end

  defp select(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(assigns))

    ~H"""
    <%= select @form, @field, @options, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  defp form_field_error(assigns) do
    ~H"""
    <div class="mt-1">
      <%= for {message, _} <- Keyword.get_values(@form.errors, @field) do %>
        <div class="text-xs text-red-500 invalid-feedback" phx-feedback-for={input_name(@form, @field)}>
          <%= message %>
        </div>
      <% end %>
    </div>
    """
  end

  defp assign_defaults(assigns, base_classes) do
    assigns
    |> assign_new(:type, fn -> "text" end)
    |> assign_rest(~w(class label form field type options layout)a)
    |> assign_new(:classes, fn -> base_classes end)
  end

  defp assign_rest(assigns, exclude) do
    Phoenix.LiveView.assign(
      assigns,
      :rest,
      Phoenix.LiveView.Helpers.assigns_to_attributes(assigns, exclude)
    )
  end

  defp label_classes(assigns) do
    "#{if field_has_errors?(assigns), do: "text-red-900", else: "text-gray-900"} block mb-2 text-sm font-medium"
  end

  defp text_input_classes(%{hidden: "true"}), do: "hidden"

  defp text_input_classes(assigns) do
    "#{if field_has_errors?(assigns), do: "bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500", else: "bg-gray-50 border-gray-300 focus:border-primary-500 focus:ring-primary-500"} focus:ring-1 border text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
  end

  defp field_has_errors?(%{form: form, field: field}) do
    case Keyword.get_values(form.errors, field) do
      [] -> false
      _ -> true
    end
  end

  defp field_has_errors?(_), do: false
end
