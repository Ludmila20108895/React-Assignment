import React, { useContext } from "react";
import Container from "@mui/material/Container";
import { useQueries } from "react-query";

import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

import useFiltering from "../hooks/useFiltering"; // Importing necessary components and hooks
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI"; // Filtering configuration

import RemoveFromMustWatchIcon from "../components/cardIcons/removeFromMustWatch"; // Importing the icon component for removing movies from the must-watch list
import { BaseMovieProps, MovieDetailsProps } from "../types/interfaces"; // Importing types for TypeScript support
import WriteReviewIcon from "../components/cardIcons/writeReview";

// Configuration for title/genre filtering
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

// Main component for the Must Watch Movies page
const MustWatchMoviesPage: React.FC = () => {
  const { mustWatch: movieIds } = useContext(MoviesContext); // Accessing must-watch movie IDs from context

  // Hook for managing filtering state and logic
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

  // If there are no must-watch movies, display a message
  if (!movieIds || movieIds.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 3 }}>
        <PageTemplate
          title="Must Watch Movies"
          movies={[]}
          action={() => null}
        />
        <div style={{ padding: 16, textAlign: "center" }}>
          You haven’t added any Must Watch movies yet. Go to Upcoming Movies and
          add some!
        </div>
      </Container>
    );
  }

  // Fetching movie data for each must-watch movie ID using useQueries hook
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const queries = useQueries(
    movieIds.map((movieId) => ({
      queryKey: ["movie", String(movieId)], // Unique key for each movie query
      queryFn: () => getMovie(String(movieId)), // Fetching movie details
    }))
  );

  // Checking if any query is still loading
  const isLoading = queries.find((m) => m.isLoading === true);
  if (isLoading) return <Spinner />; // Display spinner while loading

  // Extracting successfully fetched movie data
  const movies: BaseMovieProps[] = queries
    .filter((q) => q.isSuccess && q.data)
    .map((q) => q.data as MovieDetailsProps);

  // Applying filters to the list of movies
  const displayedMovies = filterFunction(movies);

  // Function to handle changes in filter values
  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value }; // Creating a new filter object with updated value
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]] //
        : [filterValues[0], changedFilter]; // Updating the filter set based on type
    setFilterValues(updatedFilterSet); // Setting the new filter values
  };

  const action = (movie: BaseMovieProps) => (
    <>
      <RemoveFromMustWatchIcon movie={movie} />
      <WriteReviewIcon movie={movie} />
    </>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <PageTemplate
        title="Must Watch Movies"
        movies={displayedMovies}
        action={action}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </Container>
  );
};

export default MustWatchMoviesPage;
