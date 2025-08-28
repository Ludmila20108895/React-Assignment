import React from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { MovieDetailsProps } from "../types/interfaces";
import { useLanguage } from "../contexts/languageContext";
import translations from "../i18n/translations";

const WriteReviewPage: React.FC = () => {
  const location = useLocation();
  const { movieId } = location.state;
  const { language, uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];
  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery<MovieDetailsProps, Error>(["movie", movieId, language], () =>
    getMovie(movieId, language)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      {movie ? (
        <PageTemplate movie={movie}>
          <ReviewForm {...movie} />
        </PageTemplate>
      ) : (
        <p>{t.waitingMovieDetails}</p>
      )}
    </>
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
