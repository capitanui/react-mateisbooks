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
  PRODUCT_STOCKFILTER_FAIL,
  PRODUCT_STOCKFILTER_REQUEST,
  PRODUCT_STOCKFILTER_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";

// List products action
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
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

// List products filtered by category action
export const listProductFiltered = (category) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_FILTER_REQUEST,
    });

    const { data } = await axios.get(`/api/products/category/${category}`);

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
