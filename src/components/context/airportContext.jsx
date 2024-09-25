import { createContext, useContext } from "react";
import { useQueryAirportData } from "../api/useQueryAirportData";

const AirportContext = createContext();

export function AirportProvider({ children }) {
  const { data: airportData, isLoading, error } = useQueryAirportData();

  return (
    <AirportContext.Provider value={{ airportData, isLoading, error }}>
      {children}
    </AirportContext.Provider>
  );
}

export const useAirportContext = () => useContext(AirportContext);
