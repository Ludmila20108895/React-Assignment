const styles = {
  root: {
    marginTop: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  form: {
    width: "100%",
    "& > * ": {
      marginTop: 2,
    },
  },
  textField: {
    width: "40ch",
  },
  submit: {
    marginRight: 2,
  },
  snack: {
    width: "50%",
    "& > * ": {
      width: "100%",
    },
  },
};
export default styles;
// This file defines the styles for the review form component
// It uses a JavaScript object to define styles for various elements
// The styles include layout properties for the root, form, text fields, submit button, and snack bar
// The root style sets the margin and flex properties for layout
// The form style defines the width and margin for child elements
// The textField style sets a fixed width for text input fields
// The submit style adds a right margin to the submit button
// The snack style sets the width for the snack bar and ensures child elements take full width
// These styles can be used with a styling solution like Material-UI or styled-components
