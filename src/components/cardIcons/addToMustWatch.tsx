import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import { BaseMovieProps } from "../../types/interfaces";

interface AddToMustWatchIconProps {
  movie: BaseMovieProps;
}

const AddToMustWatchIcon: React.FC<AddToMustWatchIconProps> = ({ movie }) => {
  const { addToMustWatch } = useContext(MoviesContext);

  const onUserRequest = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addToMustWatch(movie);
  };

  return (
    <IconButton aria-label="add to must watch" onClick={onUserRequest}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMustWatchIcon;
// This component provides an icon button to add a movie to the "Must Watch" list
// It uses the MoviesContext to access the addToMustWatch function
// The onClick event handler prevents the default action and calls the addToMustWatch function with the movie as an argument
// The icon button displays a PlaylistAddIcon with primary color and large size
// The component is designed to be used within a context where the MoviesContext is provided
// It is a functional component that accepts a movie object as props
// The component is styled using Material-UI's IconButton and PlaylistAddIcon components
// The icon button is accessible with an aria-label for screen readers
// The component is reusable and can be used in different parts of the application where adding to "Must Watch" is required
// The movie prop is destructured to access the movie details
