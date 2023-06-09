import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

import "../styles/selectedfilters.css";

const Stock = () => {
  const productListFiltered = useSelector((state) => state.productListFiltered);
  const productFilters = useSelector((state) => state.productFilters);

  const { loading, error, products } = productListFiltered;

  const { category } = productFilters;

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Row className="justify-content-right mx-1 my-3">
            <div
              style={{
                fontFamily: "latoblack",
                fontSize: "14px",
                textTransform: "none",
              }}
            >
              {category === "-" ? "" : category + " ani"}
            </div>
          </Row>
          <Row className="justify-content-right mx-1">
            <small className="font-weight-light">
              {products.length} produse
            </small>
          </Row>

          <Row className="py-2">
            {products.map((product) => (
              <Col
                key={product.code}
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={4}
                className="mb-4"
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Stock;
