import React, { useContext } from "react"; // to use the context
import { useQueries } from "react-query"; // to run multiple queries in parallel
import Spinner from "../components/spinner"; // loading component

import Container from "@mui/material/Container"; // to center the page
import WriteReviewIcon from "../components/cardIcons/writeReview"; // icon component to write a review
import ListPageLayout from "../components/layout/ListPageLayout";
import HeaderMovieList from "../components/headerMovieList";
import MovieList from "../components/movieList"; // page layout component
import { MoviesContext } from "../contexts/moviesContext"; // to access the movies context
import { getMovie } from "../api/tmdb-api"; // function to fetch movie details

import useFiltering from "../hooks/useFiltering"; // custom hook for filtering
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI"; // filtering UI component and filter functions

import RemoveFromFavouritesIcon from "../components/cardIcons/removeFromFavourites"; // icon component to remove from favourites
import { BaseMovieProps, MovieDetailsProps } from "../types/interfaces"; // TypeScript interfaces

import { useLanguage } from "../contexts/languageContext";
import translations from "../i18n/translations";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const FavouriteMoviesPage: React.FC = () => {
  const { favourites } = useContext(MoviesContext);
  const movieIds = favourites ?? [];
  const { language, uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

  // Create an array of queries and run them in parallel.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => ({
      queryKey: ["movie", String(movieId), language],
      queryFn: () => getMovie(String(movieId), language),
      enabled: Boolean(movieId),
    }))
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.some((q) => q.isLoading === true);

  if (isLoading) return <Spinner />; // Display spinner while loading

  // Extract the movie data from the queries that have successfully fetched data.
  const movies: BaseMovieProps[] = favouriteMovieQueries
    .filter((q) => q.isSuccess && q.data)
    .map((q) => q.data as MovieDetailsProps);

  // Function to Apply title/genre filtering to the list of favourite movies.
  const displayedMovies = filterFunction(movies);

  // back to the same state when the movies are removed
  if (displayedMovies.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <ListPageLayout>
          <HeaderMovieList title={t.favouriteMovies} />
          <MovieList movies={[]} action={() => null} />
        </ListPageLayout>
        <div style={{ padding: 16, textAlign: "center" }}>{t.noFavourites}</div>
      </Container>
    );
  }

  // Function to handle changes in filter values.
  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  // Function to render the remove from favourites icon for each movie.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const action = (movie: BaseMovieProps) => (
    <>
      <RemoveFromFavouritesIcon movie={movie} />
      <WriteReviewIcon movie={movie} />
    </>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <ListPageLayout>
        <HeaderMovieList title={t.favouriteMovies} />
        <MovieList movies={displayedMovies} action={action} />
      </ListPageLayout>
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </Container>
  );
};

export default FavouriteMoviesPage;
