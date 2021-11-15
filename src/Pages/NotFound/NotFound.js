import { Link } from "react-router-dom";
import React from "react";
import Grid from "@mui/material/Grid";
import "./NotFound.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const NotFound = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));
  return (
    <Grid container spacing={2}>
      <Grid className="notFound-img text-center" item xs={12}>
        <img
          src="https://i.ibb.co/HB4RG51/2459468-ai.png"
          alt=""
          style={{ width: "100%" }}
        />
        <Box className="notfound-btn">
          <Link style={{ textDecoration: "none" }} to="/home">
            <ColorButton variant="contained">Back To Home</ColorButton>
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotFound;
