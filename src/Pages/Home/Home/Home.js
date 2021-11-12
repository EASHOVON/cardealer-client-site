import React from "react";
import Banner from "../Banner/Banner";
import Products from "../Products/Products/Products";
import Reviews from "../Reviews/Reviews/Reviews";
import Navigation from "../../Shared/Navigation/Navigation";
import NewCar from "../NewCar/NewCar";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <NewCar></NewCar>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
