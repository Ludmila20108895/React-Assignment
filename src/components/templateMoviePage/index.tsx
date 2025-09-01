import React from "react"; // useState/useEffect redundant

// --- UI components ---
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import Spinner from "../spinner";
import { Alert, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// --- router (for back behavior) ---
import { useNavigate, useLocation } from "react-router-dom";

// ---typescript types ---
import { getMovieImages } from "../../api/tmdb-api";
import { MovieImage, MovieDetailsProps } from "../../types/interfaces";
import { useQuery } from "react-query";

// local placeholder if TMDB returns no images
import posterPlaceholder from "../../images/film-poster-placeholder.png";

//--- translations + language
import { useLanguage } from "../../contexts/languageContext";
import translations from "../../i18n/translations";

// ---style ---
const styles = {
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    borderRadius: 8,
  } as React.CSSProperties,
};
// --- props for the templates ---
interface TemplateMoviePageProps {
  movie: MovieDetailsProps;
  children: React.ReactElement;
}
const posterBase = "https://image.tmdb.org/t/p/w500";

const TemplateMoviePage: React.FC<TemplateMoviePageProps> = ({
  movie,
  children,
}) => {
  const { uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];

  const navigate = useNavigate();
  const location = useLocation();
  type LocationState = { from?: string };
  const from = (location.state as LocationState | null)?.from;
  const hasHistory = typeof window !== "undefined" && window.history.length > 1;

  const handleBack = () => {
    if (hasHistory) navigate(-1);
    else if (from) navigate(from, { replace: true });
  };

  const { data, error, isLoading, isError } = useQuery<MovieImage[], Error>(
    ["images", movie.id],
    () => getMovieImages(movie.id)
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    <Alert severity="error">
      {t.common.failedToLoadMovie}{" "}
      {error instanceof Error ? `(${error.message})` : ""}
    </Alert>;
  }

  // will keep only images that have a file_path
  const images = (data ?? []).filter((img) => !!img.file_path);

  const poster = movie.poster_path
    ? `${posterBase}${movie.poster_path}`
    : images.length > 0
    ? `${posterBase}${images[0].file_path}`
    : posterPlaceholder;

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{ mb: 2 }}
      >
        ← {t.backToMovies}
      </Button>

      <MovieHeader {...movie} />

      <Grid container spacing={3} style={{ padding: "15px" }}>
        <Grid item xs={12} md={4}>
          <img
            src={poster}
            alt={movie.title}
            loading="lazy"
            style={styles.image}
          />
        </Grid>

        <Grid item xs={12} md={8}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;
