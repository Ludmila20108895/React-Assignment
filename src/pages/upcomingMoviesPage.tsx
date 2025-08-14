import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";

const UpcomingMoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);

  // Function to add a movie to the "Must Watch" list
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

  useEffect(() => {
    getUpcomingMovies().then((data) => {
      setMovies(data.results);
    });
  }, []);
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={AddMustWatchIcon}
    />
  );
};

export default UpcomingMoviesPage;
