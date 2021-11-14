import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";
import ReactStars from "react-rating-stars-component";

const Review = (props) => {
  const { imgCar, imgCustomer, custName, custReview, ratings } = props.review;
  const reactStarInfo = {
    value: ratings,
    edit: false,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ minWidth: 275, height: 1 }}>
        <CardContent>
          <CardMedia component="img" height="194" image={imgCar} alt="Car" />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <CardMedia
              component="img"
              image={imgCustomer}
              alt="Car"
              sx={{
                borderRadius: "50%",
                width: "25%",
                marginTop: -5,
              }}
            />
            <Typography
              sx={{ textAlign: "center" }}
              variant="h5"
              component="div">
              {custName}
            </Typography>
            <Typography variant="h6" component="div">
              Review
            </Typography>
            <Typography variant="h6" component="div">
              Ratings: <ReactStars {...reactStarInfo} />
            </Typography>

            <Typography sx={{ textAlign: "center" }} variant="body2">
              {custReview}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Review;
