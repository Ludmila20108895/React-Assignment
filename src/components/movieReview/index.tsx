import React from "react";
import { ApiReview } from "../../types/interfaces";
import { useLanguage } from "../../contexts/languageContext";
import translations from "../../i18n/translations";

const MovieReview: React.FC<ApiReview> = ({ author, content }) => {
  const lang = useLanguage().uiLang;
  const t = translations[lang as keyof typeof translations];
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <p>
        <strong>{t.movieReview.reviewBy}:</strong> {author}{" "}
      </p>
      <p>{content} </p>
    </div>
  );
};
export default MovieReview;
