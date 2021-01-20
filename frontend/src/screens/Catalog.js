import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product.js";
import Categories from "../components/Categories";
import axios from "axios";

class Catalog extends Component {
  state = {
    products: [],
  };

  filterByCategory = (category) => {
    this.state.products.forEach((e) => {
      console.log(e.category);
    });

    this.setState({
      products: [
        ...this.state.products.filter(
          (product) => product.category === category
        ),
      ],
    });
  };

  // Fetch products from backend using axios
  componentDidMount() {
    axios
      .get("/api/products")
      .then(({ data }) => this.setState({ products: data }));
  }

  render() {
    return (
      <>
        <Container className="my-5">
          <Categories
            filter={this.filterByCategory}
            products={this.state.products}
          />
        </Container>

        <Row className="py-2">
          {this.state.products.map((product) => (
            <Col
              key={product.code}
              sm={11}
              md={5}
              lg={3}
              xl={2}
              className="mb-4"
            >
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default Catalog;
