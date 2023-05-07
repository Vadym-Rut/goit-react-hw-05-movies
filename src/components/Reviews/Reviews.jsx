import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'services/ApiService';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!movieId) {
      return;
    }

    getMovieReviews(movieId, 'reviews');
  }, [movieId]);

  const getMovieReviews = async (id, option) => {
    setIsLoading(true);
    try {
      const movieReviews = await API.getMovieSubInfo(id, option);
      if (movieReviews.results.length === 0) {
        return toast.error('We don`t have any reviews for this movies');
      }

      setReviews(movieReviews.results);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {isLoading && <Loader />}
      {error &&
        toast.error(
          'Oops, an error occurred while loading the page. Please try reloading the page'
        )}
    </div>
  );
};

export default Reviews;
