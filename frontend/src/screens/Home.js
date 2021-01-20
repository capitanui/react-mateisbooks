import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product.js";
import axios from "axios";

const Home = () => {
  // useState hook to use state with functional components
  const [products, setProducts] = useState([]);

  // useEffect hook Runs when the component loads
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Container className="my-5">Home</Container>

      <Row className="py-2">
        {products.map((product) => (
          <Col key={product.code} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
