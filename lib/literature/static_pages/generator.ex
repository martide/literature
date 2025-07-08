defmodule Literature.StaticPages.Generator do
  @moduledoc """
  """

  defmacro __using__(opts) do
    pages = Keyword.get(opts, :only, ~w(index tags authors show)a)
    page_size = Keyword.get(opts, :page_size, 10)
    path = Keyword.get(opts, :path, "/")

    publication_slug =
      Keyword.get_lazy(opts, :publication_slug, fn ->
        raise "Missing mandatory :publication_slug option."
      end)

    templates = Keyword.get(opts, :templates, Literature.StaticPages.Templates)

    quote bind_quoted: binding() do
      require Logger

      import Literature.StaticPages.Generator
      import Literature.StaticPages.MetaTagHelpers

      def generate(:index, current_url) do
        publication = get_publication(unquote(publication_slug))
        store_path = store_path(unquote(path), publication.slug)
        File.mkdir_p!(store_path)

        generate_file(
          "index.html",
          store_path,
          unquote(templates).index(%{
            posts: list_published_posts(publication.slug),
            publication: publication,
            current_url: current_url
          })
        )
        |> format_result(publication.slug, "/#{publication.slug}/index.html")
      end

      def generate(:index_page, current_url) do
        publication = get_publication(unquote(publication_slug))
        page_1 = paginate_published_posts(publication.slug, 1, unquote(page_size))

        store_path = store_path(unquote(path), publication.slug)
        page_1_path = Path.join(store_path, "/page/1")
        File.mkdir_p!(page_1_path)

        generate_file(
          "index.html",
          page_1_path,
          unquote(templates).index_page(%{
            page: page_1,
            publication: publication,
            current_url: current_url
          })
        )
        |> format_result(publication.slug, "/#{publication.slug}/page/1/index.html")

        if page_1.total_pages > 1 do
          for page_number <- 2..page_1.total_pages do
            page = paginate_published_posts(publication.slug, page_number, unquote(page_size))
            page_path = Path.join(store_path, "/page/1")
            File.mkdir_p!(page_path)

            generate_file(
              "index.html",
              page_path,
              unquote(templates).index_page(%{
                page: page,
                publication: publication,
                current_url: current_url
              })
            )
            |> format_result(
              publication.slug,
              "/#{publication.slug}/page/#{page_number}/index.html"
            )
          end
        end
      end

      defp paginate_published_posts(publication_slug, page, page_size) do
        publication_slug
        |> published_posts_params()
        |> Map.merge(%{
          "page_size" => page_size,
          "page" => page,
          "preload" => ~w(authors tags)a
        })
        |> Literature.paginate_posts()
      end

      defp list_published_posts(publication_slug) do
        publication_slug
        |> published_posts_params()
        |> Map.put("preload", ~w(authors tags)a)
        |> Literature.list_posts()
      end

      defp published_posts_params(publication_slug) do
        %{
          "publication_slug" => publication_slug,
          "status" => "published"
        }
      end

      defp format_result(:ok, publication_slug, file_path) do
        Logger.info("Generated static page for #{publication_slug}: #{file_path}")

        :ok
      end

      defp format_result(error, publication_slug, file_path) do
        Logger.error(
          "Failed to generate static page for #{publication_slug} at #{file_path}: #{inspect(error)}"
        )

        :ok
      end

      defp get_publication(publication_slug) do
        case Literature.get_publication!(slug: publication_slug) do
          nil ->
            raise "Publication with slug '#{publication_slug}' not found."

          publication ->
            publication
        end
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
