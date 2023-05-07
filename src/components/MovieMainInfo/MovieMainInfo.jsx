import PropTypes from 'prop-types';
import { Section } from './MovieMainInfo.styled';
import defaultImage from 'images/default_img_1.jpg';

const MovieMainInfo = ({ details }) => {
  const {
    poster_path,
    original_title,
    title,
    overview,
    genres,
    release_date,
    vote_average,
  } = details;

  return (
    <Section>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImage
        }
        alt={original_title}
        width="300"
        height="450"
      />
      <div>
        <h2>{`${original_title || title} (${release_date.slice(0, 4)})`}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>
          {genres.map(({ id, name }) => (
            <span key={id}>{name}</span>
          ))}
        </p>
      </div>
    </Section>
  );
};

export default MovieMainInfo;

MovieMainInfo.propTypes = {
  details: PropTypes.shape({
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
