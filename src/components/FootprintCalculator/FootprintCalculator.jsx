import { useState, useEffect } from "react";
import axios from "axios";
import style from "./FootprintCalculator.module.css";
export default function FootprintCalculator({
  departureAirport,
  arrivalAirport,
  passengers,
}) {
  const [footprint, setFootprint] = useState(null);

  useEffect(() => {
    const fetchFootrpint = async () => {
      try {
        const url = `https://api.goclimate.com/v1/flight_footprint`;
        const response = await axios.get(url, {
          auth: {
            username: import.meta.env.VITE_GOCLIMATE_API_KEY,
          },
          params: {
            "segments[0][origin]": departureAirport,
            "segments[0][destination]": arrivalAirport,
            cabin_class: "economy",
          },
        });
        setFootprint(response.data.footprint);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFootrpint();
  }, [departureAirport, arrivalAirport]);

  return (
    <div className={style.footprintContainer}>
      {footprint ? (
        <div className={style.resultsContainer}>
          <h2>Footprint:</h2>
          <p>{footprint * passengers} kg CO2</p>
          {passengers > 1 && (
            <p>Footprints per passenger: {footprint} kg CO2</p>
          )}
        </div>
      ) : (
        <p>No Results Available</p>
      )}
    </div>
  );
}
