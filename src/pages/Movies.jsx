import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import MoviestList from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import Loader from 'components/Loader/Loader';
import * as API from 'services/ApiService';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    getMovies(query);
  }, [query]);

  const getMovies = async query => {
    setIsLoading(true);
    try {
      const moviesData = await API.getMoviesByQuery(query);
      if (moviesData.results.length === 0) {
        return toast.error(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }

      setMovies(moviesData.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = searchQuery => {
    if (searchQuery === '') {
      toast.warn('The input field cannot be empty.');
    }
    if (query === searchQuery) {
      return;
    }

    const nextParams = searchQuery !== '' ? { query: searchQuery } : {};

    setSearchParams(nextParams);
  };

  return (
    <main>
      <Searchbar onSubmit={handleSearch} />
      {movies && <MoviestList movies={movies} />}
      {isLoading && <Loader />}
      {error &&
        toast.error(
          'Oops, an error occurred while loading the page. Please try reloading the page'
        )}
    </main>
  );
};

export default Movies;
