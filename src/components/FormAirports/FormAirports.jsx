import axios from "axios";
import { useState, useEffect } from "react";
import style from "./FormAirports.module.css";

export default function FormInput({ onSubmit }) {
  const [formData, setFormaData] = useState({
    departure: "",
    arrival: "",
    passengers: 1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormaData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={style.formContainer}>
      <form /* onSubmit={handleSubmit} */>
        <div className={style.inputContainer}>
          <label htmlFor="departure">Departure:</label>
          <input
            id="daparture"
            name="departure"
            list="airports"
            value={formData.departure}
            onChange={handleInputChange}
            required
            autoComplete="off"
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="arrival">Arrival:</label>
          <input
            id="arrival"
            name="arrival"
            list="airports"
            value={formData.arrival}
            onChange={handleInputChange}
            required
            autoComplete="off"
          />
        </div>

        <div className={style.inputNumberContainer}>
          <label htmlFor="passengers">Passengers:</label>
          <input
            type="number"
            id="passengers"
            name="passengers"
            value={formData.passengers}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Calculate FootPrint</button>
      </form>
    </div>
  );
}
