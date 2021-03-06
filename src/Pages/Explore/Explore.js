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
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Explore = () => {
  const { admin } = useAuth();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://frozen-retreat-48334.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography
          sx={{ fontWeight: 600, m: 5, textAlign: "center" }}
          variant="h4"
          component="div">
          All Featured Vehicles
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
                  {!admin ? (
                    <Link to={`/purchase/${product._id}`}>
                      <Button variant="contained">Purchase</Button>
                    </Link>
                  ) : (
                    <Button disabled>Purchase</Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Explore;
