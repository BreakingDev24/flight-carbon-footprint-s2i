import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
          TravelGreen
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
            <MenuItem
              component={NavLink}
              to="/"
              onClick={handleMenuClose}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bolder" : "normal",
              })}
            >
              Home
            </MenuItem>
            <MenuItem
              component={NavLink}
              to="/about"
              onClick={handleMenuClose}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bolder" : "normal",
              })}
            >
              About
            </MenuItem>
            <MenuItem
              component={NavLink}
              to="/faq"
              onClick={handleMenuClose}
              style={({ isActive }) => ({
                fontWeight: isActive ? "bolder" : "normal",
              })}
            >
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
          <MenuItem
            component={NavLink}
            to="/"
            onClick={handleMenuClose}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bolder" : "normal",
            })}
          >
            Home
          </MenuItem>
          <MenuItem
            component={NavLink}
            to="/about"
            onClick={handleMenuClose}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bolder" : "normal",
            })}
          >
            About
          </MenuItem>
          <MenuItem
            component={NavLink}
            to="/Faq"
            onClick={handleMenuClose}
            style={({ isActive }) => ({
              fontWeight: isActive ? "bolder" : "normal",
            })}
          >
            FAQ
          </MenuItem>
        </Menu>
      )}
    </AppBar>
  );
}
