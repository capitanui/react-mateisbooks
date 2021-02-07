import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "../styles/homeimagecategories.css";

const HomeImageCategories = () => {
  return (
    <div
      class="d-flex align-items-top justify-content-start  container"
      style={{ background: "#6fda9f" }}
    >
      <Row className="ml-0">
        <Col md={4}>
          <div class="hovercategories">
            <figure>
              <Image
                width="1000vw"
                src="../images/homepage/homeimagecategories_1.jpg"
                fluid
                className="my-2"
              />
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
                width="800vw"
                src="../images/homepage/homeimagecategories_2.jpg"
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
                width="470vw"
                src="../images/homepage/homeimagecategories_3.jpg"
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
                width="408vw"
                src="../images/homepage/homeimagecategories_4.jpg"
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
                width="370vw"
                src="../images/homepage/homeimagecategories_5.jpg"
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
