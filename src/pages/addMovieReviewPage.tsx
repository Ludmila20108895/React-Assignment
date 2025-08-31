import React from "react";
import ReviewForm from "../components/reviewForm";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { MovieDetailsProps } from "../types/interfaces";
import { useLanguage } from "../contexts/languageContext";
import translations from "../i18n/translations";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import fallbackPoster from "../images/film-poster-placeholder.png";

const posterBase = "https://image.tmdb.org/t/p/w342";

const WriteReviewPage: React.FC = () => {
  const location = useLocation();
  const { movieId } = location.state;
  const { language, uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];
  const { data, error, isLoading, isError } = useQuery<
    MovieDetailsProps,
    Error
  >(["movie", movieId, language], () => getMovie(movieId, language));
  const movie = data!;

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1 style={{ padding: 16 }}>{error.message}</h1>;
  }
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Button component={Link} to="/" variant="outlined" sx={{ mb: 2 }}>
        ← {t.backToMovies}
      </Button>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              image={
                movie.poster_path
                  ? `${posterBase}${movie.poster_path}`
                  : fallbackPoster
              }
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {movie.title ?? "Untitled"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {t.movieDetails.releaseDate}: {movie.release_date ?? "N/A"}
              </Typography>
              {Array.isArray(movie.genres) && movie.genres.length > 0 ? (
                <Typography variant="body2" color="text.secondary">
                  {t.movieDetails.genres}:{" "}
                  {movie.genres.map((g) => g.name).join(", ")}
                </Typography>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  {t.movieDetails.genres}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            {t.writeReview ?? "Write a review"}
          </Typography>
          <ReviewForm id={movie.id} title={movie.title} genres={movie.genres} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WriteReviewPage;
// This page allows users to write a review for a specific movie
// It fetches the movie details using the movieId from the location state
// The ReviewForm component is rendered with the movie details
// It handles loading and error states using react-query
// The movie details are passed as props to the ReviewForm component
// The page is wrapped in a PageTemplate for consistent layout
// The component is designed to be used in a React Router context where the movieId is passed via state
// The movieId is used to fetch the specific movie details from the TMDB API
//
