import { ADD_NEW_PRODUCT, SET_PRODUCT_LIST } from "../action_types/ProductActionTypes"

export const ProductReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return [action.data, ...state]
    case SET_PRODUCT_LIST:
      return [...action.data]
    default:
      return state
  }
}
