import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage";
import MovieReview from "../components/movieReview";
import Typography from "@mui/material/Typography";

import { useLanguage } from "../contexts/languageContext";
import translations from "../i18n/translations";

const MovieReviewPage: React.FC = () => {
  const {
    state: { movie, review },
  } = useLocation();

  // i18n/translations.ts
  const { uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];
  return (
    <PageTemplate movie={movie}>
      <>
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          {t.reviews}
        </Typography>
        <MovieReview {...review} />
      </>
    </PageTemplate>
  );
};

export default MovieReviewPage;
