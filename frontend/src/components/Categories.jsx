import React from "react";
import Media from "react-media";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Divider from "./Divider";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { updateProductFilters } from "../actions/productActions";
import "../roundButton.css";

const Categories = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  let { loading, error, categories } = productList;

  if (categories == null) {
    categories = [];
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container style={{ zIndex: "-1" }}>
          <Media query="(max-width: 1000px)">
            <div class="my-5">
              <Divider />
            </div>
          </Media>
          <Media query="(min-width: 1000px)">
            <Row className="justify-content-center">
              {categories.map((c) => (
                <Col md="1" className="mx-3 my-3">
                  <Button
                    onClick={() =>
                      dispatch(updateProductFilters({ category: c }))
                    }
                    className="round-button"
                  >
                    {c} ani
                  </Button>
                </Col>
              ))}
              <Col md="1" className="mx-3 my-3">
                <Button
                  onClick={() =>
                    dispatch(updateProductFilters({ category: "-" }))
                  }
                  className="round-button"
                >
                  Toate
                </Button>
              </Col>
            </Row>
          </Media>
          <hr></hr>
        </Container>
      )}
    </>
  );
};

export default Categories;
