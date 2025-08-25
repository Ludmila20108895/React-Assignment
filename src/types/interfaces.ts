export interface BaseMovieProps {
  title: string;
  budget: number;
  homepage: string | undefined;
  id: number;
  imdb_id: string;
  original_language: string;
  overview: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  poster_path?: string;
  tagline: string;
  runtime: number;
  revenue: number;
  vote_count: number;
  favourite?: boolean;
  genre_ids?: number[];
}
export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (movie: BaseMovieProps) => React.ReactNode;
}

export interface MovieDetailsProps extends BaseMovieProps {
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
}
export interface MovieImage {
  file_path: string;
  aspect_ratio?: number; //some props are optional...
  height?: number;
  iso_639_1?: string;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface MoviePageProps {
  movie: MovieDetailsProps;
  images: MovieImage[];
}
export type FilterOption = "title" | "genre";
export interface MovieListPageTemplateProps extends BaseMovieListProps {
  title: string;
}
export interface Review {
  id: string;
  content: string;
  author: string;
}
export interface GenreData {
  genres: {
    id: string;
    name: string;
  }[];
}

export interface DiscoverMovies {
  page: number;
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}
export interface BaseMovieListProps {
  movies: BaseMovieProps[];
  action: (m: BaseMovieProps) => React.ReactNode;
}
// This interface defines the structure of a movie object used across the application
// It includes properties like title, budget, homepage, id, and various other movie details
export interface Review {
  author: string;
  content: string;
  agree: boolean;
  rating: number;
  movieId: number;
}
// This interface defines the structure of a movie review

// This interface defines the structure of an actor object (Popular People API from TMDB)
export interface Actor {
  // It includes properties like id, name, profile_path, and known_for
  id: number;
  name: string;
  profile_path: string | null;
  known_for?: Array<{
    id: number;
    media_type?: "movie" | "tv";
    title?: string; // for movies
    name?: string; // for TV
    poster_path?: string | null;
  }>;
}

export interface DiscoverActors {
  // This interface defines the structure of a response containing a list of actors
  page: number;
  results: Actor[];
  total_pages: number;
  total_results: number;
}
// This interface extends the Actor interface to include additional details about an actor
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
