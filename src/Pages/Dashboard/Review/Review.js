import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import "./Review.css";
import ReactStars from "react-rating-stars-component";

const Review = () => {
  const [reviewData, setReviewData] = useState({});
  const [success, setSuccess] = useState(false);
  const [star, setStar] = useState(4.5);

  // Rating
  const reactStarInfo = {
    size: 20,
    count: 5,
    color: "black",
    activeColor: "#ffd700",
    value: star,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setStar(newValue);
    },
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReviewData = { ...reviewData };
    newReviewData[field] = value;
    setReviewData(newReviewData);
  };
  const handleAdminSubmit = (e) => {
    const imgCar = reviewData.imgCar;
    const imgCustomer = reviewData.imgCustomer;
    const custName = reviewData.custName;
    const custReview = reviewData.custReview;
    const reviewInfo = {
      imgCar,
      imgCustomer,
      custName,
      custReview,
      ratings: star,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
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
  console.log(star);
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
        Please add a positive Feedback
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
              label="Put Your Vehicles Online Img link"
              variant="outlined"
              required
              name="imgCar"
              onBlur={handleOnBlur}
              sx={{ width: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Put Your Image Online link"
              variant="outlined"
              required
              name="imgCustomer"
              onBlur={handleOnBlur}
              sx={{ width: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Put Your Name"
              variant="outlined"
              required
              name="custName"
              onBlur={handleOnBlur}
              sx={{ width: 1 }}
            />

            <ReactStars {...reactStarInfo} />
            <TextField
              id="outlined-basic"
              label="Tell Me Your Experience With Us"
              variant="outlined"
              required
              name="custReview"
              onBlur={handleOnBlur}
              sx={{ width: 1 }}
            />
            <Box sx={{ textAlign: "center", mt: 1 }}>
              <Button type="submit" variant="contained">
                Add Review
              </Button>
            </Box>
          </form>
          {success && (
            <Alert severity="success">Review Added Successfully</Alert>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Review;
