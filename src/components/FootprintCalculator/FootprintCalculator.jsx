import { useState, useEffect } from "react";
import axios from "axios";
import style from "./FootprintCalculator.module.css";
import { useQuery } from "@tanstack/react-query";
import { calculateFootprint } from "../api/footprintApi";

export default function FootprintCalculator({
  departureAirport,
  arrivalAirport,
  passengers,
}) {
  const {
    data: footprint,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["footprint", departureAirport, arrivalAirport],
    queryFn: () =>
      calculateFootprint({
        departure: departureAirport,
        arrival: arrivalAirport,
      }),
    enabled: !!departureAirport && !!arrivalAirport,
  });

  return (
    <div className={style.footprintContainer}>
      {footprint ? (
        <div className={style.resultsContainer}>
          <p className={style.footprint}>
            <span>Footprint:</span> <span>{footprint * passengers} kg CO2</span>
          </p>
          {passengers > 1 && (
            <p className={style.footprintPassengers}>
              Footprints per passenger: {footprint} kg CO2
            </p>
          )}
        </div>
      ) : (
        <p>No Results Available</p>
      )}
    </div>
  );
}
