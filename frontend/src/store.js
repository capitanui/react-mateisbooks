import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productFilterReducer,
  productDetailsReducer,
  productUpdateFilterReducer,
} from "./reducers/productReducers";

import { favoritesReducer } from "./reducers/favoritesReducers";

// Combine redux reducers
const reducer = combineReducers({
  productList: productListReducer,
  productListFiltered: productFilterReducer,
  productDetails: productDetailsReducer,
  productFilters: productUpdateFilterReducer,
  favorites: favoritesReducer,
});

//Initial state
const favoritesItemsFromStorage = localStorage.getItem("favoritesItems")
  ? JSON.parse(localStorage.getItem("favoritesItems"))
  : [];

// Create the redux store
const intialState = {
  favorites: { favoritesItems: favoritesItemsFromStorage },
};

// arrays of middleware
const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
