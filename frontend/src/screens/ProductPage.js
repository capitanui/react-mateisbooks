import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import DiscountTag from "../components/DiscountTag";
import ProductPrice from "../components/ProductPrice";
import FacebookSendToMessenger from "../components/FacebookSendToMessenger";
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
            <Col md={6}>
              <ListGroup variant="flush">
                <ListGroup.Item className="border-0">
                  <div
                    style={{
                      fontFamily: "latoblack",
                      fontSize: "2rem ",
                      textTransform: "capitalize",
                    }}
                  >
                    {product.name}
                  </div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex flex-row justify-content-between">
                  <div>
                    <a
                      href={product.ytblink}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="mr-3"
                    >
                      <img
                        src="/images/youtube.png"
                        alt="ytblink"
                        width="40"
                        height="31"
                      />
                    </a>
                    <span
                      style={{
                        fontFamily: "latoblack",
                        fontSize: "1rem",
                        textTransform: "none",
                      }}
                    >
                      Vezi pe Youtube
                    </span>
                  </div>
                  <Rating
                    className="ml-3"
                    value={product.rating}
                    text={`${product.reviews > 0 ? product.review : 0} reviews`}
                  />
                </ListGroup.Item>
                <ListGroup.Item className="border-0 my-4">
                  <Row>
                    <Col>
                      <span
                        style={{
                          fontFamily: "latolight",
                          fontSize: "1.5rem",
                        }}
                      >
                        Vârsta:
                      </span>
                      <span
                        style={{
                          fontFamily: "latoblack",
                          fontSize: "1.5rem",
                          letterSpacing: "0.03rem",
                        }}
                      >
                        {" "}
                        {product.category}
                      </span>
                      <span
                        style={{
                          fontFamily: "latolight",
                          fontSize: "1.5rem",
                        }}
                      >
                        {" "}
                        ani
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <ListGroup.Item className="border-0 my-4">
                      <Row>
                        <Col>
                          {product.countInStock > 0 ? (
                            <div
                              style={{
                                fontFamily: "latolight",
                                fontSize: "1.4rem",
                                color: "green",
                              }}
                            >
                              <i class="far fa-check-circle"></i>{" "}
                              <span> IN STOC</span>
                            </div>
                          ) : (
                            <div
                              style={{
                                fontFamily: "latolight",
                                fontSize: "1.4rem",
                              }}
                            >
                              <i class="far fa-times-circle"></i> PE COMANDÃ
                            </div>
                          )}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  </Row>
                  <Row className="d-flex align-items-center">
                    <Col md={6}>
                      <ProductPrice product={product} size="large" />{" "}
                    </Col>
                    <Col md={6}>
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
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span
                    style={{
                      fontFamily: "latolight",
                      fontSize: "1.5rem",
                    }}
                  >
                    <img
                      src="/images/gift.png"
                      alt="cadou"
                      width="40rem"
                      height="40rem"
                      class="mx-2"
                    />
                    Împachetare cadou disponibilã
                  </span>
                </ListGroup.Item>
                <FacebookSendToMessenger />
              </ListGroup>
            </Col>
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
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default ProductPage;
