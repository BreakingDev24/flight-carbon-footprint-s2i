import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#ecf1fc",
    },
    primary: {
      main: "#525660",
      light: "#8d919c",
      dark: "#343841",
      contrastText: "#d5d2e2",
    },
    secondary: {
      main: "#e0dbd0",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2rem",
    },
  },
});

export default theme;
