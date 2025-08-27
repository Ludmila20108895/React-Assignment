import React, { MouseEvent, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { BaseMovieProps } from "../../types/interfaces";

interface RemoveFromFavouritesIconProps {
  movie: BaseMovieProps;
}

const RemoveFromFavouritesIcon: React.FC<RemoveFromFavouritesIconProps> = ({
  movie,
}) => {
  const { removeFromFavourites } = useContext(MoviesContext);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFromFavourites(movie);
  };

  return (
    <IconButton aria-label="remove from favorites" onClick={onClick}>
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavouritesIcon;
// This code defines a RemoveFromFavouritesIcon component that allows users to remove a movie from their favourites list by clicking on a delete icon. It uses the MoviesContext to access the removeFromFavourites function and passes the movie data when the icon is clicked.
