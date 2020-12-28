import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Categories = ({ filter }) => {
  let category = "0+";
  return (
    <Container className="text-center mt-auto">
      <Row>
        <Col>
          <Button onClick={filter.bind(this, category)} className="btn-success">
            0-3 ani
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
