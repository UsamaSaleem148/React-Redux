import { useSelector } from "react-redux"

const Header = () => {
  const { CartReducer } = useSelector((state) => state)
  return (
    <div className="header">
      <div className="cart-div">
        <span>{CartReducer.length}</span>
        <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" />
      </div>
    </div>
  )
}

export default Header
