import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const style = {
    heading: {
      fontFamily: "latoblack",
      fontSize: "2.3vim",
    },
    link: {
      fontFamily: "latolight",
      fontSize: "2.3vim",
    },
    phone: {
      fontFamily: "latolight",
      fontSize: "30px",
      color: "#ff8152",
    },
  };
  return (
    <>
      <footer>
        <Container>
          <div class="container fluid pl-4 py-4 pr-4">
            <Row className="d-flex flex-row align-items-top justify-content-between">
              <Col md={4}>
                <span style={style.heading}>COMENZI SI LIVRARE</span>
                <br />
                <a href="/cumcumpar" style={style.link}>
                  Cum cumpar
                </a>
                <br />
                <a href="/cumcumpar" style={style.link}>
                  Politica de returnare
                </a>
                <br />
                <a href="/cumcumpar" style={style.link}>
                  Politica de confidentialitate
                </a>
                <br />
                <a href="/cumcumpar" style={style.link}>
                  Termeni si conditii
                </a>
              </Col>
              <Col md={4}>
                <span style={style.text}>CONTUL TÃU</span>
                <br />
                <a href="/contultau" style={style.link}>
                  Intrã în cont
                </a>
                <br />
                <a href="cumcumpar" style={style.link}>
                  Creeazã cont
                </a>
                <br />
              </Col>
              <Col md={4}>
                <span style={style.text}>CONTACTEAZÃ-NE</span>
                <br />

                <a href="https://www.facebook.com/cartileluimatei">
                  <span style={style.phone}>
                    <i class="fab fa-facebook" />
                  </span>
                </a>
                <span style={{ color: "#ff8152", textDecoration: "none" }}>
                  {" "}
                  Cãrtile Lui Matei
                </span>
                {/* <br />
              <span style={style.phone}>
                <i class="fa fa-phone-alt" /> {"  "}0744178638
              </span>
              <br /> */}
              </Col>
            </Row>
            <Row>
              <Col className="text-center py-3 my-5">
                <span style={style.text}>
                  Copyright &copy; Cartile lui Matei
                </span>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
