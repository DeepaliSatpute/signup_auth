import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const heading = { fontSize: "2.5rem", fontWeight: "600" };
  const paperStyle = {
    padding: "2rem",
    margin: "100px auto",
    borderRadius: "1rem",
    boxShadow: "10px 10px 10px",
  };
  const row = { display: "flex", flexDirection: "column", marginTop: "1rem" };
  const btnStyle = {
    marginTop: "2rem",
    fontSize: "1.2rem",
    fontWeight: "700",
    backgroundColor: "blue",
    borderRadius: "0.5rem",
    };
    const [email, setEmail] = useState()
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                if (result.data === 'Success') {
                    navigate("/imageupload");
                } else {
                    alert("Login failed")
                }
            })
        .catch(err => console.log(err))
    }

    
    
  return (
    <>
      <div align="center">
        <Paper
          style={paperStyle}
          sx={{
            width: {
              xs: "50vw",
              sm: "50vw",
              md: "40vw",
              lg: "30vw",
              xl: "20vw",
            },
            height: "75vh", // Increased height for confirm password and error message
          }}
        >
          <Typography style={heading}>Login</Typography>
          <form onSubmit={handleLogin}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
              style={row}
              label="Enter Email"
              type="email"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              required
              sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
              style={row}
              label="Enter Password"
              type="password"
            />

            <Button type="submit" variant="contained" style={btnStyle}>
              LOGIN
            </Button>
            <p>
              Don't have an account please <a href="./signup">Signup</a>
            </p>
          </form>
        </Paper>
      </div>
    </>
  );
};
