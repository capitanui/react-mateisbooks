import React from "react";
import { Card } from "react-bootstrap";
import "./style/card-style.css";
import Rating from "../Rating";

const Product = ({ product }) => {
  return (
    <Card className="text-left h-100">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body className="d-flex flex-column text-dark">
        <a href={`/product/${product._id}`} className="mt-auto">
          <Card.Title as="div">
            <h6>{product.name}</h6>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <Rating value={product.rating} text={`${product.reviews} reviews`} />
        </Card.Text>

        <Card.Text as="div">
          <div>{product.price} Lei</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
