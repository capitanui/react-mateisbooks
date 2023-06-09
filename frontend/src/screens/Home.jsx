import React from "react";
import Divider from "../components/Divider";
import HomeImageCarousel from "../components/HomeImageCarousel";
import HomeImageCategories from "../components/HomeImageCategories";
import HomeImageIcons from "../components/HomeImageIcons";

const Home = () => {
  return (
    <div className="my-3 px-0">
      <Divider />
      <HomeImageCarousel />
      <HomeImageIcons />
      <HomeImageCategories />
    </div>
  );
};

export default Home;
