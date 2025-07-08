defmodule Literature.StaticPages.Builder do
  @moduledoc """
  """
  defmacro __using__(opts) do
    pages = Keyword.get(opts, :only, ~w(index tags authors show)a)
    path = Keyword.get(opts, :path, "/")

    endpoint =
      Keyword.get_lazy(opts, :endpoint, fn ->
        raise "Missing mandatory :current_url option."
      end)

    publication_slug =
      Keyword.get_lazy(opts, :publication_slug, fn ->
        raise "Missing mandatory :publication_slug option."
      end)

    templates = Keyword.get(opts, :templates, Literature.StaticPages.Templates)

    quote bind_quoted: binding() do
      import Literature.StaticPages.Builder
      import Literature.StaticPages.MetaTagHelpers

      def generate do
        store_path = store_path(unquote(path), unquote(publication_slug))
        File.mkdir_p!(store_path)

        publication = Literature.get_publication!(slug: unquote(publication_slug))

        generate_file(
          "index.html",
          store_path,
          unquote(templates).index(%{
            posts: [],
            publication: publication,
            current_url: unquote(endpoint).url()
          })
        )

        # if :index in pages do
        #   # build index page
        #   generate_index()
        # end
      end

      # if :index in pages do
      #   def generate_index do
      #     store_path = store_path()
      #     File.mkdir_p!(store_path)

      #     render_file(
      #       "#{post.slug}.html",
      #       store_path,
      #       templates.post_template(%{
      #         post: post,
      #         publication: publication,
      #         locale: @locale,
      #         current_url: url(Endpoint.public_uri(), ~p"/#{@locale}/blog/#{post.slug}")
      #       })
      #     )
      #   end
      # end
    end
  end

  def store_path(path, publication_slug) do
    otp_app = Application.get_env(:literature, :otp_app)
    priv_dir = :code.priv_dir(otp_app)

    Path.join([priv_dir, path, publication_slug])
  end

  def generate_file(file_name, store_path, rendered) do
    safe = Phoenix.HTML.Safe.to_iodata(rendered)
    output = Path.join([store_path, file_name])
    File.write(output, safe)
  end
end
