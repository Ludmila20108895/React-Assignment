import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { BaseMovieProps } from "../../types/interfaces";
import { Link } from "react-router-dom";

const WriteReviewIcon: React.FC<BaseMovieProps> = (movie) => {
  return (
    <Link
      to={"/reviews/form"}
      state={{
        movieId: movie.id,
      }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewIcon;

// This component provides a link to the review form for a specific movie
// It uses the movie's ID to pre-fill the form when writing a review
// The icon is styled with a primary color and large font size
// The component is used in the context of a movie card to allow users to write reviews easily
