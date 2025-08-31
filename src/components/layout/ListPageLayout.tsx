import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

interface ListPageLayoutProps {
  children: React.ReactNode;
}

const ListPageLayout: React.FC<ListPageLayoutProps> = ({ children }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Stack spacing={4}>{children}</Stack>
    </Container>
  );
};

export default ListPageLayout;
