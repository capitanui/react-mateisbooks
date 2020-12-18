import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../resources/images/banner.png";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link className="py-3 mr-sm-3">
                  <i className="fas fa-home mr-sm-1"></i>Home
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/catalog">
                <Nav.Link className="py-3">
                  <i className="fas fa-book-open mr-sm-1"></i>Catalog
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
            <FormControl
              size="sm"
              type="text"
              placeholder="Cauta"
              className="mx-sm-2"
            />
            <Button size="sm" variant="outline-success">
              Cauta
            </Button>
          </Form>
        </Container>
      </Navbar>
      <div className="text-center">
        <img src={logo} className="img-fluid" alt="banner"></img>
        <hr></hr>
      </div>
    </header>
  );
};

export default Header;
