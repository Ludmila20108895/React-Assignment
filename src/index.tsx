// This is the entry point of the React application.
import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM for rendering the app
import App from "./App"; // Import the main App component and routes
import { QueryClientProvider, QueryClient } from "react-query"; // Import QueryClientProvider and QueryClient
import { ReactQueryDevtools } from "react-query/devtools"; // Import ReactQueryDevtools
import { LanguageProvider } from "./contexts/languageContext"; // Import LanguageProvider
import MoviesContextProvider from "./contexts/moviesContext";

// Create a QueryClient instance with default options for react-query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});
// Render the App component within the QueryClientProvider and LanguageProvider
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <MoviesContextProvider>
          <App />
        </MoviesContextProvider>
      </LanguageProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
