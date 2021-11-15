import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();
  const handleOnChange = (e) => {
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
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid sx={{ mt: 8, textAlign: "center" }} item xs={12} md={6}>
          <Typography variant="h5" gutterBottom component="div">
            Register
          </Typography>

          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                id="standard-basic"
                label="Your Name"
                variant="standard"
                name="name"
                onChange={handleOnChange}
                sx={{ width: "75%", m: 1 }}
              />
              <TextField
                id="standard-basic"
                label="Your Email"
                variant="standard"
                name="email"
                onChange={handleOnChange}
                type="email"
                sx={{ width: "75%", m: 1 }}
              />
              <TextField
                id="standard-basic"
                label="Your Password"
                variant="standard"
                name="password"
                onChange={handleOnChange}
                type="password"
                sx={{ width: "75%", m: 1 }}
              />
              <TextField
                id="standard-basic"
                label="Re-Enter Your Password"
                variant="standard"
                name="passwordTwo"
                onChange={handleOnChange}
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
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Successfully Registered!</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
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
