import React, { useContext } from "react"; // to use the context
import { useQueries } from "react-query"; // to run multiple queries in parallel
import Spinner from "../components/spinner"; // loading component

import Container from "@mui/material/Container"; // to center the page
import Typography from "@mui/material/Typography"; // for page title
import Grid from "@mui/material/Grid"; // for page layout

import PageTemplate from "../components/templateMovieListPage"; // page layout component
import { MoviesContext } from "../contexts/moviesContext"; // to access the movies context
import { getMovie } from "../api/tmdb-api"; // function to fetch movie details

import useFiltering from "../hooks/useFiltering"; // custom hook for filtering
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI"; // filtering UI component and filter functions

import RemoveFromFavouritesIcon from "../components/cardIcons/removeFromFavourites"; // icon component to remove from favourites
import { BaseMovieProps, MovieDetailsProps } from "../types/interfaces"; // TypeScript interfaces

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
  const { favourites: movieIds } = useContext(MoviesContext);
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

  // If there are no favourite movies, display a message
  if (!movieIds || movieIds.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Favourite Movies
        </Typography>
        <Typography variant="body1">
          You have no favourite movies yet. Go to the Home page and tap the
          heart icon to add some.
        </Typography>
      </Container>
    );
  }

  // Create an array of queries and run them in parallel.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const favouriteMovieQueries = useQueries(
    movieIds.map((movieId) => ({
      queryKey: ["movie", String(movieId)],
      queryFn: () => getMovie(String(movieId)),
    }))
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieQueries.some((q) => q.isLoading === true);

  if (isLoading) return <Spinner />; // Display spinner while loading

  // Extract the movie data from the queries that have successfully fetched data.
  const movies: BaseMovieProps[] = favouriteMovieQueries
    .filter((q) => q.isSuccess && q.data)
    .map((q) => q.data as MovieDetailsProps);

  // Apply title/genre filtering to the list of favourite movies.
  const displayedMovies = filterFunction(movies);

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
  const removeFromFavourites = (movie: BaseMovieProps) => (
    <RemoveFromFavouritesIcon movie={movie} />
  );

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>

        <Typography variant="h5">Favourite Movies</Typography>
      </Grid>
      <Grid item xs={12}>
        <MovieFilterUI
          onFilterValuesChange={changeFilterValues}
          titleFilter={filterValues[0].value}
          genreFilter={filterValues[1].value}
        />
      </Grid>

      <Grid item xs={12}>
        <MovieFilterUI
          onFilterValuesChange={changeFilterValues}
          titleFilter={filterValues[0].value}
          genreFilter={filterValues[1].value}
        />
      </Grid>

      {/* Movie list (uses the existing template) */}
      <Grid item xs={12}>
        <PageTemplate
          title="" // we show the page title above with Typography
          movies={displayedMovies} // movies to display
          action={(movie) => <RemoveFromFavouritesIcon movie={movie} />}
        />
      </Grid>
    </Container>
  );
};

export default FavouriteMoviesPage;
