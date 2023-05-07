import { NavLink } from 'react-router-dom';
import notFoundImage from 'images/not_found_image.png';
import styled from 'styled-components';

const NotFoundPage = styled.div`
  position: fixed;

  img {
    height: 100%;
    width: 100%;
  }

  a {
    position: relative;
    top: -150px;
    left: 47%;
    padding: 20px 60px;
    border-radius: 8px;
    text-decoration: none;
    color: #050329;
    font-size: 16px;
    font-weight: 700;
    background-color: #01b982;

    :hover {
      background-color: #196d54;
      color: #e9e9f3;
    }
  }
`;

const NotFound = () => {
  return (
    <NotFoundPage>
      <img src={notFoundImage} alt="Not found page" />
      <NavLink to="/">BACK TO HOME</NavLink>
    </NotFoundPage>
  );
};

export default NotFound;
