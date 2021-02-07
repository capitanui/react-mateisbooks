import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import Navigation from "./components/Navigation";
import Catalog from "./screens/Catalog";
import Home from "./screens/Home";
import ProductPage from "./screens/ProductPage";
import Favorites from "./screens/Favorites";
import InWork from "./screens/InWork";
import { listProducts } from "./actions/productActions";

const App = () => {
  const dispatch = useDispatch();

  // useEffect hook Runs when the component loads - get all products
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Container>
      <Router>
        <TopHeader />
        <Navigation />
        <Route path="/" component={Home} exact />
        <Route path="/catalog" component={Catalog} exact />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/favorites/:id?" component={Favorites} />
        <Route path="/reviews" component={InWork} />
        <Route path="/ourstory" component={InWork} />
        <Route path="/voucher" component={InWork} />
        <Route path="/contact" component={InWork} />
        <Route path="/contultau" component={InWork} />
        <Footer />
      </Router>
    </Container>
  );
};

export default App;
