import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { ActorDetails } from "../types/interfaces";
import { getActor } from "../api/tmdb-api";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useLanguage } from "../contexts/languageContext";

import img from "../images/film-poster-placeholder.png";

const profileBase = "https://image.tmdb.org/t/p/w342";

const ActorDetailsPage: React.FC = () => {
  const { id = "" } = useParams();
  const { language } = useLanguage();

  const {
    data: actor,
    isLoading,
    isError,
    error,
  } = useQuery<ActorDetails, Error>({
    queryKey: ["actor", id, language],
    queryFn: () => getActor(id, language),
  });

  if (isLoading) return <Spinner />;
  if (isError) return <h1 style={{ padding: 16 }}>{error.message}</h1>;
  if (!actor) return null;

  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <Button component={Link} to="/actors" variant="outlined" sx={{ mb: 2 }}>
        ← Back to Actors
      </Button>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              image={
                actor.profile_path ? `${profileBase}${actor.profile_path}` : img
              }
              alt={actor.name}
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {actor.name}
              </Typography>

              {actor.birthday && (
                <Typography variant="body2" color="text.secondary">
                  Birthday: {actor.birthday}
                </Typography>
              )}

              {actor.place_of_birth && (
                <Typography variant="body2" color="text.secondary">
                  Place of birth: {actor.place_of_birth}
                </Typography>
              )}

              {actor.also_known_as && actor.also_known_as.length > 0 && (
                <Typography variant="body2" color="text.secondary">
                  Also known as: {actor.also_known_as.slice(0, 3).join(", ")}
                </Typography>
              )}

              {actor.homepage && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  <a href={actor.homepage} target="_blank" rel="noreferrer">
                    Homepage
                  </a>
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Biography
          </Typography>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {actor.biography || "No biography available."}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ActorDetailsPage;
