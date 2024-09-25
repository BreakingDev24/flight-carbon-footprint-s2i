import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { FootprintProvider } from "./components/context/footprintContext.jsx";
import { AirportProvider } from "./components/context/airportContext.jsx";

import App from "./App.jsx";
import "./index.css";
import theme from "./components/theme/theme.jsx";
const queryClient = new QueryClient();
// const theme = createTheme(); // Crea un tema di default

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AirportProvider>
        <FootprintProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </FootprintProvider>
      </AirportProvider>
    </QueryClientProvider>
  </StrictMode>
);
