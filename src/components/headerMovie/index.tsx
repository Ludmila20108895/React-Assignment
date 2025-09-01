import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { MovieDetailsProps } from "../../types/interfaces";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
};

const MovieHeader: React.FC<MovieDetailsProps> = (movie) => {
  const favouriteMovies = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isFavourite = favouriteMovies.some(
    (fav: { id: number }) => fav.id === movie.id
  );
  return (
    <Paper component="div" sx={styles.root}>
      {isFavourite && <FavoriteIcon sx={{ color: "red", fontSize: "large" }} />}

      <Typography variant="h4" component="h3">
        {movie.title}
        {"   "}
        <a href={movie.homepage}>
          <HomeIcon color="primary" fontSize="large" />
        </a>

        <br />
        <span>{`${movie.tagline}`} </span>
      </Typography>
    </Paper>
  );
};

export default MovieHeader;
