import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

const Purchase = () => {
  const { productId } = useParams();
  const { user } = useAuth();
  const [details, setDetails] = useState([]);
  const [detail, setDetail] = useState({});

  const [productData, setproductData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...productData };
    newProductData[field] = value;
    setproductData(newProductData);
  };
  const handleOrderSubmit = (e) => {
    const orderId = productId;
    const productName = detail?.name;
    const productImg = detail?.img;
    const description = detail?.desc;
    const price = detail?.price;
    const customerName = user.displayName;
    const customerEmail = user.email;
    const customerAddress = productData.address;
    const customerMobile = productData.mobile;
    const orderInfo = {
      orderId,
      productName,
      productImg,
      description,
      price,
      customerName,
      customerEmail,
      customerAddress,
      customerMobile,
      status: "Pending",
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    });
    alert("Order has beed placed");
    e.target.reset();
    e.preventDefault();
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const foundDetails = details.find((detail) => detail._id === productId);
    setDetail(foundDetails);
  }, [details, productId]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 600, m: 5, textAlign: "center" }}
          variant="h4"
          component="div">
          Complete Your Order
        </Typography>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center" }}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <CardMedia
                  component="img"
                  height="194"
                  image={detail?.img}
                  alt="Car"
                />
                <Typography
                  sx={{ textAlign: "center" }}
                  variant="h5"
                  component="div">
                  {detail?.name}
                </Typography>
                <Typography variant="body2">{detail?.desc}</Typography>
                <Typography variant="h6" component="div">
                  Price: {detail?.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ textAlign: "center" }}>
        <form onSubmit={handleOrderSubmit}>
          <TextField
            id="standard-basic"
            label="Your Name"
            variant="standard"
            name="name"
            value={user.displayName || ""}
            onBlur={handleOnBlur}
            sx={{ width: "50%", m: 1 }}
          />
          <TextField
            id="standard-basic"
            label="Your Email"
            variant="standard"
            value={user.email || ""}
            name="email"
            onBlur={handleOnBlur}
            type="email"
            sx={{ width: "50%", m: 1 }}
          />
          <TextField
            id="standard-multiline-static"
            label="Your Address"
            multiline
            required
            onBlur={handleOnBlur}
            name="address"
            sx={{ width: "50%", m: 1 }}
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Mobile Number"
            variant="standard"
            name="mobile"
            required
            onBlur={handleOnBlur}
            type="number"
            sx={{ width: "50%", m: 1 }}
          />
          <Button sx={{ width: "50%", m: 1 }} type="submit" variant="contained">
            Place Order
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Purchase;
