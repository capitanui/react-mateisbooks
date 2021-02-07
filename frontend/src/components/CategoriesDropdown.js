import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WatchClickOutside from "./WatchClickOutside";
import Message from "./Message.js";
import Loader from "./Loader.js";
import { updateProductFilters } from "../actions/productActions";
import "../styles/categorydropdown.css";

const CategoriesDropdown = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  let { loading, error, categories } = productList;

  const [isActive, setIsActive] = useState(false);

  if (categories == null) {
    categories = [];
  }

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <WatchClickOutside onClickOutside={() => setIsActive(false)}>
          <div class="d-flex flex-row mx-4 align-items-top justify-content-begin">
            <div class="header-shadow" />
            <div
              class="d-flex flex-column align-items-center justify-content-center header"
              onClick={() => handleClick()}
            >
              <button>
                <span class="text">
                  <i class="fa fa-bars mr-2" />
                  CATEGORII DE VÂRSTÃ
                </span>
              </button>
              <div class={isActive ? "active-drop" : "inactive-drop"}>
                <ul>
                  {categories.map((c) => (
                    <Link
                      to={`/catalog`}
                      onClick={() =>
                        dispatch(updateProductFilters({ category: c }))
                      }
                      className="a"
                    >
                      <li>{c} ani</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </WatchClickOutside>
      )}
    </>
  );
};

export default CategoriesDropdown;
