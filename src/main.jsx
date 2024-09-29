import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { FlightDataProvider } from "./components/context/flightDataContext.jsx";
import { AirportProvider } from "./components/context/airportContext.jsx";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import theme from "./components/theme/theme.jsx";
import App from "./App.jsx";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AirportProvider>
        <FlightDataProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </ThemeProvider>
        </FlightDataProvider>
      </AirportProvider>
    </QueryClientProvider>
  </StrictMode>
);
