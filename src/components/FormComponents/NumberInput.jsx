import { TextField, FormLabel } from "@mui/material";

export default function NumberInput({ label, value, onChange, id }) {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <TextField
        type="number"
        id={id}
        value={value}
        onChange={onChange}
        fullWidth
        InputProps={{
          inputProps: {
            min: 1,
          },
        }}
      />
    </>
  );
}
