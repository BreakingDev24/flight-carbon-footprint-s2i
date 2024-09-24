import { Container } from "@mui/material";

export default function LayoutContainer({ children }) {
  return (
    <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column" }}>
      {children}
    </Container>
  );
}
