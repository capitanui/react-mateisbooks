import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Catalog from "./screens/Catalog";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Catalog />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
