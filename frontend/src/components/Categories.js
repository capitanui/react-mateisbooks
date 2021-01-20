import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../roundButton.css";

const Categories = ({ filter }) => {
  let category1 = "0+";
  let category2 = "1+";
  let category3 = "3+";

  return (
    <Container>
      <Row>
        <Container className="my-4 h5 text-center">
          Selecteaza varsta si gasesti cele mai frumoase carti pentru copilul
          tau
        </Container>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <Button
            onClick={filter.bind(this, category1)}
            className="round-button"
          >
            3-9 ani
          </Button>
        </Col>
        <Col xs lg="2">
          <Button
            onClick={filter.bind(this, category2)}
            className="round-button"
          >
            1-3 ani
          </Button>
        </Col>
        <Col xs lg="2">
          <Button
            onClick={filter.bind(this, category3)}
            className="round-button"
          >
            3-6 ani
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
