import { Link } from 'react-router-dom';
import { Section } from './AddInfo.styled';

const AddInfo = () => {
  return (
    <Section>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </Section>
  );
};

export default AddInfo;
