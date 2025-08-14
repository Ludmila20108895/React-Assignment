import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import useFiltering from "../hooks/useFiltering";
import MovieFilterUI, {
  titleFilter,
  genreFilter,
} from "../components/movieFilterUI";
import Spinner from "../components/spinner";

// Filtering configuration
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

const UpcomingMoviesPage: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["upcomingMovies"],
    queryFn: getUpcomingMovies,
  });

  const { filterValues, setFilterValues, filterFunction } = useFiltering([
    titleFiltering,
    genreFiltering,
  ]);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading upcoming movies.</div>;

  const movies = data.results.map((m: BaseMovieProps) => ({
    ...m,
    favourite: false,
  }));

  const displayedMovies = filterFunction(movies);

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const AddMustWatchIcon = (movie: BaseMovieProps) => {
    return (
      <IconButton
        aria-label="add to must watch"
        onClick={() => console.log(`Add ${movie.title} to must watch list`)}
      >
        <PlaylistAddIcon color="primary" fontSize="large" />
      </IconButton>
    );
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
        action={AddMustWatchIcon}
      />
    </>
  );
};

export default UpcomingMoviesPage;
