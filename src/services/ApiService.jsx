const API_KEY = "a7fbd97c4bcadca0b85e6cd0f372e193";

export async function fetchWithError() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export async function getMovies(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language-en-US&page=1&query=${query}`
  );
  if (!response.ok) throw new Error("Not found");
  return await response.json();
}

export async function fetchMovieId(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  if (!response.ok) throw new Error("Not found");
  return await response.json();
}
