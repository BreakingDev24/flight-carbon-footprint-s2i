import { useEffect, useState } from "react";

import style from "./PageLayoutContainer.module.css";
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
    window.onload = updateNavbarHeight();
  }, []);
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        marginTop: `${navbarHeight}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      {children}
    </Box>
  );
}
