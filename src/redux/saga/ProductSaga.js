import { takeEvery, put } from "redux-saga/effects"
import { GET_ALL_PRODUCTS, SET_PRODUCT_LIST } from "../action_types/ProductActionTypes"

function* getProducts() {
  let data = yield fetch("http://localhost:3500/products")
  data = yield data.json()
  yield put({ type: SET_PRODUCT_LIST, data })
}

function* productSaga() {
  yield takeEvery(GET_ALL_PRODUCTS, getProducts)
}

export default productSaga
