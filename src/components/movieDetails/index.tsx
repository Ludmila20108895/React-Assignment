import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";
import { MovieDetailsProps } from "../../types/interfaces";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieReview from "../movieReviews";

//--- i18n/translations ----
import { useLanguage } from "../../contexts/languageContext";
import translations from "../../i18n/translations";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const MovieDetails: React.FC<MovieDetailsProps> = (movie) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { uiLang } = useLanguage();
  const t = translations[uiLang];

  return (
    <>
      <Typography variant="h5" component="h3">
        {t.movieDetails.overview}
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip
            label={t.movieDetails.genres}
            sx={styles.chipLabel}
            color="primary"
          />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={t.genres[g.name as keyof typeof t.genres] || g.name} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={styles.chipSet}>
        <Chip
          icon={<AccessTimeIcon />}
          label={`${t.movieDetails.runtime}: ${movie.runtime} ${t.movieDetails.minutes}`}
          sx={styles.chipLabel}
        />
        <Chip
          icon={<MonetizationIcon />}
          label={`${t.movieDetails.revenue}: $${(
            movie.revenue ?? 0
          ).toLocaleString()}`}
          sx={styles.chipLabel}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count} ${t.movieDetails.votes})`}
          sx={styles.chipLabel}
        />
        <Chip
          label={`${t.movieDetails.releaseDate}: ${movie.release_date}`}
          sx={styles.chipLabel}
        />
      </Paper>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        <NavigationIcon />
        {t.movieDetails.reviewsBtn}
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReview {...movie} />
      </Drawer>
    </>
  );
};
export default MovieDetails;
