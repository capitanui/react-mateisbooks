import React from "react";
import Media from "react-media";
import { useDispatch } from "react-redux";
import { Container, Row, Col, Button, Nav, NavDropdown } from "react-bootstrap";
import "../roundButton.css";
import { listProductFiltered } from "../actions/productActions";

const Categories = ({ products }) => {
  // Get unique categories from all products excluding empty values
  const categories = products
    .map((p) => p.category.split(","))
    .flat()
    .reduce(
      (unique, item) =>
        unique.includes(item) || item === "" ? unique : [...unique, item],
      []
    )
    .sort(
      (elem1, elem2) =>
        parseInt(elem1.substring(0, 2)) - parseInt(elem2.substring(0, 2))
    );

  const dispatch = useDispatch();

  return (
    <Container>
      <Media query="(max-width: 800px)">
        <Row className="justify-content-center">
          <Nav className="mr-auto">
            <NavDropdown
              style={{ fontSize: "130%" }}
              title="Alege categoria de varsta"
              id="collasible-nav-dropdown"
            >
              {categories.map((c) => (
                <NavDropdown.Item
                  onClick={() => dispatch(listProductFiltered(c))}
                  variant="success"
                >
                  {c} ani
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Row>
      </Media>

      <Media query="(min-width: 800px)">
        <Row className="justify-content-center">
          {categories.map((c) => (
            <Col md="1" className="mx-3 my-3">
              <Button
                onClick={() => dispatch(listProductFiltered(c))}
                className="round-button"
              >
                {c} ani
              </Button>
            </Col>
          ))}
        </Row>
      </Media>
    </Container>
  );
};

export default Categories;
