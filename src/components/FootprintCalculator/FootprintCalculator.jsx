import style from "./FootprintCalculator.module.css";
import { useFootprint } from "../context/footprintContext";
export default function FootprintCalculator() {
  const { footprint, isLoading, error, flightData } = useFootprint();

  return (
    <div className={style.footprintContainer}>
      {footprint ? (
        <div className={style.resultsContainer}>
          <p className={style.footprint}>
            <span>Footprint:</span>{" "}
            <span>{footprint * flightData.passengers} kg CO2</span>
          </p>
          {flightData.passengers > 1 && (
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
