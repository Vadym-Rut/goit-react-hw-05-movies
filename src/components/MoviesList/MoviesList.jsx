import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Container, MovieWrapper, MovieName } from './MoviesList.styled';
import defaultImage from 'images/default_img_2.jpg';

const MoviestList = ({ movies }) => {
  const location = useLocation();

  return (
    <Container>
      {movies.map(({ id, original_title, title, backdrop_path }) => {
        return (
          <MovieWrapper key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/w200/${backdrop_path}`
                    : defaultImage
                }
                alt={original_title || title}
              />
              <MovieName>{original_title || title}</MovieName>
            </Link>
          </MovieWrapper>
        );
      })}
    </Container>
  );
};

export default MoviestList;

MoviestList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string,
    })
  ).isRequired,
};
