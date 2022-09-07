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
    <div class="mb-6">
      <%= case @type do %>
        <% "text_input" -> %>
          <.form_label form={@form} field={@field} label={@label} />
          <.text_input form={@form} field={@field} {@input_opts} />
        <% "textarea" -> %>
          <.form_label form={@form} field={@field} label={@label} />
          <.textarea form={@form} field={@field} {@input_opts} />
        <% "select" -> %>
          <.form_label form={@form} field={@field} label={@label} />
          <.select form={@form} field={@field} {@input_opts} />
        <% "url_input" -> %>
          <.form_label form={@form} field={@field} label={@label} />
          <.url_input form={@form} field={@field} {@input_opts} />
      <% end %>
    </div>
    """
  end

  defp form_label(assigns) do
    assigns =
      assigns
      |> assign_rest(~w(form field label)a)

    ~H"""
    <%= label @form, @field, [class: label_classes(field_has_errors?(assigns)), phx_feedback_for: input_name(@form, @field)] ++ @rest do %>
      <%= @label %>
    <% end %>
    """
  end

  defp text_input(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(field_has_errors?(assigns)))

    ~H"""
      <%= text_input @form, @field, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  def url_input(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(field_has_errors?(assigns)))

    ~H"""
    <%= url_input @form, @field, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  defp textarea(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(field_has_errors?(assigns)))

    ~H"""
    <%= textarea @form, @field, [class: @classes, rows: "5", phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  defp select(assigns) do
    assigns = assign_defaults(assigns, select_classes(field_has_errors?(assigns)))

    ~H"""
    <%= select @form, @field, @options, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  defp assign_defaults(assigns, base_classes) do
    assigns
    |> assign_new(:type, fn -> "text" end)
    |> assign_rest(~w(class label form field type options layout)a)
    |> assign_new(:classes, fn -> base_classes end)
  end

  def assign_rest(assigns, exclude) do
    Phoenix.LiveView.assign(
      assigns,
      :rest,
      Phoenix.LiveView.Helpers.assigns_to_attributes(assigns, exclude)
    )
  end

  defp label_classes(assigns) do
    "#{if field_has_errors?(assigns), do: "has-error", else: ""} block mb-2 text-sm font-medium text-gray-900"
  end

  defp text_input_classes(has_error) do
    "#{if has_error, do: "has-error", else: ""} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  end

  defp select_classes(has_error) do
    "#{if has_error, do: "has-error", else: ""} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
  end

  defp field_has_errors?(%{form: form, field: field}) do
    case Keyword.get_values(form.errors, field) do
      [] -> false
      _ -> true
    end
  end

  defp field_has_errors?(_), do: false
end
