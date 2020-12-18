import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductPage = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className="btn btn-outline-success my-3" to="/">
        Inapoi
      </Link>
      <Row>
        <Col md={4}>
          <ListGroup variant="undefined">
            <ListGroup.Item className="border-0">
              <h4>{product.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item className="border-0">
              <Image src={product.image} alt={product.name} fluid />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.reviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Pret:</Col>
                <Col>
                  <strong>{product.price} Lei</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStrock > 0 ? (
                    <div style={{ color: "green" }}>In Stoc</div>
                  ) : (
                    <div style={{ color: "red" }}>Indisponibil</div>
                  )}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStrock === 0}
              >
                <span>
                  <i className="fas fa-heart mr-3"></i>
                </span>
                Adauga in lista
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
