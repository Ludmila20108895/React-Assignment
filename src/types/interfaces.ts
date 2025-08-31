// Basic movie properties returned by TMDB for lists
export interface BaseMovieProps {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  genre_ids?: number[]; // TMDB returns genre IDs for lists, full genre objects for details
  favourite?: boolean; // local only, not from TMDB
}

// Reusable prop type for components that render a list of movies
export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (movie: BaseMovieProps) => React.ReactNode;
}
//  Movie details
export interface MovieDetailsProps extends BaseMovieProps {
  budget?: number;
  homepage?: string;
  imdb_id?: string;
  original_language?: string;
  tagline?: string;
  runtime?: number;
  revenue?: number;
  vote_count?: number;

  genres: { id: number; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
}

// Images for a movie
export interface MovieImage {
  file_path: string;
  aspect_ratio?: number;
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

// Props for pages that display movie details, including images
export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}

// Data returned by discover/upcoming/popular list endpoints
export interface DiscoverMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}

// filter option shared by filterUI
export type FilterOption = "title" | "genre";

export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}

// TMDB API review item (from /movie/{id}/reviews)
export interface ApiReview {
  id: string;
  content: string;
  author: string;
}

// Local review item (stored in app)
export interface UserReview {
  author: string;
  content: string;
  agree: boolean;
  rating: number;
  movieId: number;
}

// Actors
export interface Actor {
  id: number;
  name: string;
  profile_path: string | null;
  known_for?: Array<{
    id: number;
    media_type?: "movie" | "tv";
    title?: string; // movies
    name?: string; // tv
    poster_path?: string | null;
  }>;
}
// Data returned by /person/popular
export interface DiscoverActors {
  page: number;
  results: Actor[];
  total_pages: number;
  total_results: number;
}

// Detailed actor information from /person/{person_id}
export interface ActorDetails extends Actor {
  biography: string;
  birthday: string | null;
  deathday: string | null;
  place_of_birth: string | null;
  homepage: string | null;
  also_known_as: string[];
  imdb_id: string | null;
  gender: number | null;
}
// --- genres (TMDB /genre/movie/list)
export interface Genre {
  id: number;
  name: string;
}

export interface GenreData {
  genres: Genre[];
}
