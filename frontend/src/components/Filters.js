import React from "react";
import { Form, ListGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProductFilters } from "../actions/productActions";

const Filters = () => {
  const dispatch = useDispatch();

  const productFilters = useSelector((state) => state.productFilters);
  const { inStock, comingSoon } = productFilters;

  return (
    <>
      <Card border="success" style={{ marginTop: "130px" }}>
        <Card.Header style={{ backgroundColor: "#6fda9f" }}>
          <div
            style={{
              fontSize: "16px",
              color: "white",
            }}
          >
            STOC
          </div>
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
          <div
            style={{
              fontSize: "18px",
              color: "white",
            }}
          >
            TIP DE CARTE
          </div>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="border-0">
              <Form.Check
                type="checkbox"
                id="instoc"
                label="Cărți cu clapete"
              />
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <Form.Check
                type="checkbox"
                id="comingsoon"
                label="Cărți cu sunete"
              />
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <Form.Check
                type="checkbox"
                id="comingsoon"
                label="Cărți cu activități"
              />
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <Form.Check
                type="checkbox"
                id="comingsoon"
                label="Cărți de colorat"
              />
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <Form.Check
                type="checkbox"
                id="comingsoon"
                label="Cărți senzoriale"
              />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};
export default Filters;
