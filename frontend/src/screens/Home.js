import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product.js";

const Catalog = () => {
  return (
    <>
      <Container className="my-5">Home</Container>

      <Row className="py-2">
        {products.map((product) => (
          <Col key={product._id} sm={11} md={5} lg={3} xl={2} className="mb-4">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Catalog;
