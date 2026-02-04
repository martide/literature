defmodule Literature.Post do
  @moduledoc """
    Literature Post Model
  """
  use Literature.Web, :model
  @type t :: %__MODULE__{}

  defmodule Locale do
    @moduledoc """
    Post languages
    """
    use Literature.Web, :model

    @embed_fields ~w(locale url)a

    @primary_key false
    embedded_schema do
      field(:locale, :string)
      field(:url, :string)
    end

    def changeset(%__MODULE__{} = struct, attrs \\ %{}) do
      struct
      |> cast(attrs, @embed_fields)
      |> validate_required(@embed_fields)
    end
  end

  schema "literature_posts" do
    field(:slug, :string)
    field(:title, :string)
    field(:feature_image, Uploaders.Type)
    field(:feature_image_alt, :string)
    field(:feature_image_caption, :string)
    field(:featured, :boolean)
    field(:published_at, :utc_datetime)
    field(:is_published, :boolean, default: false)
    field(:excerpt, :string)
    field(:html, {:array, :string})
    field(:markdown, :string)
    field(:meta_title, :string)
    field(:meta_description, :string)
    field(:meta_keywords, :string)
    field(:og_image, Uploaders.Type)
    field(:og_title, :string)
    field(:og_description, :string)
    field(:twitter_image, Uploaders.Type)
    field(:twitter_title, :string)
    field(:twitter_description, :string)
    field(:notes, :string)

    field(:status, :string, virtual: true)
    field(:authors_ids, {:array, :string}, virtual: true)
    field(:tags_ids, {:array, :string}, virtual: true)
    field(:upload_image, Uploaders.Type, virtual: true)
    field(:prev_post, :map, virtual: true)
    field(:next_post, :map, virtual: true)
    field(:similar_posts, {:array, :map}, virtual: true)
    field(:custom_position, :integer, virtual: true)

    belongs_to(:publication, Publication)

    many_to_many(:authors, Author, join_through: "literature_authors_posts", on_replace: :delete)
    many_to_many(:tags, Tag, join_through: "literature_tags_posts", on_replace: :delete)

    embeds_many(:locales, Locale, on_replace: :delete)

    timestamps(type: :utc_datetime)
  end

  @required_params ~w(
    publication_id
    slug
    title
    is_published
  )a

  @optional_params ~w(
    feature_image_alt
    feature_image_caption
    featured
    excerpt
    html
    markdown
    published_at
    meta_title
    meta_description
    meta_keywords
    og_title
    og_description
    twitter_title
    twitter_description
    notes
  )a

  @attachments ~w(
    feature_image
    og_image
    upload_image
    twitter_image
  )a

  @doc false
  def changeset(post, params) do
    post
    |> maybe_generate_id()
    |> cast(params, @required_params ++ @optional_params)
    |> maybe_generate_slug(post)
    |> cast_attachments(params, @attachments)
    |> cast_embed(:locales,
      sort_param: :locales_order,
      drop_param: :locales_delete
    )
    |> validate_required(@required_params, message: "This field is required")
    |> maybe_require_published_at(message: "This field is required")
    |> unique_constraint(:slug,
      name: :literature_posts_publication_id_slug_index,
      message: "#{params["slug"]} slug is duplicated}"
    )
    |> put_assocs(params)
  end

  defp maybe_require_published_at(changeset, opts) do
    case get_field(changeset, :is_published) do
      true ->
        changeset
        |> validate_required([:published_at], opts)

      _ ->
        changeset
    end
  end

  defp maybe_generate_slug(%{changes: %{title: title, slug: slug}} = changeset, _post)
       when title != slug,
       do: changeset

  defp maybe_generate_slug(changeset, %{title: title, slug: slug}) when title != slug,
    do: changeset

  defp maybe_generate_slug(changeset, %{slug: nil}),
    do: slugify(changeset, :title)

  defp maybe_generate_slug(changeset, _), do: changeset

  def resolve(post) when is_struct(post) do
    %{
      post
      | status: get_status(post),
        authors_ids: Enum.map(post.authors, & &1.id),
        tags_ids: Enum.map(post.tags, & &1.id)
    }
  end

  def resolve(post), do: post

  def resolve_prev_and_next_post(post) do
    next =
      Literature.list_posts(%{
        "max" => 1,
        "publication_slug" => post.publication.slug,
        "status" => "published",
        "preload" => [],
        "sort_field" => "published_at",
        "sort_direction" => "asc",
        "published_at" => {">", post.published_at}
      })
      |> Enum.at(0)

    prev =
      Literature.list_posts(%{
        "max" => 1,
        "publication_slug" => post.publication.slug,
        "status" => "published",
        "preload" => [],
        "published_at" => {"<", post.published_at}
      })
      |> Enum.at(0)

    %{post | next_post: next, prev_post: prev}
  end

  def resolve_similar_posts(post) do
    similar_posts =
      Enum.flat_map(post.tags, fn tag ->
        Literature.list_posts(%{
          "max" => 3,
          "exclude_ids" => [post.id],
          "publication_slug" => post.publication.slug,
          "tag_slug" => tag.slug,
          "status" => "published"
        })
      end)
      |> Enum.uniq()
      |> Enum.take_random(3)

    %{post | similar_posts: similar_posts}
  end

  defp get_status(%{published_at: published_at, is_published: is_published}) do
    datetime = DateTime.utc_now()

    cond do
      not is_published or is_nil(published_at) -> "draft"
      is_published and DateTime.compare(published_at, datetime) in [:lt, :eq] -> "published"
      is_published and DateTime.compare(published_at, datetime) == :gt -> "scheduled"
    end
  end

  defp put_assocs(changeset, %{"authors_ids" => ""} = params) do
    changeset
    |> add_error(:authors_ids, "Required at least one author")
    |> put_assocs(Map.delete(params, "authors_ids"))
  end

  defp put_assocs(changeset, %{"tags_ids" => ""} = params) do
    changeset
    |> add_error(:tags_ids, "Required at least one tag")
    |> put_assocs(Map.delete(params, "tags_ids"))
  end

  defp put_assocs(%{valid?: true} = changeset, %{"authors_ids" => authors, "tags_ids" => tags}) do
    changeset
    |> put_assoc(:authors, Enum.map(authors, &Literature.get_author!/1))
    |> put_assoc(:tags, Enum.map(tags, &Literature.get_tag!/1))
  end

  defp put_assocs(changeset, _), do: changeset
end
