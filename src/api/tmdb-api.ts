// Fetching movies from TMDB API and returning a promise that resolves to the movie data
export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_TMDB_KEY // Using environment variable for API key
    }&language=en-US&include_adult=false&include_video=false&page=1` // API endpoint for discovering movies
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Unable to fetch movies. Response status: ${response.status}` // Error handling for fetch failure
        );
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// Fetching a single movie by ID and can be used in various components
export const getMovie = (id: string) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to get movie data. Response status: ${response.status}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// Fetching movies by genre can be done using the same endpoint as getMovies
export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      import.meta.env.VITE_TMDB_KEY +
      "&language=en-US"
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Unable to fetch genres. Response status: ${response.status}`
        );
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

// Fetching movie images by ID (can be used as string or number)
export const getMovieImages = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("failed to fetch images");
      }
      return response.json(); // returns the full object with `posters` array
    })
    .then((json) => json.posters)
    .catch((error) => {
      throw error;
    });
};

// Fetching movie reviews by ID (movie ID can be a string or number)
export const getMovieReviews = (id: string | number) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};
export const getUpcomingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((json) => json); // returns the full object with `results` array
};

// Fetching popular actors from TMDB
export const getPopularActors = () => {
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${
      // Fetching popular actors
      import.meta.env.VITE_TMDB_KEY
    }&language=en-US&page=1` // API endpoint for popular actors
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(
          `Unable to fetch popular actors. Response status: ${response.status}` // Error handling for fetch failure
        );
      return response.json(); // returns the full object with `results` array
    })
    .catch((error) => {
      throw error;
    });
};
