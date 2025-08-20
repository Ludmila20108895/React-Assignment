import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import ActorListPageTemplate from "../components/templateActorListPage";
import { DiscoverActors } from "../types/interfaces";
import { getPopularActors } from "../api/tmdb-api";

// This page displays a list of popular actors using the ActorListPageTemplate component
// It fetches the data using react-query and handles loading and error states
const ActorListPage: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery<DiscoverActors, Error>({
    queryKey: ["popularActors"],
    queryFn: getPopularActors,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>; // Display error message if data fetching fails

  const actors = data?.results ?? []; // Fallback to an empty array if data is undefined

  return <ActorListPageTemplate title="Popular Actors" actors={actors} />; // Rendering the ActorListPageTemplate with fetched actors
};

export default ActorListPage;
