import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import FootprintCalculator from "../FootprintCalculator/FootprintCalculator";
import style from "./FootprintForm.module.css";

export default function FootprintForm() {
  const [airportCode, setAirportCode] = useState({
    departure: "",
    arrival: "",
    passengers: 1,
  });

  const [flightData, setFlightData] = useState(null);

  const handleFlightDataSubmit = (e) => {
    e.preventDefault();
    setFlightData({
      departure: airportCode.departure,
      arrival: airportCode.arrival,
      passengers: airportCode.passengers,
    });
    // console.log(formData.departure);
  };
  return (
    <div className={style.formContainer}>
      <form onSubmit={handleFlightDataSubmit}>
        <FormInput airportCode={airportCode} setAirportCode={setAirportCode} />
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
