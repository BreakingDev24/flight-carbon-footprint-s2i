import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const theme = useTheme();
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar className="navbar" position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        {isMobile ? (
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <>
            <MenuItem component={Link} to="/" onClick={handleMenuClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
              About
            </MenuItem>
            <MenuItem component={Link} to="/faq" onClick={handleMenuClose}>
              FAQ
            </MenuItem>
          </>
        )}
      </Toolbar>
      {isMobile && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/" onClick={handleMenuClose}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
            About
          </MenuItem>
          <MenuItem component={Link} to="/Faq" onClick={handleMenuClose}>
            FAQ
          </MenuItem>
        </Menu>
      )}
    </AppBar>
  );
}
