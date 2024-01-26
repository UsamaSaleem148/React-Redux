import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "../action_types/CartActionTypes"

export const CartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let productExists = state.some((item) => item.id === action.data.id)
      if (!productExists) {
        return [action.data, ...state]
      }
      return [...state]
    case EMPTY_CART:
      state = []
      return [...state]
    case REMOVE_FROM_CART:
      const remainingItems = state.filter((item) => item.id !== action.data)
      return [...remainingItems]
    default:
      return state
  }
}
