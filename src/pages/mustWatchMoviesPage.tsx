import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import useFiltering from "../hooks/useFiltering"; // Importing necessary components and hooks
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI"; // Filtering configuration
import RemoveFromMustWatchIcon from "../components/cardIcons/removeFromMustWatch"; // Importing the icon component for removing movies from the must-watch list
import { BaseMovieProps } from "../types/interfaces"; // Importing types for TypeScript support
import WriteReviewIcon from "../components/cardIcons/writeReview";

const titleFiltering = {
  // Configuration for title filtering
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  // Configuration for genre filtering
  name: "genre",
  value: "0",
  condition: genreFilter,
};

const MustWatchMoviesPage: React.FC = () => {
  // Main component for the Must Watch Movies page
  const { mustWatch: movieIds } = useContext(MoviesContext); // Accessing must-watch movie IDs from context

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    // Using custom hook for filtering
    titleFiltering,
    genreFiltering,
  ]);

  const queries = useQueries(
    // Fetching movie data for each must-watch movie ID
    movieIds.map((movieId) => ({
      // Mapping over movie IDs to create queries
      queryKey: ["movie", movieId], // Unique key for each movie query
      queryFn: () => getMovie(movieId.toString()), // Fetching movie details
    }))
  );

  const isLoading = queries.find((m) => m.isLoading === true); // Checking if any query is loading
  if (isLoading) return <Spinner />; // Display spinner while loading

  const movies = queries.map((q) => q.data); // Extracting movie data from queries
  const displayedMovies = movies ? filterFunction(movies) : [];

  const changeFilterValues = (type: string, value: string) => {
    // Function to change filter values
    const changedFilter = { name: type, value: value }; //
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]] //
        : [filterValues[0], changedFilter]; // Updating the filter set based on type
    setFilterValues(updatedFilterSet); // Setting the new filter values
  };

  return (
    <>
      <PageTemplate
        title="Must Watch Movies"
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => (
          <>
            <RemoveFromMustWatchIcon {...movie} />
            <WriteReviewIcon {...movie} />
          </>
        )}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};

export default MustWatchMoviesPage;
