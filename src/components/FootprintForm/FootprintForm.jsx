import { useState, useEffect } from "react";
import FormInput from "../FormInput/FormInput";
import FootprintCalculator from "../FootprintCalculator/FootprintCalculator";
import style from "./FootprintForm.module.css";
import axios from "axios";
export default function FootprintForm() {
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    passengers: 1,
  });

  // const [apiData, setApiData] = useState({
  //   departure: "",
  //   arrival: "",
  //   passengers: 1,
  // });

  const [airportData, setAirportData] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState({
    departure: "",
    arrival: "",
  });

  const [flightData, setFlightData] = useState(null);

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
      // console.log(airportData);
    };

    fetchAirports();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectedAirport = (e, field) => {
    const value = e.target.value;
    // const airport = airportData.find(
    //   (airport) =>
    //     `${airport.code} - ${airport.name} - ${airport.city}(${airport.country})` ===
    //     value
    // );
    // const airportCode = value.split(" - ")[0];
    // console.log(field);
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
