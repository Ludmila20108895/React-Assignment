// This is the main application component that sets up routing and context providers.
// It uses React Router for navigation and wraps the application in a MoviesContextProvider
// to manage global state related to movies. The QueryClientProvider is used to configure
// react-query for data fetching and caching.

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SiteHeader from "./components/siteHeader";

import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import MustWatchMoviesPage from "./pages/mustWatchMoviesPage";
import ActorListPage from "./pages/actorListPage";
import ActorDetailsPage from "./pages/actorDetailsPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Movies */}
        <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movies/mustwatch" element={<MustWatchMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />

        {/* Reviews */}
        <Route path="/reviews/:id" element={<MovieReviewPage />} />
        <Route path="/reviews/form" element={<AddMovieReviewPage />} />

        {/* Actors */}
        <Route path="/actors" element={<ActorListPage />} />
        <Route path="/actors/:id" element={<ActorDetailsPage />} />

        {/* wildcard */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
