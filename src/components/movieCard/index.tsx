import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import img from "../../images/film-poster-placeholder.png";
import { BaseMovieProps } from "../../types/interfaces";
import { MoviesContext } from "../../contexts/moviesContext";

const styles = {
  card: {
    width: 250,
    borderRadius: 5,
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
  content: {
    paddingBottom: "8px",
  },
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
  },
};

interface MovieCardProps {
  movie: BaseMovieProps;
  action: (m: BaseMovieProps) => React.ReactNode;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, action }) => {
  const { favourites } = useContext(MoviesContext);
  const isFavourite = favourites.includes(movie.id);

  return (
    <Card sx={styles.card}>
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
      <CardContent sx={styles.content}>
        <div style={styles.infoRow}>
          <span>
            <CalendarIcon fontSize="small" /> {movie.release_date}
          </span>
          <span>
            <StarRateIcon fontSize="small" />{" "}
            {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </span>
        </div>
      </CardContent>
      <CardActions sx={styles.actions}>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button size="small" variant="contained">
            More Info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
