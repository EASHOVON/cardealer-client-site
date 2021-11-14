import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DashboardHome = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography sx={{ fontWeight: 600 }} variant="h4" component="div">
        Welcome to Dashboard
      </Typography>
    </Box>
  );
};

export default DashboardHome;
