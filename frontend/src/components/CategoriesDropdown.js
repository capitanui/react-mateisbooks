import React, { useState } from "react";
import WatchClickOutside from "./HandlerClickOutside";

import "../styles/categorydropdown.css";

const CategoriesDropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <WatchClickOutside onClickOutside={() => setIsActive(false)}>
      <div class="d-flex flex-row mx-4 align-items-top justify-content-begin">
        <div class="header-shadow" />
        <div
          class="d-flex flex-column align-items-center justify-content-center header"
          onClick={() => handleClick()}
        >
          <button>
            <span class="text">
              <i class="fa fa-bars mr-3" />
              CATEGORII DE VARSTA
            </span>
          </button>
          <div class={isActive ? "active-drop" : "inactive-drop"}>
            <ul>
              <li>
                <button>0 - 1 ani</button>
              </li>
              <li>
                <button>0 - 1 ani</button>
              </li>
              <li>
                <button>0 - 1 ani</button>
              </li>
              <li>
                <button>0 - 1 ani</button>
              </li>
              <li>
                <button>0 - 1 ani</button>
              </li>
              <li>
                <button>0 - 1 ani</button>
              </li>
              <li>
                <button>0 - 1 ani</button>
              </li>
              <li>
                <button>0 - 1 ani</button>
              </li>
              <li>
                <button>0 - 1 ani</button>
              </li>
              <li>
                <button>0 - 1 ani</button>
              </li>
              <li>
                <button>0 - 1 ani</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </WatchClickOutside>
  );
};

export default CategoriesDropdown;
