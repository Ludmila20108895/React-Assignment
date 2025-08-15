import React from "react"; // Importing React for component creation
import PageTemplate from "../components/templateMovieListPage"; // Importing the template for the movie list page
import { BaseMovieProps } from "../types/interfaces"; // Importing the interface for movie properties
import { getUpcomingMovies } from "../api/tmdb-api"; // Importing the API function to fetch upcoming movies
import { useQuery } from "react-query"; // Importing useQuery from react-query for data fetching
import useFiltering from "../hooks/useFiltering"; // Importing custom hook for filtering movies
import MovieFilterUI, { // Importing the UI component for filtering movies
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import Spinner from "../components/spinner"; // Importing Spinner component for loading state
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch"; // Importing the icon component for adding movies to "Must Watch" list

const titleFiltering = { name: "title", value: "", condition: titleFilter }; // Defining the title filtering criteria
const genreFiltering = { name: "genre", value: "0", condition: genreFilter }; // Defining the genre filtering criteria

const UpcomingMoviesPage: React.FC = () => {
  // Defining the UpcomingMoviesPage component
  const { data, isLoading, error } = useQuery({
    queryKey: ["upcomingMovies"], // Query key for caching
    queryFn: getUpcomingMovies, // Fetching upcoming movies using the API function
  });

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    // Using the custom hook for filtering
    titleFiltering,
    genreFiltering,
  ]);

  if (isLoading) return <Spinner />; // Displaying spinner while data is loading
  if (error) return <div>Error loading upcoming movies.</div>; // Displaying error message if data fetching fails

  const movies = data.results.map((m: BaseMovieProps) => ({
    // Mapping the fetched movies to the required format
    ...m,
    favourite: false,
  }));
  const displayedMovies = filterFunction(movies); // Filtering the movies based on the filter criteria

  const changeFilterValues = (type: string, value: string) => {
    // Function to change filter values
    const changedFilter = { name: type, value }; // Creating a new filter object with updated value
    const updated =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter]; // Updating the filter values based on the type
    setFilterValues(updated); // Setting the updated filter values
  };

  return (
    <>
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
      <PageTemplate
        title="Upcoming Movies"
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => <AddToMustWatchIcon movie={movie} />} // Adding action icon to each movie
      />
    </>
  );
};

export default UpcomingMoviesPage;
