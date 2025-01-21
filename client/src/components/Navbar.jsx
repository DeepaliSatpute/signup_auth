import React from "react";
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";


export const Navbar = () => {
  const button = {
    marginRight: "20px",
    fontSize: "1.2rem",
    fontWeight: "700",
    padding: "0.3rem 1.4rem",
  };
  return (
    <>
      <AppBar sx={{ bgcolor: "#333" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Login Form
          </Typography>

          <Button
            style={button}
            color="error"
            variant="contained"
            to="/signup"
            component={Link}
          >
            Signup
          </Button>
          <Button
            style={button}
            color="error"
            variant="contained"
            to="/login"
            component={Link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
