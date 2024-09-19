import axios from "axios";

export const fetchAirports = async () => {
  const response = await axios.get(
    "https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json"
  );
  return response.data;
};
