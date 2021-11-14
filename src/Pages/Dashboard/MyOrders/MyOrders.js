import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    const url = `https://frozen-retreat-48334.herokuapp.com/orders/${user?.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure, you wanna delete this?");
    if (confirm) {
      const url = `https://frozen-retreat-48334.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = myOrders.filter((order) => order._id !== id);
            setMyOrders(remaining);
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
          My Orders
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {myOrders.map((myOrder) => (
            <Grid key={myOrder._id} item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="194"
                    image={myOrder?.productImg}
                    alt="Car"
                  />
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h5"
                    component="div">
                    {myOrder?.productName}
                  </Typography>
                  <Typography variant="body2">
                    {myOrder?.description}
                  </Typography>
                  <Typography variant="h6" component="div">
                    Price: {myOrder?.price}
                  </Typography>
                  <Typography variant="h6" component="div">
                    Status: {myOrder?.status}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pb: 2,
                  }}>
                  <Button
                    onClick={() => handleDelete(myOrder._id)}
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

export default MyOrders;
