import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import DiscountTag from "../components/DiscountTag";
import ProductPrice from "../components/ProductPrice";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { listProductDetails } from "../actions/productActions";

const ProductPage = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  // useEffect hook Runs when the component loads
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  console.log(product);

  return (
    <>
      <Link className="btn btn-outline-success my-3" to="/catalog">
        Inapoi
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <ListGroup variant="undefined">
              <ListGroup.Item className="border-0">
                <DiscountTag product={product} />
                <Image src={product.image} alt={product.name} fluid />
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0">
                <h4>{product.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.reviews > 0 ? product.review : 0} reviews`}
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
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? (
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
                  disabled={product.countInStock === 0}
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
      )}
    </>
  );
};

export default ProductPage;
