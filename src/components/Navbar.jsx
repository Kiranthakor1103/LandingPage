import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const menuItems = ["Home", "Google Ads Services", "Google Ads Resources", "About Me", "Contact"];

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        zIndex: 1100,
        backgroundColor: "white",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 3 }}>
        {/* Logo */}
        <Box>
          <img src="images/Logo_Bob-Meijer_RGB.png" alt="Logo" style={{ height: 64 }} />
        </Box>

        {/* Menu Button */}
        <IconButton edge="end" onClick={() => setOpen(true)} sx={{ color: "black", display: { md: "none" } }}>
          <MenuIcon />
        </IconButton>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
  <Button
    sx={{
      color: "#080d2a",
      textTransform: "none",
      "&:hover": {
        color: "black",
      },
    }}
  >
    Home
  </Button>
  <Button
    sx={{
      color: "#080d2a",
      textTransform: "none",
      display: "flex",
      alignItems: "center",
      gap: 0.5,
      "&:hover": {
        color: "black",
      },
    }}
  >
    Google Ads Services
    <KeyboardArrowDownIcon />
  </Button>
  <Button
    sx={{
      color: "#080d2a",

      textTransform: "none",
      "&:hover": {
        color: "black",
      },
    }}
  >
    Google Ads Resources
  </Button>
  <Button
    sx={{
      color: "#080d2a",
      textTransform: "none",
      "&:hover": {
        color: "black",
      },
    }}
  >
    About Me
  </Button>
  <Button
    sx={{
      color: "#080d2a",
      textTransform: "none",
      "&:hover": {
        color: "black",
      },
    }}
  >
    Contact
  </Button>
</Box>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <List sx={{ width: 240 }}>
            {menuItems.map((text) => (
              <ListItem button key={text} onClick={() => setOpen(false)}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
