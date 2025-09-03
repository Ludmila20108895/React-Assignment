# React Assignment – Movie App

## Overview

This is my assignment project for the React framework module. I built upon the lab starter project to develop a fully functional Single Page Application (SPA) using React and TypeScript.

The application integrates movies and actor information, supports language switching, and introduces new interactive features such as favorites, must-watch lists, and review forms.

## Links

Live App: https://ludmila-react-assignment.vercel.app/

GitHub Repo: https://github.com/Ludmila20108895/React-Assignment.git

Demo Video: ()

## Features Implemented

### New Views / Pages

actorListPage.tsx – List of popular actors.

actorDetailsPage.tsx – Detailed biography and credits of a selected actor.

mustWatchMoviesPage.tsx – Custom "Must Watch" movie list created by the user.

favouriteMoviesPage.tsx – Movies the user added to favorites.

addMovieReviewPage.tsx – Custom page to submit a review.

movieReviewPage.tsx – Displays reviews of a selected movie.

upcomingMoviesPage.tsx – List of upcoming movies.

## Routing & URL Handling

Implemented new routes for actors, must-watch, reviews, and favorites.

Added parameterized URLs for individual movie and actor pages (/movies/:id, /actors/:id).

Supports data hyperlinking from movies to actors, and between related movie pages.

## Additional Data Entities

Integrated actors as a new data type using TMDB's /person API endpoints.

Actor list and detail views added with full data display.

## Translation (i18n)

Developed custom language context with translation support.

Language switcher in the site header (languageOption.tsx).

Dynamic string translation using translations.ts.

## Filtering & Sorting

useFiltering.ts hook and movieFilterUI for:

Genre filtering

Title search

Sorting movies by release date and popularity.

## State Management

Used Context API:

moviesContext.tsx – Manage favorites, must-watch, and movie state.

languageContext.tsx – Global language selection.

## Components & UI

Created or Updated reusable components:

actorCard, actorList

cardIcons – Add/remove to/from favorites and must-watch lists

templateActorListPage, templateMovieListPage – Page templates for scalable list rendering

movieCard, movieList, movieDetails

reviewForm with ratingCategories.ts

ListPageLayout – Layout structure for list views

siteHeader – with dynamic language and navigation support.

## Server State Caching & Data Fetching

Centralized API requests using `tmdb-api.ts

Pagination implemented for:

- Home page (Discover Movies)
- Upcoming movies page
- Actor list page

Page number is synced with the URL using userUrlPage custom hook

Pagination fully implemented on list views using TMDB data.

## Other Features

Add a Movie Review (custom form)

"Must Watch" Movie List

Image fallbacks using placeholders

Custom useMovie and userUrlPage hooks

Reusable filter and layout systems

## Project Structure

Category: Description:

/components/ Reusable UI elements and layouts
/pages/ Route-based views
/hooks/ Custom React hooks (e.g. filtering, routing)
/contexts/ Global state contexts
/i18n/ Translations and i18n logic
/api/ Centralized API utility (tmdb-api.ts)
/types/ Custom TypeScript interfaces

## Tech Stack

\*\* React + TypeScript

\*\* React Router DOM

\*\* Vite (build tool)

\*\* Context API for global state

\*\* Local Storage for persistence

\*\* Custom i18n (language toggle)

\*\* Styled Components / CSS Modules
