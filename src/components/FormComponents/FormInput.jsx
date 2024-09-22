import { TextField, Autocomplete, FormLabel } from "@mui/material";

export default function FormInput(props) {
  const { value, airportData = [], onChange, label, id } = props;

  return (
    <>
      <Autocomplete
        freeSolo
        options={airportData.map(
          (airport) =>
            `${airport.code} - ${airport.name} - ${airport.city}(${airport.country})`
        )}
        renderInput={(params) => (
          <>
            <FormLabel
              component="label"
              htmlFor={id}
              sx={{ marginBottom: "8px", display: "block" }}
            >
              {label}
            </FormLabel>
            <TextField
              {...params}
              id={id}
              placeholder="Select Airport"
              required
            />
          </>
        )}
        value={value}
        onChange={(event, newValue) => onChange(null, newValue)}
      />
    </>
  );
}
