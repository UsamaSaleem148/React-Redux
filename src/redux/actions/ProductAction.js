import { ADD_NEW_PRODUCT, GET_ALL_PRODUCTS } from "../action_types/ProductActionTypes"

export const addProduct = (payload) => {
  return {
    type: ADD_NEW_PRODUCT,
    data: payload,
  }
}

export const getProducts = () => {
  return {
    type: GET_ALL_PRODUCTS,
  }
}
