import { useContext, createContext, useState } from "react";
import { useQueryFootprint } from "../api/useQueryFootprint";

const FootprintContext = createContext();

export function FootprintProvider({ children }) {
  const [flightData, setFlightData] = useState({
    departure: "",
    arrival: "",
    passengers: 1,
  });
  const {
    data: footprint,
    isLoading,
    error,
  } = useQueryFootprint(flightData.departure, flightData.arrival);

  const handleFlightDataSubmit = (data) => {
    setFlightData(data);
  };

  return (
    <FootprintContext.Provider
      value={{
        footprint,
        isLoading,
        error,
        flightData,
        handleFlightDataSubmit,
      }}
    >
      {children}
    </FootprintContext.Provider>
  );
}

export const useFootprint = () => useContext(FootprintContext);
