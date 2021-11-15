import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Alert } from "@mui/material";
import "./Review.css";
import ReactStars from "react-rating-stars-component";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
  const [reviewData, setReviewData] = useState({});
  const { user } = useAuth();
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
    const custName = user?.displayName;
    const custReview = reviewData.custReview;
    const reviewInfo = {
      imgCar,
      imgCustomer,
      custName,
      custReview,
      ratings: star,
    };
    fetch("https://frozen-retreat-48334.herokuapp.com/reviews", {
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

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}>
      <Typography
        sx={{ fontWeight: 600, textAlign: "center" }}
        variant="h4"
        component="div">
        Please Add A Positive Feedback
      </Typography>
      <Grid container spacing={2}>
        <Grid
          sx={{
            m: "0 auto",
          }}
          item
          xs={12}
          sm={6}
          md={6}>
          <form onSubmit={handleAdminSubmit}>
            <TextField
              id="outlined-basic"
              label="Put Your Vehicles Online Img link"
              variant="outlined"
              required
              name="imgCar"
              onChange={handleOnBlur}
              sx={{ width: 1, m: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Put Your Image Online link"
              variant="outlined"
              required
              name="imgCustomer"
              onChange={handleOnBlur}
              sx={{ width: 1, m: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Put Your Name"
              variant="outlined"
              required
              value={user?.displayName}
              onChange={handleOnBlur}
              sx={{ width: 1, m: 1 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Typography
                sx={{ textAlign: "center" }}
                variant="button"
                display="block"
                gutterBottom>
                Add A Rating Please
              </Typography>
              <Typography
                sx={{ textAlign: "center" }}
                variant="button"
                display="block"
                gutterBottom>
                <ReactStars {...reactStarInfo} />
              </Typography>
            </Box>
            <TextField
              id="outlined-basic"
              label="Tell Me Your Experience With Us"
              variant="outlined"
              required
              name="custReview"
              onChange={handleOnBlur}
              sx={{ width: 1, m: 1 }}
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
