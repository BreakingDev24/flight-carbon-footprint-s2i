import { useState } from "react";
import { Box, useTheme } from "@mui/material";
import FormInput from "../FormComponents/FormInput";
import NumberInput from "../FormComponents/NumberInput";
import { useFootprint } from "../context/footprintContext";
import FootprintCalculator from "../FootprintCalculator/FootprintCalculator";
import style from "./FootprintForm.module.css";

import { useAirportContext } from "../context/airportContext";
export default function FootprintForm() {
  const { handleFlightDataSubmit, footprint, isFpLoading, fpError } =
    useFootprint();
  const { airportData, isLoading, error } = useAirportContext();
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    passengers: 1,
  });

  const handleInputChange = (name) => (e, newValue) => {
    const value = newValue !== undefined ? newValue : e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        p: 3,
        backgroundColor: theme.palette.secondary.main,
        boxShadow: 6,
        borderRadius: 2,
      }}
    >
      <div className={style.titleContainer}>
        <h2>Flight FootPrint Calculator</h2>
      </div>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Calculate</button>
      </form>
      {footprint && <FootprintCalculator />}
    </Box>
  );
}
