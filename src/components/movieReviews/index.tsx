import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { getMovieReviews } from "../../api/tmdb-api";
import { excerpt } from "../../util";

import translations from "../../i18n/translations";
import { useLanguage } from "../../contexts/languageContext";

import { MovieDetailsProps, ApiReview } from "../../types/interfaces";
const styles = {
  table: {
    minWidth: 550,
  },
};

const MovieReviews: React.FC<MovieDetailsProps> = (movie) => {
  const [reviews, setReviews] = useState<ApiReview[]>([]);

  const { language, uiLang } = useLanguage();
  const t = translations[uiLang].movieReview;

  useEffect(() => {
    getMovieReviews(movie.id, language).then(setReviews);
  }, [movie.id, language]);

  return (
    <TableContainer component={Paper}>
      <Table sx={styles.table} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell>{t.reviewBy}</TableCell>
            <TableCell align="center">{t.heading}</TableCell>
            <TableCell align="right">{t.reviewsBtn}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((r: ApiReview) => (
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.author}
              </TableCell>
              <TableCell>{excerpt(r.content)}</TableCell>
              <TableCell>
                <Link
                  to={`/reviews/${r.id}`}
                  state={{
                    review: r,
                    movie: movie,
                  }}
                >
                  {t.reviewsBtn}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MovieReviews;
