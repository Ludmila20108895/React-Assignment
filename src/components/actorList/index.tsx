import React from "react";
import Grid from "@mui/material/Grid";
import ActorCard from "../actorCard";
import { Actor } from "../../types/interfaces";

interface ActorListProps {
  actors: Actor[];
}

// This component renders a list of actors using the ActorCard component
// It accepts an array of Actor objects as props and maps over them to create a grid of actor cards
const ActorList: React.FC<ActorListProps> = ({ actors }) => {
  return (
    <>
      {actors.map((a) => (
        <Grid key={a.id} item xs={12} sm={6} md={4} lg={3}>
          <ActorCard actor={a} />
        </Grid>
      ))}
    </>
  );
};

export default ActorList;
