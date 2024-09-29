import { useContext, createContext, useState } from "react";

const FlightDataContext = createContext();

export function FlightDataProvider({ children }) {
  const [flightData, setFlightData] = useState({
    departure: "",
    arrival: "",
    passengers: 1,
  });

  const handleFlightDataSubmit = (data) => {
    setFlightData(data);
  };

  const resetFootprint = () => {
    setFlightData({
      departure: "",
      arrival: "",
      passengers: 1,
    });
  };

  return (
    <FlightDataContext.Provider
      value={{
        flightData,
        handleFlightDataSubmit,
        resetFootprint,
      }}
    >
      {children}
    </FlightDataContext.Provider>
  );
}

export const useFlightData = () => useContext(FlightDataContext);
