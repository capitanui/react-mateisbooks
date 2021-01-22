import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { listProductFiltered } from "../actions/productActions";

const Stock = () => {
  const dispatch = useDispatch();

  const productFiltered = useSelector((state) => state.productFiltered);

  const { loading, error, products, selectedCategory } = productFiltered;

  // useEffect hook Runs when the component loads - get all products
  useEffect(() => {
    dispatch(listProductFiltered(".*"));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row className="justify-content-right mx-1">
            <div
              style={{
                fontFamily: "latoblack",
                fontSize: "14px",
                textTransform: "none",
              }}
            >
              {selectedCategory === ".*" ? "" : selectedCategory + " ani"}
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
                sm={12}
                md={6}
                lg={4}
                xl={4}
                className="mb-4"
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Stock;
