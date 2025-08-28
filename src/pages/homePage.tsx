/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useQuery } from "react-query"; // useQuery is the primary hook for fetching data
import Spinner from "../components/spinner"; // loading component
import PageTemplate from "../components/templateMovieListPage"; // page layout component
import { getMovies } from "../api/tmdb-api"; // function to fetch movies
import useFiltering from "../hooks/useFiltering"; // custom hook for filtering
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI"; // filtering UI component and filter functions
import { BaseMovieProps, DiscoverMovies } from "../types/interfaces"; // TypeScript interfaces
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites"; // icon component to add to favourites

// new imports for pagination
import Container from "@mui/material/Container"; // to center the page
import Pagination from "@mui/material/Pagination"; // the pagination component
import Stack from "@mui/material/Stack"; // for layout of the pagination
import { useUrlPage } from "../hooks/userUrlPage"; // my hook to read & write ?page= in the URL

//
import { useLanguage } from "../contexts/languageContext";

// eslint-disable-next-line react-hooks/rules-of-hooks
const { language } = useLanguage(); //
const titleFiltering = { name: "title", value: "", condition: titleFilter }; // default: no title filter
const genreFiltering = { name: "genre", value: "0", condition: genreFilter }; // default: no genre filter

const HomePage: React.FC = () => {
  // Get the current page number from the URL, default to 1 if not present
  const { page, setPage } = useUrlPage();

  // Use React Query to fetch movies for the current page

  const { data, error, isLoading, isError, isFetching } = useQuery<
    DiscoverMovies,
    Error
  >(["discoverMovies", page, language], () => getMovies(page, language), {
    keepPreviousData: true,
  });
  // keepPreviousData to avoid empty state between page transitions
  // Filtering hook
  // useFiltering returns the filter values, a function to set the values, and a function to filter a list

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

  if (isLoading && !data) return <Spinner />; // only show spinner on first load
  if (isError) return <h1>{error.message}</h1>; // error state

  //
  const movies = (data?.results ?? []) as BaseMovieProps[]; // to satisfy TS
  const displayedMovies = filterFunction(movies); // filterFunction is from useFiltering

  // TMDB returns a maximum of 500 pages
  const totalPages = Math.min(500, Math.max(1, data?.total_pages ?? 1));

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updated =
      type === "title"
        ? [changedFilter, filterValues[1]] // keep genre filter the same
        : [filterValues[0], changedFilter];
    setFilterValues(updated);
  };
  // the function is passed to MovieFilterUI and called when the user changes a filter
  return (
    <Container maxWidth="lg" sx={{ pb: 3 }}>
      <PageTemplate
        title={`Discover Movies ${isFetching ? "(updating…)" : ""}`}
        movies={displayedMovies}
        action={(movie: BaseMovieProps) => (
          <AddToFavouritesIcon movie={movie} />
        )}
      />

      <MovieFilterUI
        onFilterValuesChange={changeFilterValues} // callback when filter values change
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
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

export default HomePage;
