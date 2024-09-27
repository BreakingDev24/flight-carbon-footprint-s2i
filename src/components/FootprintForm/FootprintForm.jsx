import { useState } from "react";
import { Box, useTheme, Button, Typography, Alert } from "@mui/material";
import FormInput from "../FormComponents/FormInput";
import NumberInput from "../FormComponents/NumberInput";
import { useFootprint } from "../context/footprintContext";
import FootprintCalculator from "../FootprintCalculator/FootprintCalculator";

import { useAirportContext } from "../context/airportContext";
export default function FootprintForm() {
  const { handleFlightDataSubmit, footprint, resetFootprint } = useFootprint();
  const { airportData, isLoading, error } = useAirportContext();
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    passengers: 1,
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (name) => (e, newValue) => {
    const value = newValue !== undefined ? newValue : e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      departure: "",
      arrival: "",
      passengers: 1,
    });
    resetFootprint();
    setErrorMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (!formData.departure || !formData.arrival) {
      setErrorMsg("You must select an airport.");
      return;
    }
    const departureCode = formData.departure.split(" - ")[0];
    const arrivalCode = formData.arrival.split(" - ")[0];
    handleFlightDataSubmit({
      departure: departureCode,
      arrival: arrivalCode,
      passengers: formData.passengers,
    });
  };

  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "80%",
        maxWidth: "700px",
        p: 3,
        backgroundColor: theme.palette.secondary.main,
        boxShadow: 6,
        borderRadius: 2,
        display: "grid",
        gap: "20px",
      }}
    >
      <Box className="titleContainer">
        <Typography
          variant="h2"
          sx={{ fontSize: "2rem", textAlign: "center", fontWeight: 500 }}
        >
          Flight FootPrint Calculator
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "grid", gap: "10px" }}
      >
        <FormInput
          id="departure"
          label="Departure"
          value={formData.departure}
          airportData={airportData}
          onChange={handleInputChange("departure")}
        />
        <FormInput
          id="arrival"
          label="Arrival"
          value={formData.arrival}
          airportData={airportData}
          onChange={handleInputChange("arrival")}
        />

        <NumberInput
          label="Passengers"
          value={formData.passengers}
          onChange={handleInputChange("passengers")}
        />

        <Box
          className="buttonContainer"
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Button variant="outlined" type="submit">
            Calculate
          </Button>

          <Button type="button" onClick={handleReset}>
            Reset
          </Button>
        </Box>
      </Box>
      {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
      {footprint && <FootprintCalculator />}
    </Box>
  );
}
