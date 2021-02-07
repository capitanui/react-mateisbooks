import React from "react";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavIcons = () => {
  const favorites = useSelector((state) => state.favorites);

  const { favoritesItems } = favorites;

  const numberOfFavorites = favoritesItems.length;

  const iconStyle = {
    fontSize: "25px",
    color: "black",
  };

  return (
    <Row className="d-flex flex-row align-items-start justify-content-between">
      <Col xs={2} md={2} lg={1} xl={1} className="ml-auto">
        <Link to={`/favorites`} className="btnH">
          <Badge
            badgeContent={numberOfFavorites}
            color="error"
            style={iconStyle}
          >
            <i class="far fa-heart"></i>
          </Badge>
        </Link>
      </Col>

      <Col xs={2} md={2} lg={1} xl={1}>
        <Link to={`/reviews`} className="ml-4 btnH">
          <Badge badgeContent={0} color="error" style={iconStyle}>
            <i class="far fa-star "></i>
          </Badge>
        </Link>
      </Col>
    </Row>
  );
};

export default NavIcons;
