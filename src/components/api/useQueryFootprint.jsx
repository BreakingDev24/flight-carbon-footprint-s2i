import { useQuery } from "@tanstack/react-query";
import { fetchCalculateFootprint } from "./footprintApi";

export function useQueryFootprint(departureAirport, arrivalAirport) {
  return useQuery({
    queryKey: ["footprint", departureAirport, arrivalAirport],
    queryFn: () =>
      fetchCalculateFootprint({
        departure: departureAirport,
        arrival: arrivalAirport,
      }),
    enabled: !!departureAirport && !!arrivalAirport,
  });
}
