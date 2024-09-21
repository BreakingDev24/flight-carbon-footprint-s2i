import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import FootprintCalculator from "../FootprintCalculator/FootprintCalculator";
import style from "./FootprintForm.module.css";
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
      <div className={style.titleContainer}>
        <h2>Flight FootPrint Calculator</h2>
      </div>

      <form onSubmit={handleFlightDataSubmit}>
        <FormInput
          formData={formData}
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
