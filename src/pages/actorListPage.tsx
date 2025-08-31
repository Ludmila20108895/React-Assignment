import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import ListPageLayout from "../components/layout/ListPageLayout";
import { DiscoverActors } from "../types/interfaces";
import { getPopularActors } from "../api/tmdb-api";
import Pagination from "@mui/material/Pagination"; // MUI Pagination component
import Stack from "@mui/material/Stack"; // MUI Stack component for layout
import Container from "@mui/material/Container"; // MUI Container component for layout
import { useUrlPage } from "../hooks/userUrlPage"; // Custom hook to manage pagination via URL
import { useLanguage } from "../contexts/languageContext";
import translations from "../i18n/translations";
import HeaderMovieList from "../components/headerMovieList";
import ActorList from "../components/actorList";

// This page displays a list of popular actors using the ActorListPageTemplate component
// It fetches the data using react-query and handles loading and error states
const ActorListPage: React.FC = () => {
  const { page, setPage } = useUrlPage(); // Custom hook to manage pagination via URL
  const { language, uiLang } = useLanguage();
  const lang = uiLang as keyof typeof translations;
  const t = translations[lang];

  const { data, isLoading, isError, error, isFetching } = useQuery<
    DiscoverActors,
    Error
  >(
    ["popularActors", page, language], // Query key includes page number to refetch data on page change
    () => getPopularActors(page, language), // Fetch function to get popular actors
    { keepPreviousData: true } // Keep previous data while fetching new data
  );

  if (isLoading && !data) return <Spinner />;
  if (isError) return <h1>{error?.message}</h1>; // Display error message if data fetching fails

  const actors = data?.results ?? []; // Fallback to an empty array if data is undefined
  const totalPages = Math.min(500, Math.max(1, data?.total_pages ?? 1)); // Ensure totalPages is between 1 and 500

  return (
    <Container maxWidth="lg" sx={{ pb: 3 }}>
      <ListPageLayout>
        <HeaderMovieList
          title={`${t.actorList} ${isFetching ? "(updating…)" : ""}`}
        />
        <ActorList actors={actors} />

        {totalPages > 1 && (
          <Stack direction="row" justifyContent="center" sx={{ mt: 2 }}>
            <Pagination // MUI Pagination component
              count={totalPages} // Total number of pages
              page={page} // Current page number
              onChange={(_, p) => setPage(p)} // Update page number on change
              siblingCount={1}
              boundaryCount={1}
              shape="rounded"
            />
          </Stack>
        )}
      </ListPageLayout>
    </Container>
  );
};

export default ActorListPage;
