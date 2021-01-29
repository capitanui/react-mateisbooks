import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CategoriesDropdown from "./CategoriesDropdown";

const Divider = () => {
  const style = {
    rectangleBottom: {
      width: "100%",
      height: "6vh",
      backgroundColor: "#55916b",
      zIndex: -1,
    },
  };
  return (
    <Container>
      <Row
        className="d-flex flex-row "
        style={{
          fontFamily: "latolight",
          fontSize: "20px",
          color: "white",
        }}
      >
        <Col className="px-0">
          <CategoriesDropdown stlye={{ position: "absolute" }} />
          <div style={style.rectangleBottom}></div>
        </Col>
      </Row>
    </Container>
  );
};

export default Divider;
