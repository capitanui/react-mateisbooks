import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import TopHeader from "./components/TopHeader";
import Navigation from "./components/Navigation";
import Catalog from "./screens/Catalog";
import Home from "./screens/Home";
import ProductPage from "./screens/ProductPage";
import Favorites from "./screens/Favorites";

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <TopHeader />
          <Navigation />
          <Route path="/" component={Home} exact />
          <Route path="/catalog" component={Catalog} exact />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/favorites/:id?" component={Favorites} />
          <Footer />
        </Router>
      </Container>
    );
  }
}

export default App;
