import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
const AddProduct = () => {
  const [producstData, setProductsData] = useState({});
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewData = { ...producstData };
    newReviewData[field] = value;
    setProductsData(newReviewData);
  };
  const handleAdminSubmit = (e) => {
    const name = producstData.name;
    const desc = producstData.desc;
    const img = producstData.img;
    const price = producstData.price;
    const productInfo = { name, desc, img, price };
    fetch("https://frozen-retreat-48334.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
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
        sx={{ textAlign: "center" }}
        variant="h5"
        gutterBottom
        component="div">
        Add A Product
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
              label="Vehicles Name"
              variant="outlined"
              required
              name="name"
              onBlur={handleOnBlur}
              sx={{ width: 1, m: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Vehicles Details"
              variant="outlined"
              required
              name="desc"
              onBlur={handleOnBlur}
              sx={{ width: 1, m: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Vehicle Online Image Link"
              variant="outlined"
              required
              name="img"
              onBlur={handleOnBlur}
              sx={{ width: 1, m: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Price with Dolar Sign"
              variant="outlined"
              required
              name="price"
              onBlur={handleOnBlur}
              sx={{ width: 1, m: 1 }}
            />
            <Box sx={{ textAlign: "center", mt: 1 }}>
              <Button type="submit" variant="contained">
                Add Product
              </Button>
            </Box>
          </form>
          {success && (
            <Alert severity="success">Added Product Successfully</Alert>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProduct;
