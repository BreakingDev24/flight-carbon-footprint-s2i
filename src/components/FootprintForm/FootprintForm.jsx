import { useState, useEffect } from "react";
import FormInput from "../FormInput/FormInput";
import FootprintCalculator from "../FootprintCalculator/FootprintCalculator";
import style from "./FootprintForm.module.css";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { fetchAirports } from "../api/airportApi";
export default function FootprintForm() {
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    passengers: 1,
  });

  const {
    data: airportData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["airports"],
    queryFn: fetchAirports,
  });

  const [selectedAirport, setSelectedAirport] = useState({
    departure: "",
    arrival: "",
  });

  const [flightData, setFlightData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectedAirport = (e, field) => {
    const value = e.target.value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));

    setSelectedAirport((prevSelected) => ({
      ...prevSelected,
      [field]: value,
    }));
  };
  const handleFlightDataSubmit = (e) => {
    e.preventDefault();
    const departureCode = formData.departure.split(" - ")[0];
    const arrivalCode = formData.arrival.split(" - ")[0];
    setFlightData({
      departure: departureCode,
      arrival: arrivalCode,
      passengers: formData.passengers,
    });
    console.log({
      departure: departureCode,
      arrival: arrivalCode,
      passengers: formData.passengers,
    });
  };
  return (
    <div className={style.formContainer}>
      <form onSubmit={handleFlightDataSubmit}>
        <FormInput
          formData={formData}
          selectedAirport={selectedAirport}
          airportData={airportData}
          handleInputChange={handleInputChange}
          handleSelectedAirport={handleSelectedAirport}
        />
      </form>
      {flightData && (
        <FootprintCalculator
          departureAirport={flightData.departure}
          arrivalAirport={flightData.arrival}
          passengers={flightData.passengers}
        />
      )}
    </div>
  );
}
