import { useEffect, useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const ManageAllOrders = () => {
  const [manageAllOrders, setManageAllOrders] = useState([]);
  const [modifyCount, setModifyCount] = useState(0);

  useEffect(() => {
    fetch("https://frozen-retreat-48334.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setManageAllOrders(data));
  }, [manageAllOrders]);

  const handleStatus = (id) => {
    const update = { status: "SHIFT" };
    const url = `https://frozen-retreat-48334.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
          setModifyCount(modifyCount + 1);
        }
      });
  };

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
            const remaining = manageAllOrders.filter(
              (order) => order._id !== id
            );
            setManageAllOrders(remaining);
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
          Manage All Orders
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>
          {manageAllOrders.map((manageAllOrder) => (
            <Grid key={manageAllOrder._id} item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="194"
                    image={manageAllOrder?.productImg}
                    alt="Car"
                  />
                  <Typography
                    sx={{ textAlign: "center" }}
                    variant="h5"
                    component="div">
                    {manageAllOrder?.productName}
                  </Typography>
                  <Typography variant="body2">
                    {manageAllOrder?.description}
                  </Typography>
                  <Typography variant="h6" component="div">
                    Price: {manageAllOrder?.price}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    pb: 2,
                  }}>
                  <Button
                    onClick={() => handleDelete(manageAllOrder._id)}
                    variant="contained">
                    Delete
                  </Button>

                  <Button
                    onClick={() => handleStatus(manageAllOrder._id)}
                    variant="contained">
                    {manageAllOrder?.status}
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

export default ManageAllOrders;
