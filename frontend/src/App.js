import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Catalog from "./screens/Catalog";
import Home from "./screens/Home";
import ProductPage from "./screens/ProductPage";
import products from "./products";

class App extends Component {
  state = {
    products,
  };

  render() {
    return (
      <>
        <Router>
          <Header />
          <main className="py-3">
            <Container>
              <Route path="/" component={Home} exact />
              <Route path="/catalog" component={Catalog} exact />
              <Route path="/product/:id" component={ProductPage} />
            </Container>
          </main>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
