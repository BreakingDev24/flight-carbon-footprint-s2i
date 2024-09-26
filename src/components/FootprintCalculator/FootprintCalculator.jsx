import { useFootprint } from "../context/footprintContext";
import { Box, Typography } from "@mui/material";
export default function FootprintCalculator() {
  const { footprint, isLoading, error, flightData } = useFootprint();

  return (
    <Box className="footprintContainer">
      {footprint ? (
        <Box className="resultsContainer">
          <Typography className="footprintResults" sx={{ fontSize: "1.5rem" }}>
            <span>Footprint:</span>{" "}
            <span>{footprint * flightData.passengers} kg CO2</span>
          </Typography>
          {flightData.passengers > 1 && (
            <Typography className="footprintPassengers">
              Footprints per passenger: {footprint} kg CO2
            </Typography>
          )}
        </Box>
      ) : (
        <Typography>No Results Available</Typography>
      )}
    </Box>
  );
}
