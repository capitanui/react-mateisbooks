import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product.js";
import Categories from "../components/Categories";

class Catalog extends Component {
  state = {
    products,
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

    console.log(this);
  };

  render() {
    return (
      <>
        <Container className="my-5">Catalog</Container>
        <Container className="my-5">
          <Categories
            filter={this.filterByCategory}
            products={this.state.products}
          />
        </Container>

        <Row className="py-2">
          {this.state.products.map((product) => (
            <Col
              key={product._id}
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
