import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState(""); // To handle form submission errors
  const navigate = useNavigate();

  // Password validation regex: At least one uppercase, one number, one special character
  const passwordValidationRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSignup = async (e) => {
    e.preventDefault();

    // Clear any previous form errors
    setFormError("");
    setPasswordError("");

    // Validate password
    if (!passwordValidationRegex.test(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one number, and one special character."
      );
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/signup", {
        name,
        email,
        password,
      });

      // Check for successful response
      if (response.status === 201) {
        console.log("User created successfully!");
        navigate("/login"); // Redirect to login after successful signup
      } else {
        console.log("Unexpected response: ", response);
      }
    } catch (err) {
      // Handle errors and display feedback
      if (err.response) {
        console.error("Error response:", err.response);
        if (err.response.status === 400) {
          setFormError("Email already exists. Please use a different email.");
        } else {
          setFormError(
            `Signup failed: ${err.response.status} - ${err.response.statusText}`
          );
        }
      } else {
        console.error("Error:", err);
        setFormError("Something went wrong. Please try again later.");
      }
    }
  };

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
          <Typography style={heading}>Signup</Typography>
          <form onSubmit={handleSignup}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
              sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
              style={row}
              label="Enter Name"
              type="text"
            />
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
            <TextField
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirmPassword"
              required
              sx={{ label: { fontWeight: "700", fontSize: "1.3rem" } }}
              style={row}
              label="Confirm Password"
              type="password"
            />

            {passwordError && (
              <Typography color="error" style={{ marginTop: "1rem" }}>
                {passwordError}
              </Typography>
            )}

            {formError && (
              <Typography color="error" style={{ marginTop: "1rem" }}>
                {formError}
              </Typography>
            )}

            <Button type="submit" variant="contained" style={btnStyle}>
              SIGNUP
            </Button>
           <p>Already have an account  <a href="./login">Login</a></p>
          </form>
        </Paper>
      </div>
    </>
  );
};
