import React, { MouseEvent, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BaseMovieProps } from "../../types/interfaces";

interface AddToFavouritesIconProps {
  movie: BaseMovieProps;
}

const AddToFavouritesIcon: React.FC<AddToFavouritesIconProps> = ({ movie }) => {
  const context = useContext(MoviesContext);

  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    context.addToFavourites(movie);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
// This code defines an AddToFavouritesIcon component that allows users to add a movie to their favourites list by clicking on a heart icon. It uses the MoviesContext to access the addToFavourites function and passes the movie data when the icon is clicked.
