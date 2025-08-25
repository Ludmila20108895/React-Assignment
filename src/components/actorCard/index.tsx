import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../images/film-poster-placeholder.png";
import { Actor } from "../../types/interfaces";
import { Link } from "react-router-dom";

const styles = {
  card: {
    width: 250,
    borderRadius: 5,
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
    "&:hover": { transform: "translateY(-5px)" },
  },
  media: { height: 200, objectFit: "cover" },
  title: {
    fontWeight: "bold",
    fontSize: "1rem",
    color: "#333",
    height: "48px",
    overflow: "hidden",
  },
  content: { paddingBottom: "8px" },
};

interface ActorCardProps {
  actor: Actor;
}

const profileSize = "w185";
const profileBase = `https://image.tmdb.org/t/p/${profileSize}`;

const ActorCard: React.FC<ActorCardProps> = ({ actor }) => {
  const knownForNames =
    actor.known_for?.map((k) => k.title || k.name).filter(Boolean) ?? [];

  return (
    <Card sx={styles.card}>
      <CardHeader
        title={
          <Typography sx={styles.title} variant="subtitle1">
            {actor.name}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        component="img"
        image={actor.profile_path ? `${profileBase}${actor.profile_path}` : img}
        alt={actor.name}
      />
      <CardContent sx={styles.content}>
        <Typography variant="body2" color="text.secondary">
          Known for:{" "}
          {knownForNames.length ? knownForNames.slice(0, 3).join(", ") : "—"}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "space-between", padding: "0 16px 16px" }}
      >
        <span />
        <Link to={`/actors/${actor.id}`}>
          <Button size="small" variant="contained">
            More Info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ActorCard;
// Fetching movie images by ID (movie ID can be a string or number)
