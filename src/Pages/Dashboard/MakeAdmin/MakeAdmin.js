import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://frozen-retreat-48334.herokuapp.com/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          e.target.reset();
        }
      });
    e.preventDefault();
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}>
      <Typography
        sx={{ fontWeight: 600, textAlign: "center", mb: 1 }}
        variant="h4"
        component="div">
        Make An Admin
      </Typography>
      <Grid container spacing={2}>
        <Grid
          sx={{
            m: "0 auto",
          }}
          item
          xs={6}
          sm={6}
          md={6}>
          <form onSubmit={handleAdminSubmit}>
            <TextField
              id="outlined-basic"
              label="Provide Email"
              variant="outlined"
              type="email"
              onBlur={handleOnBlur}
              sx={{ width: 1 }}
            />
            <Box sx={{ textAlign: "center", mt: 1 }}>
              <Button type="submit" variant="contained">
                Make Admin
              </Button>
            </Box>
          </form>
          {success && <Alert severity="success">Made Admin Successfully</Alert>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MakeAdmin;
