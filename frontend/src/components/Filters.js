import React from "react";
import { Form, ListGroup, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProductFilters } from "../actions/productActions";

export const Filters = () => {
  const dispatch = useDispatch();

  const productFilters = useSelector((state) => state.productFilters);
  const productList = useSelector((state) => state.productList);

  const { inStock, comingSoon, typeOfBookFilter } = productFilters;
  const { typeOfBookCategories } = productList;

  function updateFilterTypeOfBooks(e) {
    let index = typeOfBookFilter.indexOf(e.target.id);

    if (index > -1) typeOfBookFilter.splice(index, 1);
    else typeOfBookFilter.push(e.target.id);

    dispatch(updateProductFilters({ typeOfBookFilter }));
  }

  function isChecked(typeOfBook) {
    return typeOfBookFilter.includes(typeOfBook);
  }

  const textStyle = {
    titleTipCarte: {
      padding: "0",
      margin: "0",
      fontSize: "1.2rem",
      color: "white",
    },
  };

  return (
    <Container>
      <Card border="success" style={{ marginTop: "130px" }}>
        <Card.Header style={{ backgroundColor: "#6fda9f" }}>
          <div style={textStyle.titleTipCarte}>STOC</div>
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
          <div style={textStyle.titleTipCarte}>CATEGORII</div>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {typeOfBookCategories.map((typeOfBook) => (
              <ListGroup.Item className="border-0">
                <Form.Check
                  type="checkbox"
                  id={typeOfBook}
                  label={
                    <div
                      style={{
                        fontFamily: "latoregular, Helvetica, Arial, sans-serif",
                        whiteSpace: "nowrap",
                        fontSize: "1rem",
                      }}
                    >
                      {typeOfBook}
                    </div>
                  }
                  onChange={updateFilterTypeOfBooks}
                  checked={isChecked(typeOfBook)}
                ></Form.Check>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Filters;
