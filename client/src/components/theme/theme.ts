import { createTheme } from "@mui/material/styles";
import "@fontsource/noto-serif/700.css";

export const theme = createTheme({
  typography: {
    // fontFamily: "Noto Serif, Spartan, sans-serif, playfair display",
    h1: {
      fontFamily: "Noto Serif",
      fontSize: "4rem",
      fontWeight: "700",
      letterSpacing: "0.96px",
    },
    h2: {
      fontFamily: "Noto Serif",
      fontSize: "3rem",
      fontWeight: "700px",
      letterSpacing: "0.96px",
    },
    h6: {
      fontFamily: "sans-serif",
      fontSize: "1.8rem",
      fontWeight: "700px",
      letterSpacing: "0.96px",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: "300px",
      letterSpacing: "0.96px",
    },
    button: {
      fontFamily: "sans-serif",
      fontSize: "1.5rem",
      fontWeight: "700px",
    },
  },
});
