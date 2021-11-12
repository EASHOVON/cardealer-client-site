import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

const NewCar = () => {
  return (
    <Box sx={{ flexGrow: 1, my: 10 }}>
      <Grid container sx={{ backgroundColor: "#000" }}>
        <Grid item xs={12} sm={12} md={6}>
          <img
            src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/index-sub-content/02-images/z06-hp-super-promo-tile.jpg?imwidth=600"
            alt=""
            className="img-fluid"
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            px: 6,
            py: 6,
          }}>
          <Typography sx={{ mb: 0 }} variant="h5" gutterBottom component="div">
            ALL-NEW 2023
          </Typography>
          <Typography variant="h3" gutterBottom component="div">
            CORVETTE Z06
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            variant="button"
            display="block"
            gutterBottom>
            With the growl of its 670 horsepower flat-plane V8, the all-new
            Corvette Z06 is here to put the world on notice.
          </Typography>
          <Typography
            sx={{ mb: 4 }}
            variant="subtitle2"
            gutterBottom
            component="div">
            Preproduction model shown. Actual production model may vary.
            Available Summer 2022.
          </Typography>
          <Button variant="contained">Explore Z06</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewCar;
