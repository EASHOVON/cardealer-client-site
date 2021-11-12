import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.passwordTwo) {
      alert("Your password Did Not Matched");
      return;
    }
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8, textAlign: "center" }} item xs={12} md={6}>
          <Typography variant="h5" gutterBottom component="div">
            Register
          </Typography>

          <form onSubmit={handleLoginSubmit}>
            <TextField
              id="standard-basic"
              label="Your Email"
              variant="standard"
              name="email"
              onChange={handleOnchange}
              type="email"
              sx={{ width: "75%", m: 1 }}
            />
            <TextField
              id="standard-basic"
              label="Your Password"
              variant="standard"
              name="password"
              onChange={handleOnchange}
              type="password"
              sx={{ width: "75%", m: 1 }}
            />
            <TextField
              id="standard-basic"
              label="Re-Enter Your Password"
              variant="standard"
              name="passwordTwo"
              onChange={handleOnchange}
              type="password"
              sx={{ width: "75%", m: 1 }}
            />
            <NavLink style={{ textDecoration: "none" }} to="/login">
              <Button variant="text">Already Registered? Please Login</Button>
            </NavLink>
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained">
              Register
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%" }}
            src="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
<h2>Register</h2>;
