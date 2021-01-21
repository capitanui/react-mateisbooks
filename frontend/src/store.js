import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  productFilterReducer,
} from "./reducers/productReducers";

// Combine redux reducers
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productFiltered: productFilterReducer,
});

// Create the redux store
const intialState = {};

// arrays of middleware
const middleware = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
