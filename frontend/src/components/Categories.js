import React from "react";
import Media from "react-media";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button, Nav, NavDropdown } from "react-bootstrap";
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
          <Media query="(max-width: 800px)">
            <Row className="justify-content-center">
              <Nav className="mr-auto">
                <NavDropdown
                  style={{ fontSize: "140%" }}
                  title="Categoria de vârstă"
                  id="collasible-nav-dropdown"
                >
                  {categories.map((c) => (
                    <NavDropdown.Item
                      onClick={() =>
                        dispatch(updateProductFilters({ category: c }))
                      }
                      variant="success"
                    >
                      {c} ani
                    </NavDropdown.Item>
                  ))}
                  <NavDropdown.Item
                    onClick={() =>
                      dispatch(updateProductFilters({ category: "-" }))
                    }
                    variant="success"
                  >
                    Toate
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Row>
          </Media>
          <Media query="(min-width: 800px)">
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
