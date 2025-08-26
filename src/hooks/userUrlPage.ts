import { useSearchParams } from "react-router-dom";

// Custom hook to manage pagination via URL search parameters
export function useUrlPage(param: string = "page") {
  const [params, setParams] = useSearchParams(); // Hook to read and modify the URL search parameters

  //read the page from URL
  const raw = params.get(param) ?? "1"; // Default to "1" if the parameter is not present
  const parsed = parseInt(raw, 10); // Parse the parameter value to an integer
  const page = Number.isNaN(parsed) ? 1 : Math.max(1, parsed); // Ensure the page number is at least 1

  //change the page in the URL
  const setPage = (next: number) => {
    setParams((preview) => {
      const p = new URLSearchParams(preview); // Create a new URLSearchParams object to avoid mutating the existing one
      if (next <= 1) p.delete(param);
      // Remove the parameter if the page number is 1 or less
      else p.set(param, String(next)); // Set the parameter to the new page number
      return p; // Return the updated search parameters
    });
  };

  return { page, setPage };
}
