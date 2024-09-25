import axios from "axios";

export const fetchCalculateFootprint = async ({ departure, arrival }) => {
  const response = await axios.get(
    "https://api.goclimate.com/v1/flight_footprint",
    {
      auth: {
        username: import.meta.env.VITE_GOCLIMATE_API_KEY,
      },
      params: {
        "segments[0][origin]": departure,
        "segments[0][destination]": arrival,
        cabin_class: "economy",
      },
    }
  );
  return response.data.footprint;
};
