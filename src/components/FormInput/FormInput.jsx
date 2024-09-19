import axios from "axios";
import { useState, useEffect } from "react";
import style from "./FormInput.module.css";

export default function FormInput(props) {
  const {
    formData,
    selectedAirport,
    airportData,
    handleInputChange,
    handleSelectedAirport,
  } = props;

  return (
    <>
      <div className={style.inputContainer}>
        <label htmlFor="departure">Departure:</label>
        <input
          id="daparture"
          name="departure"
          list="departureAirports"
          value={selectedAirport.departure}
          onChange={(e) => handleInputChange(e)}
          onInput={(e) => handleSelectedAirport(e, "departure")}
          required
          autoComplete="off"
        />

        <datalist id="departureAirports">
          {airportData &&
            airportData.map((airport) => (
              <option
                key={airport.code}
                value={`${airport.code} - ${airport.name} - ${airport.city}(${airport.country})`}
              >
                {airport.code} - {airport.name} - {airport.city}(
                {airport.country})
              </option>
            ))}
        </datalist>
      </div>

      <div className={style.inputContainer}>
        <label htmlFor="arrival">Arrival:</label>
        <input
          id="arrival"
          name="arrival"
          list="arrivalAirports"
          value={selectedAirport.arrival}
          onChange={handleInputChange}
          onInput={(e) => handleSelectedAirport(e, "arrival")}
          required
          autoComplete="off"
        />

        <datalist id="arrivalAirports">
          {airportData &&
            airportData.map((airport) => (
              <option
                key={airport.code}
                value={`${airport.code} - ${airport.name} - ${airport.city}(${airport.country})`}
              >
                {airport.code} - {airport.name} - {airport.city}(
                {airport.country})
              </option>
            ))}
        </datalist>
      </div>

      <div className={style.inputNumberContainer}>
        <label htmlFor="passengers">Passengers:</label>
        <input
          type="number"
          id="passengers"
          name="passengers"
          value={formData.passengers}
          onChange={handleInputChange}
          min={1}
        />
      </div>

      <button type="submit">Calculate FootPrint</button>
    </>
  );
}
