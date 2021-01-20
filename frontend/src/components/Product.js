import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import DiscountTag from "./DiscountTag";
import ProductPrice from "./ProductPrice";

const Product = ({ product }) => {
  return (
    <Card className="text-left h-100">
      <Link to={`/product/${product.code}`}>
        <DiscountTag product={product} />
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body className="d-flex flex-column text-dark">
        <Link to={`/product/${product.code}`} className="mt-auto">
          <Card.Title as="div">
            <h6>{product.name}</h6>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={product.rating} />
        </Card.Text>

        <Card.Text as="div">
          <div className="my-2 mx-2">
            <ProductPrice product={product} />
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
