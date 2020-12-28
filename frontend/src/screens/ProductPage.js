import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Badge } from "react-bootstrap";
import Rating from "../components/Rating";
import DiscountTag from "../components/DiscountTag";
import ProductPrice from "../components/ProductPrice";

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
              <DiscountTag product={product} />
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
            <ListGroup.Item>
              <span className="mt-auto py-5"> Vezi pe Youtube </span>
              <a
                href={product.ytblink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/youtube.png"
                  alt="ytblink"
                  width="40"
                  height="31"
                />
              </a>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col>Pret:</Col>
                <Col>
                  <ProductPrice product={product} />
                </Col>
              </Row>
            </ListGroup.Item>
            {/* <ListGroup.Item>
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
            </ListGroup.Item> */}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
