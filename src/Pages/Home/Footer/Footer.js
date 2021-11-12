import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#3a86ff", mt: 10, py: 6 }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img
              src="https://q4p3y7t4.rocketcdn.me/elementor/wp-content/uploads/sites/3/2021/08/logo.png"
              alt=""
            />
          </Box>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12}>
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="subtitle2"
                  gutterBottom
                  component="div">
                  Your one stop destination for used cars for sale in Dubai for
                  all the leading luxury used car brands. We are the largest
                  used car showroom in Dubai with customers in Abu Dhabi and all
                  over UAE. We offer special deals on used cars and have a large
                  collection of used cars for sale. Unlike other used car
                  dealers, we understand that in the used cars segment how
                  important the condition of the used car is. All the used cars
                  that we sell are thoroughly inspected and verified.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#1565c0", m: 0, py: 2 }}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            sx={{ textAlign: "center" }}
            variant="h6"
            gutterBottom
            component="div">
            &copy; {new Date().getFullYear()} Copyright: All Right Reserved
            CarDealer
          </Typography>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
