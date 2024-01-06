import axios from 'axios';

export async function getMovieFunction(key) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_kEY = '6cf08bceccc0db13a518bacd00fe5691';
  //   const reviews = `movie/${movie_id}/reviews`;
  const params = new URLSearchParams({
    api_key: API_kEY,
    language: 'en-US',
    page: 1,
  });

  const response = await axios(`${BASE_URL}${key}?${params}`);
  return response.data;
}

export async function getSearchMovieFunction(key, query) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_kEY = '6cf08bceccc0db13a518bacd00fe5691';
  const params = new URLSearchParams({
    query,
    api_key: API_kEY,
    language: 'en-US',
    page: 1,
  });

  const response = await axios(`${BASE_URL}${key}?${params}`);
  return response.data;
}
