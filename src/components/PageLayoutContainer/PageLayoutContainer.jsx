import { useEffect, useState } from "react";

import { Container, Box } from "@mui/material";

export default function PageLayoutContainer({ children }) {
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };
    window.onload = updateNavbarHeight();
  }, []);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (footer) {
      setFooterHeight(footer.offsetHeight);
    }
  }, []);
  return (
    <Box
      component="main"
      sx={{
        minHeight: `calc(100vh - ${footerHeight}px)`,
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
