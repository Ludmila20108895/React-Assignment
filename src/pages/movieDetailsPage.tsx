import React from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";
import { getMovie } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { MovieDetailsProps } from "../types/interfaces";
import { useLanguage } from "../contexts/languageContext";
import translations from "../i18n/translations";

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { language, uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];

  const {
    data: movie,
    error,
    isLoading,
    isError,
  } = useQuery<MovieDetailsProps, Error>(["movie", id, language], () =>
    getMovie(id || "", language)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails {...movie} />
          </PageTemplate>
        </>
      ) : (
        <p>{t.waitingMovieDetails}</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
// This code defines a MovieDetailsPage component that fetches and displays movie details using the useMovie hook and the MovieDetails component. It handles the case where the movie data is not yet available by displaying a loading message. The component uses React Router's useParams to get the movie ID from the URL.
