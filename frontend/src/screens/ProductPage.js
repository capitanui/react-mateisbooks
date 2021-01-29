import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import DiscountTag from "../components/DiscountTag";
import ProductPrice from "../components/ProductPrice";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { listProductDetails } from "../actions/productActions";

const ProductPage = ({ history, match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  // useEffect hook Runs when the component loads
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  //Handlers
  const addToFavoritesHandler = () => {
    history.push(`/favorites/${match.params.id}`);
  };

  return (
    <Container fluid>
      <Link className="btn btn-outline-success my-3" to="/catalog">
        Inapoi
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Container>
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
                  <div
                    style={{
                      fontFamily: "latoblack",
                      fontSize: "25px",
                      textTransform: "capitalize",
                    }}
                  >
                    {product.name}
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.reviews > 0 ? product.review : 0} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  <Row>
                    <Col>
                      <ProductPrice product={product} />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="border-0 my-1">
                  <Row>
                    <Col>
                      {product.countInStock > 0 ? (
                        <div style={{ color: "green" }}>
                          <small className="font-weight-light">In stoc</small>
                        </div>
                      ) : (
                        <div style={{ color: "red" }}>
                          <small className="font-weight-light">
                            Nu este in stoc
                          </small>
                        </div>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item className="border-0">
                  <Button
                    onClick={addToFavoritesHandler}
                    className="btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                  >
                    <span>
                      <i className="fas fa-heart mr-3"></i>
                    </span>
                    Adauga la favorite
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>{""}</Col>
          </Row>
          <Row>
            <Col md={12}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div
                    style={{
                      fontFamily: "latoblack",
                      fontSize: "16px",
                      textTransform: "none",
                    }}
                  >
                    Descriere
                  </div>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Col md={6}>
                    <small className="font-weight-light">
                      {product.description}
                    </small>
                  </Col>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div
                    classs="mt-auto py-5"
                    style={{
                      fontFamily: "latoblack",
                      fontSize: "14px",
                      textTransform: "none",
                    }}
                  >
                    Vezi pe Youtube
                  </div>
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
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default ProductPage;
