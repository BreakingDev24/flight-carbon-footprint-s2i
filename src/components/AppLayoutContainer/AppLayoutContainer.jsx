import { Container } from "@mui/material";

export default function LayoutContainer({ children }) {
  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {children}
    </Container>
  );
}
