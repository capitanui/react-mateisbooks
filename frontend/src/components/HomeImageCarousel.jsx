import React from "react";
import { Carousel } from "react-bootstrap";

const HomeImageCarousel = () => {
  return (
    <div
      class="container fluid pl-4 py-4 pr-4"
      style={{ background: "#6fda9f" }}
    >
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="fluid w-100"
            src="../images/homepage/homeimagecarousel_1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="fluid w-100"
            src="../images/homepage/homeimagecarousel_2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="fluid w-100"
            src="../images/homepage/homeimagecarousel_3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeImageCarousel;
