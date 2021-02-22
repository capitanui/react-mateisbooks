import React from "react";
import { Container, Col } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import "../styles/homeimageicons.css";

const HomeImageIcons = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 996px)" });

  return (
    <Container>
      <div
        class={`d-flex ${
          isTabletOrMobile
            ? "flex-column justify-content-center"
            : "flex-row justify-content-around"
        } `}
      >
        <Col md={3}>
          <div class="rectangle">
            <i class="far fa-comments icon"></i>
            <div class="title">VORBESTE CU ANCA</div>
            <div class="body">
              Consultanta de specialitate
              <br />
              Sfaturi si indrumare
              <br />
              Experienta personala cu Matei de la 4 luni
              <br />
              Feedback continuu de la parinti
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div class="rectangle">
            <i class="fas fa-gift icon"></i>
            <br></br>
            <span class="title">AMBALARE GRATUITA</span>
            <div class="body">
              Prima comanda
              <br />
              Cadouri
              <br />
              Oricand, la cerere
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div class="rectangle">
            <i class="fas fa-truck icon"></i>
            <br></br>
            <span class="title">LIVRARE RAPIDA</span>
            <div class="body">
              GRATUIT la comenzi peste 150 lei
              <br />
              10 lei la comenzi mai mici de 150 lei
              <br />
              Ridicare personala in Iasi
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div class="rectangle">
            <i class="fas fa-gift icon"></i>
            <br></br>
            <span class="title">PROGRAM DE FIDELIZARE</span>
            <div class="body">
              Carti gratuite
              <br />
              Mici surprize in pachet
              <br />
              Reduceri la comenzi mari
              <br />
              Comunitatea mamicilor
            </div>
          </div>
        </Col>
      </div>
    </Container>
  );
};

export default HomeImageIcons;
