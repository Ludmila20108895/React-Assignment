import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import img from "../../images/film-poster-placeholder.png";
import { BaseMovieProps } from "../../types/interfaces";
import { MoviesContext } from "../../contexts/moviesContext";

import { useLanguage } from "../../contexts/languageContext";
import translations from "../../i18n/translations";

const styles = {
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  media: {
    height: 200,
    objectFit: "cover",
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
  content: { paddingBottom: "8px" },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "8px",
    fontSize: "0.85rem",
    color: "#666",
  },

  title: {
    fontWeight: "bold",
    fontSize: "1rem",

    color: "#333",
    height: "48px",
    overflow: "hidden",
  },
  actions: {
    justifyContent: "space-between",
    padding: "0 16px 16px",
    marginTop: "auto",
    gap: 1,
    flexWrap: "wrap" as const,
  },
  infoButton: {
    whiteSpace: "nowrap",
    minWidth: 90,
    fontSize: "0.75rem",
    paddingLeft: "12px",
    paddingRight: "12px",
    textTransform: "none" as const,
  },
};

interface MovieCardProps {
  movie: BaseMovieProps;
  action: (m: BaseMovieProps) => React.ReactNode;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, action }) => {
  const { favourites } = useContext(MoviesContext);
  const isFavourite = favourites.includes(movie.id);
  const { uiLang } = useLanguage();
  const t = translations[uiLang];

  return (
    <Card sx={styles.card}>
      <div>
        <CardHeader
          avatar={
            isFavourite && (
              <Avatar sx={styles.avatar}>
                <FavoriteIcon />
              </Avatar>
            )
          }
          title={
            <Typography sx={styles.title} variant="subtitle1">
              {movie.title}
            </Typography>
          }
        />
        <CardMedia
          sx={styles.media}
          component="img"
          image={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : img
          }
          alt={movie.title}
        />
      </div>

      <CardActions sx={styles.actions}>
        {action(movie)}
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
          <Button size="small" variant="contained">
            {t.moreInfo}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
