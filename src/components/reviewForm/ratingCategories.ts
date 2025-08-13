const ratings = [
  {
    value: 5,
    label: "Excellent",
  },
  {
    value: 4,
    label: "Good",
  },
  {
    value: 3,
    label: "Average",
  },
  {
    value: 2,
    label: "Poor",
  },
  {
    value: 0,
    label: "Terrible",
  },
];
export default ratings;
// This file defines the rating categories used in the review form
// Each category has a value and a label for user selection
// The ratings are exported as an array for use in the review form component
// The values range from 0 (Terrible) to 5 (Excellent)
// This structure allows for easy mapping in the UI, providing a clear rating system for users to evaluate movies
// The ratings can be used in a dropdown or radio button selection in the review form
// This file is part of a movie review application, providing a standardized way to rate movies
// The ratings can be easily extended or modified if needed in the future
