import React from "react"; // Importing React for component creation
import PageTemplate from "../components/templateMovieListPage"; // Importing the template for the movie list page
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces"; // Importing the interface for movie properties
import { getUpcomingMovies } from "../api/tmdb-api"; // Importing the API function to fetch upcoming movies
import { useQuery } from "react-query"; // Importing useQuery from react-query for data fetching
import useFiltering from "../hooks/useFiltering"; // Importing custom hook for filtering movies
import MovieFilterUI, { // Importing the UI component for filtering movies
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import Spinner from "../components/spinner"; // Importing Spinner component for loading state
import AddToMustWatchIcon from "../components/cardIcons/addToMustWatch"; // Importing the icon component for adding movies to "Must Watch" list

// new imports for pagination UI and URL hook
import Container from "@mui/material/Container"; // Importing Container from Material UI for layout
import Pagination from "@mui/material/Pagination"; // Importing Pagination component from Material UI
import Stack from "@mui/material/Stack"; // Importing Stack component from Material UI for layout
import { useUrlPage } from "../hooks/userUrlPage"; // Importing custom hook to manage page number in URL

import { useLanguage } from "../contexts/languageContext";

const titleFiltering = { name: "title", value: "", condition: titleFilter }; // Defining the title filtering criteria
const genreFiltering = { name: "genre", value: "0", condition: genreFilter }; // Defining the genre filtering criteria

const UpcomingMoviesPage: React.FC = () => {
  const { page, setPage } = useUrlPage(); // Using custom hook to get and set the current page number from URL
  const { language } = useLanguage();
  // Using react-query's useQuery hook to fetch upcoming movies data
  const { data, isLoading, error, isFetching } = useQuery<
    DiscoverMovies,
    Error
  >(
    ["upcomingMovies", page, language],
    () => getUpcomingMovies(page, language),
    {
      keepPreviousData: true,
    }
  );

  // Using custom filtering hook to manage filter values and filtering function
  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

  if (isLoading && !data) return <Spinner />; // Displaying spinner while data is loading
  if (error) return <div>Error loading upcoming movies.</div>; // Displaying error message if data fetching fails

  const movies = (data?.results ?? []).map((m: BaseMovieProps) => ({
    // Mapping the fetched movies to the required format
    ...m,
    favourite: false,
  }));
  const displayedMovies = filterFunction(movies); // Filtering the movies based on the filter criteria
  const totalPages = Math.min(500, Math.max(1, data?.total_pages ?? 1)); // Calculating total pages with a maximum limit of 500

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
    <Container maxWidth="lg" sx={{ pb: 3 }}>
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />

      <PageTemplate
        title={`Upcoming Movies ${isFetching ? "(updating…)" : ""}`}
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => <AddToMustWatchIcon movie={movie} />}
      />

      {totalPages > 1 && (
        <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={(_, p) => setPage(p)}
            siblingCount={1}
            boundaryCount={1}
            shape="rounded"
          />
        </Stack>
      )}
    </Container>
  );
};

export default UpcomingMoviesPage;
