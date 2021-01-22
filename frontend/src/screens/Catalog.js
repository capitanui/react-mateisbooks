import React from "react";
import { Row, Col } from "react-bootstrap";
import Categories from "../components/Categories.js";
import Stock from "../components/Stock.js";
import Filters from "../components/Filters.js";

const Catalog = () => {
  return (
    <>
      <Row className="show-grid">
        <Col xs={4} md={3} lg={3}>
          <Filters />
        </Col>
        <Col xs={8} md={9} lg={9}>
          <Categories />
          <Stock />
        </Col>
      </Row>
    </>
  );
};

export default Catalog;
