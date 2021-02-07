import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const TopHeader = () => {
  const textStyle = {
    fontFamily: "latolight",
    textAlign: "center",
    fontSize: "16px",
    textTransform: "none",
    color: "grey",
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Container>
      <Row
        className="d-flex my-3"
        style={{
          display: "block",
          textAlign: "center",
        }}
      >
        <Col
          xl={2}
          lg={5}
          md={6}
          className={`d-flex ${
            isTabletOrMobile ? "flex-column" : "flex-row"
          } align-items-center`}
        >
          <Col>
            <i className="fas fa-phone ml-0 text-nowrap">
              <span className="ml-1" style={textStyle}>
                +4 0744 178 638
              </span>
            </i>
          </Col>
          <Col className="mr-auto">
            <i className="fas fa-envelope mr-1 ">
              <span className="ml-1 text-nowrap" style={textStyle}>
                anca.capitanu@cartileluimatei.ro
              </span>
            </i>
          </Col>
        </Col>
        <Col
          xl={3}
          lg={2}
          md={4}
          className="d-flex flex-row justify-content-end ml-auto"
        >
          <ButtonGroup size="small">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              variant="text"
              onClick={handleClick}
            >
              <Col>
                <i className="fas fa-user">
                  <span className="ml-1 text-nowrap" style={textStyle}>
                    Contul tãu
                  </span>
                </i>
              </Col>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                component={Link}
                to="/contultau"
                onClick={handleClose}
                style={textStyle}
              >
                Intrã în cont
              </MenuItem>
              <MenuItem
                component={Link}
                to="/contultau"
                onClick={handleClose}
                style={textStyle}
              >
                Creeazã cont
              </MenuItem>
            </Menu>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default TopHeader;
