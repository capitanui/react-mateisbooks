import React from "react";
import { Form, ListGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProductFilters } from "../actions/productActions";

const Filters = () => {
  const textStyle = {
    tipCarteStyle: {
      fontSize: "1rem",
      whiteSpace: "nowrap",
    },
    titleTipCarte: {
      padding: "0",
      margin: "0",
      fontSize: "1.2rem",
      color: "white",
    },
  };

  const dispatch = useDispatch();

  const productFilters = useSelector((state) => state.productFilters);
  const { inStock, comingSoon } = productFilters;

  return (
    <>
      <Card border="success" style={{ marginTop: "130px" }}>
        <Card.Header style={{ backgroundColor: "#6fda9f" }}>
          <div style={textStyle.titleTipCarte}>STOC</div>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="border-0">
              <Form.Check
                type="switch"
                id="instoc"
                label="În Stoc"
                checked={inStock}
                onChange={() =>
                  dispatch(updateProductFilters({ inStock: "toggle" }))
                }
              />
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <Form.Check
                type="switch"
                id="comingsoon"
                label="În curând"
                onChange={() =>
                  dispatch(updateProductFilters({ comingSoon: "toggle" }))
                }
                checked={comingSoon}
              />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Header style={{ backgroundColor: "#6fda9f" }}>
          <div style={textStyle.titleTipCarte}>TIP DE CARTE</div>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="border-0">
              <Form.Check type="checkbox" id="todo">
                <Form.Check.Input type="checkbox" isValid />
                <Form.Check.Label style={textStyle.tipCarteStyle}>
                  Cărți cu clapete
                </Form.Check.Label>
              </Form.Check>
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <Form.Check type="checkbox" id="todo">
                <Form.Check.Input type="checkbox" isValid />
                <Form.Check.Label style={textStyle.tipCarteStyle}>
                  Cărți cu sunete
                </Form.Check.Label>
              </Form.Check>
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <Form.Check type="checkbox" id="todo">
                <Form.Check.Input type="checkbox" isValid />
                <Form.Check.Label style={textStyle.tipCarteStyle}>
                  Cărți cu activități
                </Form.Check.Label>
              </Form.Check>
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <Form.Check type="checkbox" id="todo">
                <Form.Check.Input type="checkbox" isValid />
                <Form.Check.Label style={textStyle.tipCarteStyle}>
                  Cărți de colorat
                </Form.Check.Label>
              </Form.Check>
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <Form.Check type="checkbox" id="todo">
                <Form.Check.Input type="checkbox" isValid />
                <Form.Check.Label style={textStyle.tipCarteStyle}>
                  Cărți senzoriale
                </Form.Check.Label>
              </Form.Check>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};
export default Filters;
