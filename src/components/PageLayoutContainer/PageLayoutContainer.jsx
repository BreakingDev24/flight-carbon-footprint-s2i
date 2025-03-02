import { useEffect, useState } from "react";

import { Container, Box } from "@mui/material";

export default function PageLayoutContainer({ children }) {
  const [navbarHeight, setNavbarHeight] = useState(0);
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };
    updateNavbarHeight();
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        paddingTop: `${navbarHeight}px`,
        paddingBottom: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
}
