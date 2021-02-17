import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "../styles/homeimagecategories.css";

const HomeImageCategories = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 996px)" });

  return (
    <div
      class="container fluid pl-4 py-4 pr-4"
      style={{ background: "#6fda9f" }}
    >
      <Row>
        <Col md={4}>
          <div class="hovercategories">
            <figure>
              {isTabletOrMobile ? (
                <Image
                  src="../images/homepage/homeimagecategories_1_mob.png"
                  fluid
                  className="my-2"
                />
              ) : (
                <Image
                  src="../images/homepage/homeimagecategories_1.png"
                  fluid
                  className="my-2"
                />
              )}
              <div class="category-button">
                <a href="/catalog">HOME SCHOOLING</a>
              </div>
            </figure>
          </div>
        </Col>
        <Col md={4}>
          <div class="hovercategories">
            <figure>
              <Image
                src="../images/homepage/homeimagecategories_2.png"
                fluid
                className="my-2 mx-auto"
              />
              <div class="category-button">
                <a href="/catalog">SUNETE</a>
              </div>
            </figure>
          </div>
          <div class="hovercategories">
            <figure>
              <Image
                src="../images/homepage/homeimagecategories_3.png"
                fluid
                className="my-4 mx-auto"
              />
              <div class="category-button">
                <a href="/catalog">FICTIUNE</a>
              </div>
            </figure>
          </div>
        </Col>
        <Col md={4}>
          <div class="hovercategories">
            <figure>
              <Image
                src="../images/homepage/homeimagecategories_4.png"
                fluid
                className="my-2"
              />
              <div class="category-button">
                <a href="/catalog">TEXTURI</a>
              </div>
            </figure>
          </div>
          <div class="hovercategories">
            <figure>
              <Image
                src="../images/homepage/homeimagecategories_5.png"
                fluid
                className="my-4"
              />
              <div class="category-button">
                <a href="/catalog">ACTIVITÃTI</a>
              </div>
            </figure>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeImageCategories;
