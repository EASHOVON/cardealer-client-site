import React from "react";

import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const Product = (props) => {
  const { admin } = useAuth();
  const { name, img, desc, price, _id } = props.product;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ minWidth: 275, height: 1 }}>
        <CardContent>
          <CardMedia component="img" height="194" image={img} alt="Car" />
          <Typography sx={{ textAlign: "center" }} variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">{desc}</Typography>
          <Typography variant="h6" component="div">
            Price: {price}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 2,
          }}>
          {!admin ? (
            <Link to={`/purchase/${_id}`}>
              <Button variant="contained">Purchase</Button>
            </Link>
          ) : (
            <Button disabled>Purchase</Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
