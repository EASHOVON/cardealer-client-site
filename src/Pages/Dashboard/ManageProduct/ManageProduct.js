import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://frozen-retreat-48334.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure, you wanna delete this?");
    if (confirm) {
      const url = `https://frozen-retreat-48334.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = products.filter((order) => order._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 600, textAlign: "center" }}
          variant="h4"
          component="div">
          Manage Your Product
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {products.map((product) => (
            <Grid key={product._id} item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 275, height: 1 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="194"
                    image={product.img}
                    alt="Car"
                  />
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h5"
                    component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2">{product.desc}</Typography>
                  <Typography variant="h6" component="div">
                    Price: {product.price}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pb: 2,
                  }}>
                  <Button
                    onClick={() => handleDelete(product._id)}
                    variant="contained">
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ManageProduct;
