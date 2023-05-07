import styled from '@emotion/styled';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  gap: 16px;
  padding: 10px 0;
  list-style: none;
`;

export const MovieWrapper = styled.li`
  border: 1px solid grey;
  border-radius: 4px;
  background-color: #dfeeee;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), 0 8px 10px rgba(0, 0, 0, 0.2);

  :hover {
    scale: 1.05;
  }

  > a {
    text-decoration: none;
  }

  & img {
    width: 197px;
    height: 120px;
    background-size: cover;
  }
`;

export const MovieName = styled.h5`
  padding: 4px;
  margin-top: 0;
  margin-bottom: 0;
  color: black;
`;
