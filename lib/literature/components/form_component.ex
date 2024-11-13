defmodule Literature.FormComponent do
  @moduledoc false
  use Literature.Web, :html
  import Phoenix.HTML.Form

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
      |> assign_new(:container_class, fn -> nil end)

    ~H"""
    <div class={"#{form_field_classes(@type)} #{@container_class}"}>
      <%= case @type do %>
        <% "text_input" -> %>
          <.form_label
            :if={@label}
            form={@form}
            field={@field}
            label={@label}
            required={assigns[:required]}
          />
          <.input type="text" field={@form[@field]} {@input_opts} />
        <% "textarea" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.input type="textarea" field={@form[@field]} {@input_opts} />
        <% "checkbox_group" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.input type="checkbox-group" field={@form[@field]} {@input_opts} />
        <% "radio_group" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.input type="radio-group" field={@form[@field]} {@input_opts} />
        <% "select" -> %>
          <.form_label
            :if={@label}
            form={@form}
            field={@field}
            label={@label}
            required={assigns[:required]}
          />
          <.input type="select" field={@form[@field]} {@input_opts} />
        <% "url_input" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.input type="url" field={@form[@field]} {@input_opts} />
        <% "image_upload" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.image_upload form={@form} field={@field} {@input_opts} />
        <% "datetime_local_input" -> %>
          <.form_label form={@form} field={@field} label={@label} required={assigns[:required]} />
          <.input type="datetime-local" field={@form[@field]} {@input_opts} />
      <% end %>
      <.form_field_error form={@form} field={@field} />
    </div>
    """
  end

  attr(:id, :string, required: true)
  attr(:title, :string, required: true)
  attr(:nogrid, :boolean, default: false)
  slot(:inner_block, required: true)

  def accordion(assigns) do
    ~H"""
    <hr class="border-gray-200 sm:mx-auto" />

    <button
      class="flex text-primary-700 font-semibold uppercase py-5 cursor-pointer"
      phx-hook="Accordion"
      id={@id}
      data-exec-open={open_accordion(@id)}
      data-exec-close={collapse_accordion(@id)}
      type="button"
      phx-click={on_accordion_click()}
      aria-controls={"#{@id}-collapse-body"}
    >
      <.chevron />
      <span>
        <%= @title %>
      </span>
    </button>
    <div id={"#{@id}-collapse-body"} aria-labelledby={"#{@id}"} class="hidden">
      <div class={(assigns[:nogrid] && "space-y-5") || "grid grid-cols-2 gap-5 pb-5"}>
        <%= render_slot(@inner_block) %>
      </div>
    </div>
    """
  end

  defp chevron(assigns) do
    ~H"""
    <svg
      data-accordion-icon
      class="h-6 w-6 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      >
      </path>
    </svg>
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
      <%= render_slot(@inner_block) %>
    </div>
    """
  end

  def back_button(assigns) do
    ~H"""
    <.link
      patch={@return_to}
      class="w-full md:w-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 md:mr-2 mb-2 text-center order-last md:order-first"
    >
      <%= @label %>
    </.link>
    """
  end

  def submit_button(assigns) do
    assigns =
      assigns
      |> assign_new(:disabled, fn -> false end)
      |> assign_new(:form, fn -> nil end)

    ~H"""
    <button
      form={@form}
      type="submit"
      class="w-full md:w-auto text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 md:mr-2 mb-2 focus:outline-none disabled:bg-opacity-70"
      disabled={@disabled}
      phx-disable-with="Saving..."
    >
      <%= @label %>
    </button>
    """
  end

  defp form_label(assigns) do
    assigns =
      assigns
      |> assign_new(:classes, fn -> label_classes(assigns) end)
      |> assign_rest(~w(classes form field label required)a)

    ~H"""
    <label
      for={input_name(@form, @field)}
      class={@classes}
      phx-feedback-for={input_name(@form, @field)}
      {@rest}
    >
      <%= @label %>
      <%= if @required do %>
        <span class="text-red-500">*</span>
      <% end %>
    </label>
    """
  end

  defp image_upload(assigns) do
    assigns = assign_new(assigns, :upload_field, fn -> image_field(assigns) end)

    ~H"""
    <div
      class="w-full border border-gray-300 rounded-lg group hover:border-primary-300 transition duration-300 ease-in-out cursor-pointer relative overflow-hidden group"
      phx-drop-target={@upload_field.ref}
    >
      <div
        class="relative z-30 py-20 bg-white bg-opacity-60 opacity-10 group-hover:opacity-90 transition-all duration-300 ease-in-out"
        phx-click={JS.dispatch("click", to: "##{@upload_field.ref}")}
      >
        <div class="rounded-full h-14 w-14 bg-primary-100 text-primary-600 flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="3"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </div>
        <p class="uppercase font-semibold text-xs text-center">Drag & Drop or Click to upload</p>
      </div>
      <img
        src={literature_image_url(@form.data, @field)}
        class="object-cover object-center absolute top-0"
      />
      <%= for entry <- @upload_field.entries do %>
        <.live_img_preview entry={entry} class="object-cover object-center absolute top-0" />
        <%= if entry.progress < 100 do %>
          <div class="w-full bg-gray-200 h-2 absolute bottom-0">
            <div class="bg-primary-600 h-2 rounded-full" style={"width: #{entry.progress}%"}></div>
          </div>
        <% end %>
        <%= for err <- upload_errors(@upload_field, entry) do %>
          <p class="absolute top-0 bg-red-600 text-white"><%= err %></p>
        <% end %>
      <% end %>
      <.live_file_input upload={@upload_field} class="hidden" />
    </div>
    """
  end

  defp image_field(%{field: field, uploads: uploads}),
    do: Map.get(uploads, field)

  attr :id, :string, default: nil
  attr :class, :string, default: ""
  attr :label, :string
  attr :field, Phoenix.HTML.FormField
  attr :type, :string, default: "text"
  attr :options, :list
  attr :layout, :atom
  attr :value, :any
  attr :name, :any
  attr :multiple, :boolean, default: false
  attr :maxcharacters, :integer
  attr :characters, :string
  attr :classes, :string
  attr :label_classes, :string
  attr :prompt, :string, default: nil
  attr :checked, :boolean

  attr :rest, :global,
    include:
      ~w(accept autocomplete capture cols disabled form list max maxlength min minlength
                multiple pattern placeholder readonly required rows size step maxcharacters characters)a

  def input(%{field: %Phoenix.HTML.FormField{} = field} = assigns) do
    assigns
    |> assign(field: nil, id: assigns[:id] || field.id)
    |> assign_new(:name, fn ->
      if assigns[:multiple], do: field.name <> "[]", else: field.name
    end)
    |> assign_new(:maxcharacters, fn -> nil end)
    |> assign_new(:characters, fn -> "" end)
    |> assign_new(:value, fn -> field.value end)
    |> assign_new(:label_classes, fn -> label_classes(assigns) end)
    |> assign_defaults(text_input_classes(assigns))
    |> input()
  end

  def input(%{type: "radio-group"} = assigns) do
    ~H"""
    <div class="flex items-center border border-gray-300 rounded-md divide-x divide-gray-300">
      <%= for {value, label} <- @options do %>
        <label class="flex items-center justify-center w-full cursor-pointer">
          <.input
            type="radio"
            class="sr-only peer"
            name={@name}
            value={value}
            checked={@value == value || @value == String.to_atom(value)}
            {@rest}
          />
          <div class={@label_classes}><%= label %></div>
        </label>
      <% end %>
    </div>
    """
  end

  def input(%{type: "radio"} = assigns) do
    assigns = assign(assigns, :classes, radio_classes(assigns))

    ~H"""
    <input
      type="radio"
      name={@name}
      class={@classes}
      value={normalize_value("radio", @value)}
      phx-feedback-for={@name}
      checked={@checked}
      {@rest}
    />
    """
  end

  def input(%{type: "select"} = assigns) do
    ~H"""
    <select id={@id} name={@name} class={@classes} phx-feedback-for={@name} {@rest}>
      <option :if={@prompt} value=""><%= @prompt %></option>
      <%= Phoenix.HTML.Form.options_for_select(@options, @value) %>
    </select>
    """
  end

  def input(%{type: "checkbox-group"} = assigns) do
    checked =
      case assigns.value do
        value when is_binary(value) -> [value]
        value when is_list(value) -> value
        _ -> []
      end

    assigns =
      assigns
      |> assign(checked: checked)
      |> assign_new(:layout, fn -> :col end)

    ~H"""
    <div>
      <.input type="hidden" name={@name} classes="" phx-feedback-for={@name} />
      <%= for {label, value} <- @options do %>
        <label class="flex items-center space-x-3 space-y-1">
          <.input
            name={@name <> "[]"}
            type="checkbox"
            id={@id <> "_#{value}"}
            value={value}
            checked={to_string(value) in @checked}
            {@rest}
          />
          <div class="font-medium"><%= label %></div>
        </label>
      <% end %>
      <%= if Enum.empty?(@options) do %>
        <p class="text-sm font-semibold text-red-500">No available options</p>
      <% end %>
    </div>
    """
  end

  def input(%{type: "checkbox"} = assigns) do
    assigns =
      assigns
      |> assign_new(:checked, fn -> false end)
      |> assign_new(:value, fn -> normalize_value("checkbox", assigns[:value]) end)
      |> assign_new(:feedback_for, fn -> assigns.name end)
      |> assign_new(:class, fn -> checkbox_classes(assigns) end)

    ~H"""
    <input
      type="checkbox"
      value={@value}
      name={@name}
      phx-feedback-for={@feedback_for}
      class={@class}
      checked={@checked}
      {@rest}
    />
    """
  end

  def input(%{type: "datetime-local"} = assigns) do
    ~H"""
    <div class="datetime-select-wrapper">
      <input
        type={@type}
        name={@name}
        phx-feedback-for={@name}
        class={@classes}
        value={normalize_value(@type, @value)}
        {@rest}
      />
    </div>
    """
  end

  def input(%{type: "textarea"} = assigns) do
    assigns =
      assigns
      |> assign_new(:characters, fn -> "" end)

    ~H"""
    <textarea name={@name} class={@classes} rows="6" phx-feedback-for={@name} {@rest}><%= normalize_value("textarea", @value) %></textarea>
    <%= if @maxcharacters do %>
      <small class="text-gray-500">
        Recommended: <span class="font-bold"><%= @maxcharacters %></span>
        characters. You've used
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

  def input(%{type: "text"} = assigns) do
    assigns =
      assigns
      |> assign_new(:characters, fn -> "" end)

    ~H"""
    <input
      type={@type}
      name={@name}
      phx-feedback-for={@name}
      class={@classes}
      value={normalize_value(@type, @value)}
      {@rest}
    />
    <%= if @maxcharacters do %>
      <small class="text-gray-500">
        Recommended: <span class="font-bold"><%= @maxcharacters %></span>
        characters. You've used
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

  def input(assigns) do
    ~H"""
    <input type={@type} name={@name} class={@classes} phx-feedback-for={@name} {@rest} />
    """
  end

  defp form_field_error(assigns) do
    ~H"""
    <div class="mt-1">
      <%= for {message, _} <- Keyword.get_values(@form.errors, @field) do %>
        <div
          class="text-xs text-red-500 invalid-feedback"
          phx-feedback-for={input_name(@form, @field)}
        >
          <%= message %>
        </div>
      <% end %>
    </div>
    """
  end

  defp assign_defaults(assigns, base_classes) do
    assigns
    |> assign_new(:type, fn -> "text" end)
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

  defp on_accordion_click do
    JS.dispatch("toggle_accordion")
  end

  defp open_accordion(js \\ %JS{}, id) do
    js
    |> JS.set_attribute({"aria-expanded", "true"})
    |> JS.add_class("rotate-180", to: "##{id} [data-accordion-icon]")
    |> JS.show(to: "##{id}-collapse-body")
  end

  defp collapse_accordion(js \\ %JS{}, id) do
    js
    |> JS.set_attribute({"aria-expanded", "false"})
    |> JS.remove_class("rotate-180", to: "##{id} [data-accordion-icon]")
    |> JS.hide(to: "##{id}-collapse-body")
  end
end
