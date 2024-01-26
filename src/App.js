import "./App.css"
import { addToCart, emptyCart, removeFromCart } from "./redux/actions/CartAction"
import { useDispatch } from "react-redux"
import Header from "./components/header"
import { getProducts } from "./redux/actions/ProductAction"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
function App() {
  const [firstTime, setFirstTime] = useState(true)
  const dispatch = useDispatch()

  const { ProductReducer } = useSelector((state) => state)

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false)
      dispatch(getProducts())
    }
  }, [dispatch, firstTime])

  return (
    <div className="wrapper">
      <Header />
      <button
        onClick={() => {
          dispatch(emptyCart())
        }}
      >
        Empty
      </button>
      <div className="product-container">
        {ProductReducer?.length > 0
          ? ProductReducer.map((product, index) => {
              return (
                <div className="product-item" key={index}>
                  <img src={product.photo} alt={product.name} />
                  <div>Name: {product.name}</div>
                  <div>Color: {product.color}</div>
                  <div>Brand: {product.brand}</div>
                  <div>Price: {product.price}</div>
                  <div>Category: {product.category}</div>

                  <button
                    onClick={() => {
                      dispatch(addToCart(product))
                    }}
                  >
                    Add
                  </button>
                  <button
                    onClick={() => {
                      dispatch(removeFromCart(product.id))
                    }}
                  >
                    Remove
                  </button>
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default App
