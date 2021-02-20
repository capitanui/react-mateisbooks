import React, { useEffect } from "react";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Categories from "../components/Categories.js";
import Stock from "../components/Stock.js";
import Filters from "../components/Filters.js";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import FiltersSelected from "../components/FiltersSelected.js";
import { listProducts } from "../actions/productActions";

const Catalog = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
          <Row>
            <Media query="(min-width: 1250px)">
              <Col md={2}>
                <Filters />
              </Col>
            </Media>
            <Col md={10}>
              <Categories />
              <FiltersSelected />
              <Stock />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Catalog;
