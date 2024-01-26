import { combineReducers } from "redux"
import { CartReducer } from "./reducers/CartReducer"
import { ProductReducer } from "./reducers/ProductReducer"

export default combineReducers({ CartReducer, ProductReducer })
