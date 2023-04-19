defmodule Literature.ErrorView do
  use Literature.Web, :view
  use Phoenix.Component

  # If you want to customize a particular status code
  # for a certain format, you may uncomment below.
  # def render("500.html", _assigns) do
  #   "Internal Server Error"
  # end

  # By default, Phoenix returns the status message from
  # the template name. For example, "404.html" becomes
  # "Not Found".
  def template_not_found(template, _assigns) do
    Phoenix.Controller.status_message_from_template(template)
  end

  def render("404.html", assigns) do
    ~H"""
    <.error_page>
      <:error_code>404</:error_code>
      <:title>Page not found.</:title>
      <:message>Sorry, we couldn't find the page you are looking for.</:message>
    </.error_page>
    """
  end

  def error_page(assigns) do
    ~H"""
    <div
      class="error-content py-12 flex flex-col bg-white"
      id="error-page-component"
      phx-hook="UpdateAlert"
    >
      <main class="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex-shrink-0 flex justify-center">
          <a href="/" class="inline-flex">
            <span class="sr-only">Martide</span>
            <img class="h-12 w-auto" src="/images/Icon/martide-icon.png" alt="" />
          </a>
        </div>
        <div class="py-16">
          <div class="text-center">
            <p class="text-sm font-semibold text-blue-500 uppercase tracking-wide">
              <%= render_slot(@error_code) %> error
            </p>
            <h1 class="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              <%= render_slot(@title) %>
            </h1>
            <p class="mt-2 text-base text-gray-500">
              <%= render_slot(@message) %>
            </p>
            <div class="mt-6">
              <a href="/" class="text-base font-medium text-blue-500 hover:text-blue-600">
                Go back home<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer class="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex flex-wrap items-center justify-center divide-x divide-gray-300">
          <.footer_link link="mailto:support@martide.com" text="Contact Support" />
          <.footer_link link="https://status.martide.com/" text="Status" />
          <.footer_link link="https://www.linkedin.com/company/martide/" text="LinkedIn" />
          <.footer_link link="https://twitter.com/martide_jobs/" text="Twitter" />
          <.footer_link link="https://www.facebook.com/martide.jobs/" text="Facebook" />
          <.footer_link link="https://www.pinterest.ph/martide_jobs/" text="Pinterest" />
        </nav>
      </footer>
    </div>
    """
  end

  defp footer_link(assigns) do
    ~H"""
    <a href={@link} class="text-sm font-medium text-gray-500 hover:text-gray-600 px-2 md:px-4">
      <%= @text %>
    </a>
    """
  end
end
