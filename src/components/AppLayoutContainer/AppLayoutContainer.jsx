import { Container } from "@mui/material";

export default function LayoutContainer({ children }) {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {children}
    </Container>
  );
}
