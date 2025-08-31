import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import MovieList from "../movieList";
import { MovieListPageTemplateProps } from "../../types/interfaces";

const styles = {
  root: {
    backgroundColor: "#bfbfbf",
    paddingBottom: "32px",
  },
};

const MovieListPageTemplate: React.FC<MovieListPageTemplateProps> = ({
  movies,
  title,
  action,
}) => {
  return (
    <Grid container sx={styles.root} spacing={5}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item xs={12}>
        <MovieList action={action} movies={movies}></MovieList>
      </Grid>
    </Grid>
  );
};
export default MovieListPageTemplate;
