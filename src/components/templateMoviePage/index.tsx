import React from "react"; // useState/useEffect redundant

// --- MUI components ---
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Spinner from "../spinner";
import { Alert } from "@mui/material";

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

const TemplateMoviePage: React.FC<TemplateMoviePageProps> = ({
  movie,
  children,
}) => {
  const { uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];

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

  return (
    <>
      <MovieHeader {...movie} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={12} md={3}>
          <div>
            {images.length > 0 ? (
              <ImageList cols={1} gap={8} sx={{ m: 0 }}>
                {images.map((image, idx) => (
                  <ImageListItem key={image.file_path}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                      alt={`${movie.title} image ${idx + 1}`}
                      loading="lazy"
                      style={styles.image}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            ) : (
              <img
                src={posterPlaceholder}
                alt={`${movie.title} placeholder`}
                style={styles.image}
              />
            )}
          </div>
        </Grid>

        <Grid item xs={12} md={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;
