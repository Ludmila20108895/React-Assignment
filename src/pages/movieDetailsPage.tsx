import React from "react"; // replace existing react import
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [movie] = useMovie(id ?? "");

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails {...movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
// This code defines a MovieDetailsPage component that fetches and displays movie details using the useMovie hook and the MovieDetails component. It handles the case where the movie data is not yet available by displaying a loading message. The component uses React Router's useParams to get the movie ID from the URL.
