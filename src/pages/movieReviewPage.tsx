import React from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import { MovieDetailsProps, ApiReview } from "../types/interfaces";

import { useLanguage } from "../contexts/languageContext";
import translations from "../i18n/translations";

const MovieReviewPage: React.FC = () => {
  const location = useLocation();
  const { movie, review } = location.state as {
    movie: MovieDetailsProps;
    review: ApiReview;
  };

  // i18n/translations.ts
  const { uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];
  return (
    <PageTemplate movie={movie}>
      <>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          {t.movieReview.heading}
        </Typography>
        <MovieReview {...review} />
      </>
    </PageTemplate>
  );
};

export default MovieReviewPage;
