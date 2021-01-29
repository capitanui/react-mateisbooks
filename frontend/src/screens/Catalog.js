import React from "react";
import Media from "react-media";
import { Row, Col, Container } from "react-bootstrap";
import Categories from "../components/Categories.js";
import Stock from "../components/Stock.js";
import Filters from "../components/Filters.js";

const Catalog = () => {
  return (
    <Container className="px-0">
      <Row>
        <Media query="(min-width: 1250px)">
          <Col md={2}>
            <Filters />
          </Col>
        </Media>
        <Col md={10}>
          <Categories />
          <Stock />
        </Col>
      </Row>
    </Container>
  );
};

export default Catalog;
