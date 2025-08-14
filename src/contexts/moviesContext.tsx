/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from "react";
import { BaseMovieProps } from "../types/interfaces";
import { Review } from "../types/interfaces";

interface MovieContextInterface {
  favourites: number[];
  addToFavourites: (movie: BaseMovieProps) => void;
  removeFromFavourites: (movie: BaseMovieProps) => void;
  addReview: (movie: BaseMovieProps, review: Review) => void; // NEW
  addToMustWatch: (movie: BaseMovieProps) => void; // NEW
  mustWatch: number[]; // NEW
}
const initialContextState: MovieContextInterface = {
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
  addReview: (movie, review) => {
    movie.id, review;
  }, // NEW
  addToMustWatch: () => {}, // NEW
  mustWatch: [], // NEW
};

// eslint-disable-next-line react-refresh/only-export-components
export const MoviesContext =
  React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [myReviews, setMyReviews] = useState<Review[]>([]); // NEW

  const [favourites, setFavourites] = useState<number[]>([]);
  const [mustWatch, setMustWatch] = useState<number[]>([]); // NEW

  const addToFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(movie.id)) {
        return [...prevFavourites, movie.id];
      }
      return prevFavourites;
    });
  }, []);

  const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((mId) => mId !== movie.id)
    );
  }, []);

  const addToMustWatch = useCallback((movie: BaseMovieProps) => {
    setMustWatch((prevMustWatch) => {
      if (!prevMustWatch.includes(movie.id)) {
        const updatedMustWatch = [...prevMustWatch, movie.id];
        return updatedMustWatch;
      }
      return prevMustWatch;
    });
  }, []);

  const addReview = (movie: BaseMovieProps, review: Review) => {
    // NEW
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview, // NEW
        addToMustWatch, // NEW
        mustWatch, // NEW
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
