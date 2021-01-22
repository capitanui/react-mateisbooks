import React from "react";
import { Form, Container, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <ListGroup variant="flush">
          <ListGroup.Item style={{ marginTop: "87px" }}>
            <div
              style={{
                fontFamily: "latoblack",
                fontSize: "16px",
                textTransform: "none",
              }}
            >
              Stoc
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="border-0">
            <Form.Check type="switch" id="instoc" label="In Stoc" />
          </ListGroup.Item>
          <ListGroup.Item className="border-0">
            <Form.Check type="switch" id="comingsoon" label="Coming Soon" />
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
};
export default Filters;
