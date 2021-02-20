import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { updateProductFilters } from "../actions/productActions";

import "../styles/homeimagecategories.css";

const HomeImageCategories = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 996px)" });

  const dispatch = useDispatch();

  // Type of book categories group filters
  const homeschooling = [
    "Cărți cu clapete",
    "Cărți cu marker",
    "Cărți cu stickere și transfer",
    "Cărți limbi străine",
    "Cărți cu claviatura",
    "Set puzzle + carte",
    "Kit-uri de cusut și construit",
    "Cultură generală",
    "Cărți de tehnologie",
    "Hobbies",
    "Matching games",
  ];

  const activitati = [
    "Cărți cu clapete",
    "Cărți cu claviatura",
    "Cărți senzoriale",
    "Cărți de pictat",
    "Cărți cu marker",
    "Board books",
    "Cărți cu jucărie",
    "Set puzzle + carte",
    "Cărți cu stickere și transfer",
    "Kit-uri de cusut și construit",
    "Crăciun",
    "Cultură generală",
    "Hobbies",
    "Matching games",
  ];

  const sunete = ["Cărți cu sunete", "Cărți cu claviatura", "Crăciun"];

  const texturi = ["Cărți senzoriale", "Crăciun", "Cărți Pop-up"];

  const fictiune = [
    "Board books",
    "Crăciun",
    "Cărți de ficțiune",
    "Cărți Pop-up",
  ];

  return (
    <div
      class="container fluid pl-4 py-4 pr-4"
      style={{ background: "#6fda9f" }}
    >
      <Row>
        <Col md={4}>
          <div class="hovercategories">
            <figure>
              {isTabletOrMobile ? (
                <Image
                  src="../images/homepage/homeimagecategories_1_mob.png"
                  fluid
                  className="my-2"
                />
              ) : (
                <Image
                  src="../images/homepage/homeimagecategories_1.png"
                  fluid
                  className="my-2"
                />
              )}
              <div class="category-button">
                <Link
                  to="/catalog"
                  onClick={() =>
                    dispatch(
                      updateProductFilters({ typeOfBookFilter: homeschooling })
                    )
                  }
                >
                  HOME SCHOOLING
                </Link>
              </div>
            </figure>
          </div>
        </Col>
        <Col md={4}>
          <div class="hovercategories">
            <figure>
              <Image
                src="../images/homepage/homeimagecategories_2.png"
                fluid
                className="my-2 mx-auto"
              />
              <div class="category-button">
                <Link
                  to="/catalog"
                  onClick={() =>
                    dispatch(updateProductFilters({ typeOfBookFilter: sunete }))
                  }
                >
                  SUNETE
                </Link>
              </div>
            </figure>
          </div>
          <div class="hovercategories">
            <figure>
              <Image
                src="../images/homepage/homeimagecategories_3.png"
                fluid
                className="my-4 mx-auto"
              />
              <div class="category-button">
                <Link
                  to="/catalog"
                  onClick={() =>
                    dispatch(
                      updateProductFilters({ typeOfBookFilter: fictiune })
                    )
                  }
                >
                  FICTIUNE
                </Link>
              </div>
            </figure>
          </div>
        </Col>
        <Col md={4}>
          <div class="hovercategories">
            <figure>
              <Image
                src="../images/homepage/homeimagecategories_4.png"
                fluid
                className="my-2"
              />
              <div class="category-button">
                <Link
                  to="/catalog"
                  onClick={() =>
                    dispatch(
                      updateProductFilters({ typeOfBookFilter: texturi })
                    )
                  }
                >
                  TEXTURI
                </Link>
              </div>
            </figure>
          </div>
          <div class="hovercategories">
            <figure>
              <Image
                src="../images/homepage/homeimagecategories_5.png"
                fluid
                className="my-4"
              />
              <div class="category-button">
                <Link
                  to="/catalog"
                  onClick={() =>
                    dispatch(
                      updateProductFilters({ typeOfBookFilter: activitati })
                    )
                  }
                >
                  ACTIVITÃTI
                </Link>
              </div>
            </figure>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeImageCategories;
