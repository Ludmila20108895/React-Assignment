import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import { MoviesContext } from "../../contexts/moviesContext";
import { BaseMovieProps } from "../../types/interfaces";

const RemoveFromMustWatchIcon: React.FC<BaseMovieProps> = (movie) => {
  const { removeFromMustWatch } = useContext(MoviesContext);

  const onUserRequest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFromMustWatch(movie);
  };

  return (
    <IconButton aria-label="remove from must watch" onClick={onUserRequest}>
      <PlaylistRemoveIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMustWatchIcon;
// This component provides an icon button to remove a movie from the "Must Watch" list
// It uses the MoviesContext to access the removeFromMustWatch function
// The onClick event handler prevents the default action and calls the removeFromMustWatch function with the movie as an argument
// The icon button displays a PlaylistRemoveIcon with primary color and large size
// The component is designed to be used within a context where the MoviesContext is provided
// It is a functional component that accepts a movie object as props
// The component is styled using Material-UI's IconButton and PlaylistRemoveIcon components
// The icon button is accessible with an aria-label for screen readers
