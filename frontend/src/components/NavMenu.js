import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, Row } from "react-bootstrap";

const NavMenu = () => {
  const textStyle = {
    fontFamily: "latolight",
    fontSize: "18px",
  };
  return (
    <Row className="d-flex flex-row justify-content-end">
      <Navbar expand="lg" collapseOnSelect>
        <Navbar.Collapse style={textStyle} id="basic-navbar-nav">
          <Nav className="d-flex justify-content-end">
            <LinkContainer to="/" className="mr-3">
              <Nav.Link className="py-3 active">Acasa</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/catalog" className="mr-3">
              <Nav.Link className="py-3 active">Catalog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/catalog" className="mr-3">
              <Nav.Link className="py-3 active">Povestea Noastra</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/voucher" className="mr-3">
              <Nav.Link className="py-3 active">Voucher Cadou</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/voucher" className="mr-3">
              <Nav.Link className="py-3 active">Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
};

export default NavMenu;
