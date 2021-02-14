import React from "react";
import { Row, Container } from "react-bootstrap";
import CategoriesDropdown from "./CategoriesDropdown";
import { useMediaQuery } from "react-responsive";

const Divider = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 996px)" });

  const style = {
    rectangleBottom: {
      height: "6vh",
      backgroundColor: "#55916b",
      zIndex: -10,
    },
    text: {
      fontFamily: "latolight",
      fontSize: "2.1vmin",
      color: "white",
    },
  };
  return (
    <Container>
      <CategoriesDropdown />
      <Row
        style={style.rectangleBottom}
        className="d-flex justify-content-around align-items-center"
      >
        {/* <Form inline style={{ marginLeft: "50vmin" }}>
          <FormControl type="text" placeholder="Cauta titlul cartii" />
        </Form> */}
        {!isTabletOrMobile && (
          <span style={style.text} class="ml-auto mr-4">
            <i class="fa fa-truck"> </i>
            TRANSPORT GRATUIT PESTE 150 Lei
          </span>
        )}
      </Row>
    </Container>
  );
};

export default Divider;
