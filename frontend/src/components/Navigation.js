import React from "react";
import logo from "../resources/images/banner.png";
import { Row, Col, Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import NavMenu from "./NavMenu";
import NavIcons from "./NavIcons";
import NavMenuBar from "./NavMenuBar";

const Navigation = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 996px)" });

  return (
    <Container>
      <Row className="align-items-center">
        <Col md={4} sm={6} xs={5} lg={4}>
          <a href="/">
            <img src={logo} className="img-fluid" alt="banner" />
          </a>
        </Col>
        <Col
          lg={6}
          md={4}
          sm={2}
          xs={1}
          className="mr-auto d-flex flex-row align-items-center justify-content-between"
        >
          {!isTabletOrMobile && <NavMenu />}
          <NavIcons />
        </Col>
        <Col xs={3}>{isTabletOrMobile && <NavMenuBar />}</Col>
      </Row>
    </Container>
  );
};

export default Navigation;
