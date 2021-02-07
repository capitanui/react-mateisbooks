import React from "react";
import Divider from "../components/Divider";
import HomeImageCarousel from "../components/HomeImageCarousel";
import HomeImageCategories from "../components/HomeImageCategories";

const Home = () => {
  return (
    <div className="my-3 px-0">
      <Divider />
      <HomeImageCarousel />
      <HomeImageCategories />
    </div>
  );
};

export default Home;
