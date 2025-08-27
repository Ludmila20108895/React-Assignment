// This code defines a RemoveFromMustWatchIcon component that allows users to remove a movie from their "Must Watch" list by clicking on a delete icon. It uses the MoviesContext to access the removeFromMustWatch function and passes the movie data when the icon is clicked.

import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { BaseMovieProps } from "../../types/interfaces";

// Define the props for the RemoveFromMustWatchIcon component
interface RemoveFromMustWatchIconProps {
  movie: BaseMovieProps;
}

// Component to remove a movie from the "Must Watch" list
// It uses the MoviesContext to access the removeFromMustWatch function
// The onClick event handler prevents the default action and calls the removeFromMustWatch function with the movie as an argument
const RemoveFromMustWatchIcon: React.FC<RemoveFromMustWatchIconProps> = ({
  movie,
}) => {
  const { removeFromMustWatch } = useContext(MoviesContext);

  // Event handler for the icon button click
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFromMustWatch(movie);
  };
  // Rendering the icon button with a delete icon
  return (
    <IconButton aria-label="remove from must watch" onClick={onClick}>
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMustWatchIcon;
