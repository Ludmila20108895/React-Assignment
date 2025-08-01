import React from "react"; // Import React for functional component
import PageTemplate from "../components/templateMovieListPage";

const FavouriteMoviesPage: React.FC = () => {
  const toDo = () => true;
  // Get movies from local storage.
  const movies = JSON.parse(localStorage.getItem("favourites") || "[]"); // Parse the favourites from local storage or use an empty array if none exist.

  return (
    <PageTemplate
      title="Favourite Movies"
      movies={movies}
      selectFavourite={toDo} // Function to handle selecting a favourite movie, currently a placeholder
    />
  );
};

export default FavouriteMoviesPage;
// This page displays the user's favourite movies.
