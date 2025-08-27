import React from "react";
import IconButton from "@mui/material/IconButton";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";
import { BaseMovieProps } from "../../types/interfaces";

// Define the props for the WriteReviewIcon component
interface WriteReviewIconProps {
  movie: BaseMovieProps;
}
// Component to provide a link to the review form for a specific movie
const WriteReviewIcon: React.FC<WriteReviewIconProps> = ({ movie }) => {
  return (
    <IconButton
      aria-label="write review"
      component={Link}
      to="/reviews/form"
      state={{ movieId: movie.id }} // Passing movie ID to the review form
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </IconButton>
  );
};
export default WriteReviewIcon;

// This component provides a link to the review form for a specific movie
// It uses the movie's ID to pre-fill the form when writing a review
// The icon is styled with a primary color and large font size
// The component is used in the context of a movie card to allow users to write reviews easily
