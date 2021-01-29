import {
  FAVORITES_ADD_ITEM,
  FAVORITES_REMOVE_ITEM,
} from "../constants/favoritesConstants";

export const favoritesReducer = (state = { favoritesItems: [] }, action) => {
  switch (action.type) {
    case FAVORITES_ADD_ITEM:
      const item = action.payload;
      const existsItem = state.favoritesItems.find(
        (i) => i.product === item.product
      );
      if (existsItem) {
        return {
          ...state,
          favoritesItems: state.favoritesItems.map((i) =>
            i.product === existsItem.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          favoritesItems: [...state.favoritesItems, item],
        };
      }

    case FAVORITES_REMOVE_ITEM:
      return {
        ...state,
        favoritesItems: state.favoritesItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    default:
      return state;
  }
};
