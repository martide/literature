defmodule Literature do
  @moduledoc false

  import Literature.QueryHelpers
  alias Literature.{Author, Post, Publication, Repo, Tag}

  ## Author Context

  @doc """
  Returns the paginate list of authors.

  ## Examples

      iex> paginate_authors()
      %Scrivener.Page{entries: [%Author{}, ...], ...}

  """
  def paginate_authors(attrs \\ []) do
    Author
    |> search(:name, attrs)
    |> search(:slug, attrs)
    |> sort_by(attrs)
    |> where_publication(attrs)
    |> Repo.paginate(attrs)
  end

  @doc """
  Returns the list of authors.

  ## Examples

      iex> list_authors()
      [%Author{}, ...]

  """
  def list_authors(attrs \\ []) do
    Author
    |> sort_by(attrs)
    |> where_preload(attrs)
    |> where_publication(attrs)
    |> Repo.all()
  end

  @doc """
  Gets a single author.

  Raises `Ecto.NoResultsError` if the Author does not exist.

  ## Examples

      iex> get_author!(123)
      %Author{}

      iex> get_author!(456)
      ** (Ecto.NoResultsError)

  """
  def get_author!(id) when is_binary(id), do: Repo.get(Author, id)

  def get_author!(list) do
    attrs = Keyword.delete(list, :publication_slug)

    Author
    |> where_publication(list)
    |> Repo.get_by(attrs)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking author changes.

  ## Examples

      iex> change_author(author)
      %Ecto.Changeset{data: %Author{}}

  """
  def change_author(%Author{} = author, attrs \\ %{}) do
    Author.changeset(author, attrs)
  end

  @doc """
  Creates an author.

  ## Examples

      iex> create_author(%{field: value})
      {:ok, %Author{}}

      iex> create_author(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_author(attrs \\ %{}) do
    %Author{}
    |> Author.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates an author.

  ## Examples

      iex> update_author(author, %{field: new_value})
      {:ok, %Author{}}

      iex> update_author(author, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_author(%Author{} = author, attrs) do
    author
    |> Author.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes an author.

  ## Examples

      iex> delete_author(author)
      {:ok, %Author{}}

      iex> delete_author(author)
      {:error, %Ecto.Changeset{}}

  """
  def delete_author(%Author{} = author) do
    Repo.delete(author)
  end

  ## Post Context

  @doc """
  Returns the paginate list of posts.

  ## Examples

      iex> paginate_posts()
      %Scrivener.Page{entries: [%Post{}, ...], ...}

  """
  def paginate_posts(attrs \\ []) do
    Post
    |> search(:title, attrs)
    |> search(:slug, attrs)
    |> sort_by(attrs, {:desc, :published_at})
    |> where_preload(attrs)
    |> where_status(attrs)
    |> where_publication(attrs)
    |> Repo.paginate(attrs)
  end

  @doc """
  Returns the list of posts.

  ## Examples

      iex> list_posts()
      [%Post{}, ...]

  """
  def list_posts(attrs \\ []) do
    Post
    |> set_limit(attrs)
    |> sort_by(attrs, {:desc, :published_at})
    |> where_preload(%{"preload" => ~w(authors tags)a})
    |> where_status(attrs)
    |> where_publication(attrs)
    |> Repo.all()
    |> Enum.map(&Post.resolve/1)
  end

  @doc """
  Gets a single post.

  Raises `Ecto.NoResultsError` if the Post does not exist.

  ## Examples

      iex> get_post!(123)
      %Post{}

      iex> get_post!(456)
      ** (Ecto.NoResultsError)

  """
  def get_post!(id) when is_binary(id) do
    Post
    |> where_preload(%{"preload" => ~w(authors tags)a})
    |> Repo.get(id)
    |> Post.resolve()
  end

  def get_post!(list) do
    attrs = Keyword.delete(list, :publication_slug)

    Post
    |> where_preload(%{"preload" => ~w(authors tags)a})
    |> where_publication(list)
    |> Repo.get_by(attrs)
    |> Post.resolve()
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking post changes.

  ## Examples

      iex> change_post(post)
      %Ecto.Changeset{data: %Post{}}

  """
  def change_post(%Post{} = post, attrs \\ %{}) do
    Post.changeset(post, attrs)
  end

  @doc """
  Creates a post.

  ## Examples

      iex> create_post(%{field: value})
      {:ok, %Post{}}

      iex> create_post(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_post(attrs \\ %{}) do
    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a post.

  ## Examples

      iex> update_post(post, %{field: new_value})
      {:ok, %Post{}}

      iex> update_post(post, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_post(%Post{} = post, attrs) do
    post
    |> Post.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a post.

  ## Examples

      iex> delete_post(post)
      {:ok, %Post{}}

      iex> delete_post(post)
      {:error, %Ecto.Changeset{}}

  """
  def delete_post(%Post{} = post) do
    Repo.delete(post)
  end

  ## Publication Context

  @doc """
  Returns the list of publications.

  ## Examples

      iex> list_publications()
      [%Publication{}, ...]

  """
  def list_publications(attrs \\ []) do
    Publication
    |> sort_by(attrs)
    |> where_preload(attrs)
    |> Repo.all()
  end

  @doc """
  Gets a single publication.

  Raises `Ecto.NoResultsError` if the Publication does not exist.

  ## Examples

      iex> get_publication!(123)
      %Publication{}

      iex> get_publication!(456)
      ** (Ecto.NoResultsError)

  """
  def get_publication!(id) when is_binary(id), do: Repo.get(Publication, id)
  def get_publication!(list), do: Repo.get_by(Publication, list)

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking publication changes.

  ## Examples

      iex> change_publication(publication)
      %Ecto.Changeset{data: %Publication{}}

  """
  def change_publication(%Publication{} = publication, attrs \\ %{}) do
    Publication.changeset(publication, attrs)
  end

  @doc """
  Creates a publication.

  ## Examples

      iex> create_publication(%{field: value})
      {:ok, %Publication{}}

      iex> create_publication(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_publication(attrs \\ %{}) do
    %Publication{}
    |> Publication.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a publication.

  ## Examples

      iex> update_publication(publication, %{field: new_value})
      {:ok, %Publication{}}

      iex> update_publication(publication, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_publication(%Publication{} = publication, attrs) do
    publication
    |> Publication.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a publication.

  ## Examples

      iex> delete_publication(publication)
      {:ok, %Publication{}}

      iex> delete_publication(publication)
      {:error, %Ecto.Changeset{}}

  """
  def delete_publication(%Publication{} = publication) do
    Repo.delete(publication)
  end

  ## Tag Context

  @doc """
  Returns the paginate list of tags.

  ## Examples

      iex> paginate_tags()
      %Scrivener.Page{entries: [%Tag{}, ...], ...}

  """
  def paginate_tags(attrs \\ []) do
    Tag
    |> search(:name, attrs)
    |> search(:slug, attrs)
    |> sort_by(attrs)
    |> where_status(attrs)
    |> where_publication(attrs)
    |> Repo.paginate(attrs)
  end

  @doc """
  Returns the list of tags.

  ## Examples

      iex> list_tags()
      [%Tag{}, ...]

  """
  def list_tags(attrs \\ []) do
    Tag
    |> sort_by(attrs)
    |> where_preload(attrs)
    |> where_publication(attrs)
    |> Repo.all()
  end

  @doc """
  Gets a single tag.

  Raises `Ecto.NoResultsError` if the Tag does not exist.

  ## Examples

      iex> get_tag!(123)
      %Tag{}

      iex> get_tag!(456)
      ** (Ecto.NoResultsError)

  """
  def get_tag!(id) when is_binary(id), do: Repo.get(Tag, id)

  def get_tag!(list) do
    attrs = Keyword.delete(list, :publication_slug)

    Tag
    |> where_publication(list)
    |> Repo.get_by(attrs)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking tag changes.

  ## Examples

      iex> change_tag(tag)
      %Ecto.Changeset{data: %Tag{}}

  """
  def change_tag(%Tag{} = tag, attrs \\ %{}) do
    Tag.changeset(tag, attrs)
  end

  @doc """
  Creates a tag.

  ## Examples

      iex> create_tag(%{field: value})
      {:ok, %Tag{}}

      iex> create_tag(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_tag(attrs \\ %{}) do
    %Tag{}
    |> Tag.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a tag.

  ## Examples

      iex> update_tag(tag, %{field: new_value})
      {:ok, %Tag{}}

      iex> update_tag(tag, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_tag(%Tag{} = tag, attrs) do
    tag
    |> Tag.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a tag.

  ## Examples

      iex> delete_tag(tag)
      {:ok, %Tag{}}

      iex> delete_tag(tag)
      {:error, %Ecto.Changeset{}}

  """
  def delete_tag(%Tag{} = tag) do
    Repo.delete(tag)
  end
end
