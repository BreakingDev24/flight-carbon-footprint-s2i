import { useQuery } from "@tanstack/react-query";
import { fetchCalculateFootprint } from "./footprintApi";
import { useFlightData } from "../context/flightDataContext";

export function useQueryFootprint() {
  const { flightData } = useFlightData();
  const { departure, arrival } = flightData;
  return useQuery({
    queryKey: ["footprint", departure, arrival],
    queryFn: () =>
      fetchCalculateFootprint({
        departure,
        arrival,
      }),
    enabled: !!departure && !!arrival,
  });
}
