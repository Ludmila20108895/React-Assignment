import React from "react";
import { useParams } from "react-router-dom";

const ActorDetailsPage: React.FC = () => {
  const { id } = useParams();
  return <h2 style={{ padding: 16 }}>Actor details (id: {id})</h2>;
};

export default ActorDetailsPage;
