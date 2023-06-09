import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateProductFilters } from "../actions/productActions";

export const FiltersSelected = () => {
  const dispatch = useDispatch();

  const productFilters = useSelector((state) => state.productFilters);

  const { typeOfBookFilter } = productFilters;

  function updateFilterTypeOfBooks(filter) {
    let index = typeOfBookFilter.indexOf(filter);

    if (index > -1) {
      typeOfBookFilter.splice(index, 1);
      dispatch(updateProductFilters({ typeOfBookFilter }));
    }
  }

  return (
    <>
      {typeOfBookFilter.length > 0 && (
        <div class="d-flex">
          <span class="p-0 mx-0">
            <Link
              className="ws-clear-filter-link"
              onClick={() =>
                dispatch(updateProductFilters({ typeOfBookFilter: [] }))
              }
            >
              <i class="far fa-times-circle"></i>
            </Link>
          </span>
          <div class="selected-filter-group">
            <ul>
              <li>
                <span class="ws-filter-name">Categorii:</span>
              </li>
              {typeOfBookFilter.map((filter) => (
                <li>
                  <span class="mx-1">{filter}</span>
                  <Link
                    className="ws-clear-filter-link"
                    onClick={() => updateFilterTypeOfBooks(filter)}
                  >
                    <i class="far fa-times-circle"></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default FiltersSelected;
