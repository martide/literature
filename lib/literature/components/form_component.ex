defmodule Literature.FormComponent do
  @moduledoc false
  use Phoenix.Component

  import Literature.Helpers
  import Phoenix.HTML.Form
  import Phoenix.HTML.Tag

  alias Phoenix.LiveView.JS

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
    <div class={form_field_classes(@type)}>
      <%= case @type do %>
        <% "text_input" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.text_input form={@form} field={@field} {@input_opts} />
        <% "textarea" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.textarea form={@form} field={@field} {@input_opts} />
        <% "checkbox_group" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.checkbox_group form={@form} field={@field} {@input_opts} />
        <% "radio_group" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.radio_group form={@form} field={@field} {@input_opts} />
        <% "select" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.select form={@form} field={@field} {@input_opts} />
        <% "url_input" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.url_input form={@form} field={@field} {@input_opts} />
        <% "image_upload" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.image_upload form={@form} field={@field} {@input_opts} />
        <% "datetime_local_input" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.datetime_local_input form={@form} field={@field} {@input_opts} />
      <% end %>
      <.form_field_error form={@form} field={@field} />
    </div>
    """
  end

  def accordion(assigns) do
    assigns =
      assign_new(assigns, :id, fn -> "phx-#{hd(String.split(Ecto.UUID.generate(), "-"))}" end)

    ~H"""
    <hr class="border-gray-200 sm:mx-auto" />
    <p
      class="text-primary-700 font-semibold uppercase py-5 cursor-pointer"
      phx-click={
        JS.toggle(to: "##{@id}", in: {"ease-out duration-300", "opacity-0", "opacity-100"}, out: {"ease-in duration-300", "opacity-100", "opacity-0"})}
      >
      <%= @title %>
    </p>
    <div id={@id}>
      <div class={assigns[:nogrid] && "space-y-5" || "grid grid-cols-2 gap-5 pb-5"}>
        <%= render_block(@inner_block) %>
      </div>
    </div>
    """
  end

  def button_group(assigns) do
    ~H"""
    <div class="flex flex-col md:flex-row items-center md:justify-end">
      <%= render_slot(@inner_block) %>
    </div>
    """
  end

  def form_group(assigns) do
    ~H"""
    <hr class="mb-6 border-gray-200 sm:mx-auto" />
    <p class="text-primary-700 font-semibold uppercase mb-3"><%= @title %></p>
    <div class="grid grid-cols-2 gap-5 pb-5">
      <%= render_block(@inner_block) %>
    </div>
    """
  end

  def radio_group(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(assigns))

    ~H"""
    <div class="flex items-center border border-gray-300 rounded-md divide-x divide-gray-300">
      <%= for {value, label} <- @options do %>
        <label class="flex items-center justify-center w-full cursor-pointer">
          <.radio form={@form} field={@field} value={value} {@rest} />
          <div class={label_classes(%{form: @form, field: @field, type: "radio"})}><%= label %></div>
        </label>
      <% end %>
    </div>
    """
  end

  def back_button(assigns) do
    ~H"""
    <%= live_patch @label, to: @return_to, class: "w-full md:w-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 md:mr-2 mb-2 text-center order-last md:order-first" %>
    """
  end

  def submit_button(assigns) do
    ~H"""
    <%= submit @label, class: "w-full md:w-auto text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 md:mr-2 mb-2 focus:outline-none disabled:bg-opacity-70", phx_disable_with: "Saving..." %>
    """
  end

  defp form_label(assigns) do
    assigns =
      assigns
      |> assign_new(:classes, fn -> label_classes(assigns) end)
      |> assign_rest(~w(classes form field label required)a)

    ~H"""
    <%= label @form, @field, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest do %>
      <%= @label %>
      <%= if @required do %>
        <span class="text-red-500">*</span>
      <% end %>
    <% end %>
    """
  end

  defp text_input(assigns) do
    assigns =
      assigns
      |> assign_defaults(text_input_classes(assigns))
      |> assign_new(:maxcharacters, fn -> nil end)
      |> assign_new(:characters, fn -> "" end)

    ~H"""
    <%= text_input @form, @field, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    <%= if @maxcharacters do %>
      <small class="text-gray-500">
        Recommended: <span class="font-bold"><%= @maxcharacters %></span> characters. You've used
        <%= if @maxcharacters < String.length(@characters || "") do %>
          <span class="font-bold text-red-500">
            <%= String.length(@characters || "") %>.
          </span>
        <% else %>
          <span class="font-bold text-green-500">
            <%= String.length(@characters || "") %>.
          </span>
        <% end %>
      </small>
    <% end %>    
    """
  end

  defp url_input(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(assigns))

    ~H"""
    <%= url_input @form, @field, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  def radio(assigns) do
    assigns = assign_defaults(assigns, radio_classes(assigns))

    ~H"""
    <%= radio_button @form, @field, @value, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  defp image_upload(assigns) do
    assigns = assign_new(assigns, :upload_field, fn -> image_field(assigns) end)

    ~H"""
    <div class="w-full border border-gray-300 rounded-lg group hover:border-primary-300 transition duration-300 ease-in-out cursor-pointer relative overflow-hidden group" phx-drop-target={@upload_field.ref}>
      <div class="relative z-30 py-20 bg-white bg-opacity-60 opacity-10 group-hover:opacity-90 transition-all duration-300 ease-in-out" phx-click={JS.dispatch("click", to: "##{@upload_field.ref}")}>
        <div class="rounded-full h-14 w-14 bg-primary-100 text-primary-600 flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
          </svg>
        </div>
        <p class="uppercase font-semibold text-xs text-center">Drag & Drop or Click to upload</p>
      </div>
      <%= img_tag literature_image_url(@form.data, @field), class: "object-cover object-center absolute top-0" %>
      <%= for entry <- @upload_field.entries do %>
        <.live_img_preview entry={entry} class="object-cover object-center absolute top-0" />
        <%= if entry.progress < 100 do %>
          <div class="w-full bg-gray-200 h-2 absolute bottom-0">
            <div class="bg-primary-600 h-2 rounded-full" style={"width: #{entry.progress}%"}></div>
          </div>
        <% end %>
        <%= for err <- upload_errors(@upload_field, entry) do %>
          <p class="absolute top-0"><%= err %></p>
        <% end %>
      <% end %>
      <%= live_file_input @upload_field, class: "hidden" %>
    </div>
    """
  end

  defp image_field(%{field: field, uploads: uploads}),
    do: Map.get(uploads, field)

  defp datetime_local_input(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(assigns))

    ~H"""
    <div class="datetime-select-wrapper">
      <%= datetime_local_input @form, @field, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    </div>
    """
  end

  defp textarea(assigns) do
    assigns =
      assigns
      |> assign_defaults(text_input_classes(assigns))
      |> assign_new(:maxcharacters, fn -> nil end)
      |> assign_new(:characters, fn -> "" end)

    ~H"""
    <%= textarea @form, @field, [class: @classes, rows: "6", phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    <%= if @maxcharacters do %>
      <small class="text-gray-500">
        Recommended: <span class="font-bold"><%= @maxcharacters %></span> characters. You've used
        <%= if @maxcharacters < String.length(@characters || "") do %>
          <span class="font-bold text-red-500">
            <%= String.length(@characters || "") %>.
          </span>
        <% else %>
          <span class="font-bold text-green-500">
            <%= String.length(@characters || "") %>.
          </span>
        <% end %>
      </small>
    <% end %>    
    """
  end

  defp select(assigns) do
    assigns = assign_defaults(assigns, text_input_classes(assigns))

    ~H"""
    <%= select @form, @field, @options, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  def checkbox(assigns) do
    assigns = assign_defaults(assigns, checkbox_classes(assigns))

    ~H"""
    <%= checkbox @form, @field, [class: @classes, phx_feedback_for: input_name(@form, @field)] ++ @rest %>
    """
  end

  def checkbox_group(assigns) do
    assigns =
      assigns
      |> assign_defaults(text_input_classes(assigns))
      |> assign_new(:checked, fn ->
        values =
          case input_value(assigns[:form], assigns[:field]) do
            value when is_binary(value) -> [value]
            value when is_list(value) -> value
            _ -> []
          end

        Enum.map(values, &to_string/1)
      end)
      |> assign_new(:id_prefix, fn -> input_id(assigns[:form], assigns[:field]) <> "_" end)
      |> assign_new(:layout, fn -> :col end)

    ~H"""
    <div class="">
      <%= hidden_input @form, @field, name: input_name(@form, @field), value: "" %>
      <%= for {label, value} <- @options do %>
        <label class="flex items-center space-x-3 space-y-1">
          <.checkbox
            form={@form}
            field={@field}
            id={@id_prefix <> to_string(value)}
            name={input_name(@form, @field) <> "[]"}
            checked_value={value}
            unchecked_value=""
            value={value}
            checked={to_string(value) in @checked}
            hidden_input={false}
            {@rest} />
          <div class="font-medium"><%= label %></div>
        </label>
      <% end %>
      <%= if Enum.empty?(@options) do %>
        <p class="text-sm font-semibold text-red-500">No available options</p>
      <% end %>
    </div>
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

  defp assign_rest(assigns, exclude),
    do: assign(assigns, :rest, assigns_to_attributes(assigns, exclude))

  defp form_field_classes(type) do
    case type do
      "image_upload" -> "row-span-2"
      _ -> "flex flex-col"
    end
  end

  defp label_classes(assigns) do
    "#{if field_has_errors?(assigns), do: "text-red-900", else: "text-gray-900"} block #{(assigns[:type] && "peer-checked:bg-primary-700 peer-checked:text-white w-full py-3 text-center transition duration-300 ease-in-out") || "mb-2 text-sm"} font-medium"
  end

  defp checkbox_classes(_assigns),
    do:
      "w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"

  defp radio_classes(_assigns), do: "sr-only peer"

  defp text_input_classes(%{hidden: "true"}), do: "hidden"

  defp text_input_classes(assigns) do
    "#{if field_has_errors?(assigns), do: "bg-red-50 border-red-500 focus:border-red-500 focus:ring-red-500", else: "bg-gray-50 border-gray-300 focus:border-primary-500 focus:ring-primary-500"} focus:ring-1 border text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 disabled:bg-primary-100"
  end

  defp field_has_errors?(%{form: form, field: field}) do
    case Keyword.get_values(form.errors, field) do
      [] -> false
      _ -> true
    end
  end

  defp field_has_errors?(_), do: false
end
