import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import Product from "../components/Product.js";
import Categories from "../components/Categories.js";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { listProductFiltered, listProducts } from "../actions/productActions";

const Catalog = () => {
  const dispatch = useDispatch();

  const productListState = useSelector((state) => state.productList);

  const productListFull = productListState.products;

  const productFiltered = useSelector((state) => state.productFiltered);

  const { loading, error, products } = productFiltered;

  // useEffect hook Runs when the component loads - get all products
  useEffect(() => {
    dispatch(listProducts());
    dispatch(listProductFiltered(".*"));
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Container className="my-5">
            <Categories products={productListFull} />
            {/* <div class="font-weight-light text-sm-left my-3">
              {products.length - 1} produse
            </div> */}
          </Container>
          <Row className="py-2">
            {products.map((product) => (
              <Col
                key={product.code}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className="mb-4"
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default Catalog;
