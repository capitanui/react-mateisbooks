import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import DiscountTag from "./DiscountTag";
import ProductPrice from "./ProductPrice";
import ComingSoonTag from "./ComingSoonTag";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../actions/favoritesActions";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const { favoritesItems } = favorites;

  const addToFavoritesHandler = (id) => {
    dispatch(addToFavorites(id));
  };

  return (
    <Card className="text-left h-100 cardH">
      <Link to={`/product/${product.code}`}>
        <ComingSoonTag product={product} />
        <DiscountTag product={product} />
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body className="d-flex flex-column text-dark">
        <Link to={`/product/${product.code}`} className="mt-auto">
          <Card.Title as="div">
            <div
              style={{
                fontFamily: "latoblack",
                fontSize: "15px",
                textTransform: "capitalize",
              }}
            >
              {product.name}
            </div>
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
        {favoritesItems.find((p) => p.product === product.code) ? (
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <span style={{ fontSize: "25px", color: "#b5f0e0" }}>
              <i class="far fa-heart mr-lg-1 "></i>
            </span>
          </div>
        ) : (
          <div class="d-flex justify-content-end favy">
            <span
              style={{ fontSize: "25px", color: "#ff8152" }}
              onClick={() => addToFavoritesHandler(product.code)}
            >
              <i class="fas fa-heart mr-lg-1 "></i>
            </span>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;
