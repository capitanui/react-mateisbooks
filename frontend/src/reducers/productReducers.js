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
} from "../constants/productConstants.js";

// Product list reducer
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Product filter reducer
export const productFilterReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_FILTER_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_FILTER_SUCCESS:
      return { loading: false, products: action.payload.data };
    case PRODUCT_FILTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Product details reducer
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Update product filters reducer
export const productUpdateFilterReducer = (
  state = {
    category: "-",
    inStock: false,
    comingSoon: false,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_PRODUCT_FILTERS:
      return {
        category: action.payload.category,
        inStock: action.payload.inStock,
        comingSoon: action.payload.comingSoon,
      };

    default:
      return state;
  }
};
