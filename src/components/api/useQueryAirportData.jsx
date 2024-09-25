import { useQuery } from "@tanstack/react-query";
import { fetchAirports } from "./airportApi";

export function useQueryAirportData() {
  return useQuery({
    queryKey: ["airports"],
    queryFn: fetchAirports,
  });
}
