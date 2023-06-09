import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import ProductPrice from "../components/ProductPrice";
import {
  addToFavorites,
  removeFromFavorites,
} from "../actions/favoritesActions";

const Favorites = ({ match, history }) => {
  // location object can be imported to get query strings url/id?qty, history is used to redirect

  // Get product id from url
  const productId = match.params.id;

  const favorites = useSelector((state) => state.favorites);

  const { favoritesItems } = favorites;

  const dispatch = useDispatch();

  // If product id is present, load in favorites
  useEffect(() => {
    if (productId) {
      dispatch(addToFavorites(productId));
    }
  }, [dispatch, productId]);

  const removeFromFavoritesHandler = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <Container fluid>
      <Link className="btn btn-outline-success my-4" to="/catalog">
        Inapoi
      </Link>
      <Row className="my-3">
        <h1>Lista ta de favorite</h1>
      </Row>
      <Row>
        <Col md={8}>
          {favoritesItems.length === 0 ? (
            <Container>
              <Message>
                Nu ai adaugat nici o carte in lista de favorite.
              </Message>
            </Container>
          ) : (
            <ListGroup variant="flush">
              {favoritesItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={4}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>
                      <ProductPrice product={item} />
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromFavoritesHandler(item.product)}
                      >
                        <i className="fas fa-trash" />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={2}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Total :{" "}
                {favoritesItems.reduce((acc, item) => acc + item.price, 0)} lei
              </h2>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favorites;
