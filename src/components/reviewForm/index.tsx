import React, { useContext, useState, ChangeEvent } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { MoviesContext } from "../../contexts/moviesContext";
import { useNavigate } from "react-router-dom";
import styles from "./styles";
import ratings from "./ratingCategories";
import { BaseMovieProps, Review } from "../../types/interfaces";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ReviewForm: React.FC<BaseMovieProps> = (movie) => {
  const defaultValues = {
    defaultValues: {
      author: "",
      review: "",
      agree: false,
      rating: 3,
      movieId: 0,
    },
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<Review>(defaultValues);

  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  const [rating, setRating] = useState(3);

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };
  const [open, setOpen] = useState(false);
  const handleSnackClose = () => {
    setOpen(false);
    navigate("/movies/favourites");
  };

  const onSubmit: SubmitHandler<Review> = (review) => {
    review.movieId = movie.id;
    review.rating = rating;
    context.addReview(movie, review);
    setOpen(true);
    // Reset the form after submission
    // reset the form fields
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        Write a review
      </Typography>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert severity="success" variant="filled" onClose={handleSnackClose}>
          <Typography variant="h4">
            Thank you for submitting a review
          </Typography>
        </Alert>
      </Snackbar>

      <form style={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="author"
          control={control}
          rules={{ required: "Name is required" }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              onChange={onChange}
              value={value}
              id="author"
              label="Author's name"
              autoFocus
            />
          )}
        />
        {errors.author && (
          <Typography variant="h6" component="p">
            {errors.author.message}
          </Typography>
        )}
        <Controller
          name="content"
          control={control}
          rules={{
            required: "Review cannot be empty.",
            minLength: { value: 10, message: "Review is too short" },
          }}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={value}
              onChange={onChange}
              label="Review text"
              id="review"
              multiline
              minRows={10}
            />
          )}
        />
        {errors.content && (
          <Typography variant="h6" component="p">
            {errors.content.message}
          </Typography>
        )}

        <Controller
          control={control}
          name="rating"
          render={({ field }) => (
            <TextField
              {...field}
              id="select-rating"
              select
              variant="outlined"
              label="Rating Select"
              value={rating}
              onChange={handleRatingChange}
              helperText="Don't forget your rating"
            >
              {ratings.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            sx={styles.submit}
            onClick={() => {
              reset({
                author: "",
                content: "",
              });
            }}
          >
            Reset
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ReviewForm;
// This component provides a form for users to write a review for a movie
// It uses react-hook-form for form handling and validation
// The form includes fields for the author's name, review text, and rating
// The rating is selected from predefined categories
// The form handles validation errors and displays them to the user
// The form submission is handled with a submit handler that processes the review data
// The component uses Material-UI for styling and layout
// The form can be reset to clear the input fields
// The component is designed to be used in a movie review application
// The review data is structured according to the Review interface
// The component is wrapped in a Box for layout purposes
// The component is designed to be reusable and can be integrated into different parts of the application
