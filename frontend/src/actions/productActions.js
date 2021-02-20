import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_FILTER_FAIL,
  PRODUCT_FILTER_REQUEST,
  PRODUCT_FILTER_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  UPDATE_PRODUCT_FILTERS,
} from "../constants/productConstants";
import axios from "axios";

// List products action
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/products");

    // Get unique categories from all products excluding empty values
    const categories = data
      .map((p) => p.category.split(","))
      .flat()
      .reduce(
        (unique, item) =>
          unique.includes(item) || item === "" ? unique : [...unique, item],
        []
      )
      .sort(
        (elem1, elem2) =>
          parseInt(elem1.substring(0, 2)) - parseInt(elem2.substring(0, 2))
      );

    // Get unique categories from all products excluding empty values
    const typeOfBookCategories = data
      .map((p) => p.categoryType.split(","))
      .flat()
      .reduce(
        (unique, item) =>
          unique.includes(item) || item === "" ? unique : [...unique, item],
        []
      );

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: {
        data,
        categories,
        typeOfBookCategories,
      },
    });

    dispatch(applyProductFilters());
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// List products details action
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Update product filters action
export const updateProductFilters = (newFilter) => async (
  dispatch,
  getState
) => {
  //Get current filter from state
  let { productFilters } = getState();

  productFilters = {
    category:
      typeof newFilter.category !== "undefined"
        ? newFilter.category
        : productFilters.category,
    inStock:
      newFilter.inStock === "toggle"
        ? !productFilters.inStock
        : productFilters.inStock,
    comingSoon:
      newFilter.comingSoon === "toggle"
        ? !productFilters.comingSoon
        : productFilters.comingSoon,
    typeOfBookFilter:
      typeof newFilter.typeOfBookFilter !== "undefined"
        ? newFilter.typeOfBookFilter
        : productFilters.typeOfBookFilter,
  };

  dispatch({
    type: UPDATE_PRODUCT_FILTERS,
    payload: productFilters,
  });

  dispatch(applyProductFilters());
};

// Apply product filters action
export const applyProductFilters = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_FILTER_REQUEST,
    });

    const { productFilters, productList } = getState();
    const { category, inStock, comingSoon, typeOfBookFilter } = productFilters;
    let { products } = productList;

    // Filter by type of book category
    if (typeOfBookFilter.length !== 0) {
      products = products.filter((product) => {
        let match = false;
        typeOfBookFilter.forEach((filter) => {
          if (product.categoryType.includes(filter)) match = true;
        });
        return match;
      });
    }

    //Filter by category
    if (category !== "-") {
      products = products.filter((product) =>
        product.category.includes(category)
      );
    }

    //Filter by stock
    if (inStock) {
      products = products.filter((product) => product.countInStock > 0);
    }

    //Filter by comingSoon
    if (comingSoon) {
      products = products.filter(
        (product) => product.countInStock === 0 && product.order === "Yes"
      );
    }

    const data = products;

    dispatch({
      type: PRODUCT_FILTER_SUCCESS,
      payload: {
        category,
        data,
      },
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_FILTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
