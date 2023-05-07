import { toast } from 'react-toastify';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from 'services/ApiService';
import MovieMainInfo from 'components/MovieMainInfo/MovieMainInfo';
import BackLink from 'components/BackLink/BackLink';
import AddInfo from 'components/AddInfo/AddInfo';
import Loader from 'components/Loader/Loader';

const MovieDitails = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState('');
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    getMovieDetails(movieId);
  }, [movieId]);

  const getMovieDetails = async id => {
    setIsLoading(true);
    try {
      const movieDetails = await API.getMovieById(id);
      if (movieDetails === {}) {
        return toast.error(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }

      setDetails(movieDetails);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      {details && <MovieMainInfo details={details} />}
      {isLoading && <Loader />}
      <AddInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {error &&
        toast.error(
          'Oops, an error occurred while loading the page. Please try reloading the page'
        )}
    </div>
  );
};

export default MovieDitails;
