import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = 'f2fae09050301062329c7f99a1fba61d';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}`
  );

  return response.data;
};

export const getMoviesByQuery = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}`
  );

  return response.data;
};

export const getMovieById = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`);

  return response.data;
};

export const getMovieSubInfo = async (id, option) => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/${option}?api_key=${KEY}`
  );

  return response.data;
};
