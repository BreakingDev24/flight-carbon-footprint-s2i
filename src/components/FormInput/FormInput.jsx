import axios from "axios";
import { useState, useEffect } from "react";
import style from "./FormInput.module.css";

export default function FormInput({ onSubmit }) {
  const [formData, setFormaData] = useState({
    departure: "",
    arrival: "",
    passengers: 1,
  });

  const [airportData, setAirportData] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState({
    departure: "",
    arrival: "",
  });
  useEffect(() => {
    const fetchAirports = async () => {
      const url =
        "https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json";
      try {
        const response = await axios.get(url);
        setAirportData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAirports();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormaData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectedAirport = (e, field) => {
    const value = e.target.value;

    const airport = airportData.find(
      (airport) =>
        `${airport.code} - ${airport.name} ${airport.city}(${airport.country})` ===
        value
    );

    if (airport) {
      setFormaData((prevFormData) => ({
        ...prevFormData,
        [field]: airport.code,
      }));
    }

    setSelectedAirport((prevSelected) => ({
      ...prevSelected,
      [field]: value,
    }));
    console.log(selectedAirport);
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
            value={selectedAirport.departure}
            onChange={(e) => handleInputChange(e)}
            onInput={(e) => handleSelectedAirport(e, "departure")}
            required
            autoComplete="off"
          />

          <datalist id="airports">
            {airportData &&
              airportData.map((airport) => (
                <option
                  key={airport.code}
                  value={`${airport.code} - ${airport.name} - ${airport.city} (${airport.country})`}
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
            list="airports"
            value={selectedAirport.arrival}
            onChange={handleInputChange}
            onInput={(e) => handleSelectedAirport(e, "arrival")}
            required
            autoComplete="off"
          />

          <datalist id="airports">
            {airportData &&
              airportData.map((airport) => (
                <option key={airport.code} value={airport.code}>
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
          />
        </div>

        <button type="submit">Calculate FootPrint</button>
      </form>
    </div>
  );
}
