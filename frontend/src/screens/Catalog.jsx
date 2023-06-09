import React, { useEffect } from "react";
import Media from "react-media";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Categories from "../components/Categories";
import Stock from "../components/Stock";
import Filters from "../components/Filters";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FiltersSelected from "../components/FiltersSelected";
import FiltersPopover from "../components/FiltersPopover";
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
              <Col md={3}>
                <Filters />
              </Col>
            </Media>
            <Col md={9}>
              <Categories />
              <Media query="(max-width: 1250px)">
                <Col md={3} className="my-3">
                  <FiltersPopover />
                </Col>
              </Media>
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
