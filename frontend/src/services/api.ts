const BASE_URL = "http://localhost:3000";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movies`);
  const data = await response.json();

  return data;
};

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/movies?search=${encodeURIComponent(query)}`
  );
  const data = await response.json();

  return data;
};
