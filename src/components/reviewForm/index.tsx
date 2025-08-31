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
import { UserReview, MovieDetailsProps } from "../../types/interfaces";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useLanguage } from "../../contexts/languageContext";
import translations from "../../i18n/translations";

type ReviewFormProps = Pick<MovieDetailsProps, "id" | "title" | "genres">;

const ReviewForm: React.FC<ReviewFormProps> = ({ id, title, genres }) => {
  const { uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];

  const defaultValues: UserReview = {
    author: "",
    content: "",
    agree: false,
    rating: 3,
    movieId: id,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<UserReview>({ defaultValues });

  const navigate = useNavigate();
  const context = useContext(MoviesContext);
  const [rating, setRating] = useState(3);
  const [open, setOpen] = useState(false);

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleSnackClose = () => {
    setOpen(false);
    navigate("/movies/favourites");
  };

  const onSubmit: SubmitHandler<UserReview> = (review) => {
    review.movieId = id;
    review.rating = rating;
    context.addReview(
      {
        id,
        title: title,
        overview: "",
        release_date: "",
        vote_average: 0,
        popularity: 0,
        genre_ids: genres?.map((g) => g.id) || [],
        poster_path: undefined,
      },
      review
    );
    setOpen(true);
    reset(defaultValues);
    // Reset the form after submission
    // reset the form fields
  };

  return (
    <Box component="div" sx={styles.root}>
      <Typography component="h2" variant="h3">
        {t.reviewForm.title}
      </Typography>
      <Snackbar
        sx={styles.snack}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleSnackClose}
      >
        <Alert severity="success" variant="filled" onClose={handleSnackClose}>
          <Typography variant="h4">{t.reviewForm.successMessage}</Typography>
        </Alert>
      </Snackbar>

      <form style={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="author"
          control={control}
          rules={{ required: t.validation.nameRequired }}
          render={({ field }) => (
            <TextField
              sx={{ width: "40ch" }}
              variant="outlined"
              margin="normal"
              required
              {...field}
              label={t.reviewForm.reviewTitle}
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
            required: t.validation.reviewRequired,
            minLength: { value: 10, message: t.validation.reviewTooShort },
          }}
          render={({ field }) => (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              {...field}
              label={t.reviewForm.reviewText}
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

        {/* Rating */}
        <TextField
          id="select-rating"
          select
          variant="outlined"
          label={t.reviewForm.rating}
          value={rating}
          onChange={handleRatingChange}
          helperText={t.reviewForm.validation.ratingRequired}
        >
          {ratings.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {t.ratings[option.label as keyof typeof t.ratings] ||
                option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* Buttons */}

        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={styles.submit}
          >
            {t.reviewForm.submit}
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
