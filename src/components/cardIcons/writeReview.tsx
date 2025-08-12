import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { BaseMovieProps } from "../../types/interfaces";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WriteReviewIcon: React.FC<BaseMovieProps> = (_movie) => {
  return <RateReviewIcon color="primary" fontSize="large" />;
};

export default WriteReviewIcon;
// This code defines a WriteReviewIcon component that displays a review icon for a movie. It uses the BaseMovieProps interface to type the movie prop, although it does not currently use the movie data in the component.
// The icon is styled with a primary color and large font size.
// This component can be used in a movie card or details page to indicate that users can write a review for the movie.
// It is a simple functional component that does not handle any events or state management.
// The component is exported as the default export of the module, allowing it to be easily imported and used in other parts of the application.
