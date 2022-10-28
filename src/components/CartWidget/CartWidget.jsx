import React,{useContext} from 'react'
import "./CartWidget.css"
import img from "./Carritoimg.png"
import {cartContext} from "../../context/cartContext"
import {Link} from "react-router-dom";
//-------------------------------------------------------------------------------------------------------//
function CartWidget() {
  const context = useContext(cartContext);
  const {getTotalItemInCart} = context;
//-------------------------------------------------------------------------------------------------------//
  return (
    <Link to="/Cart" style={{ textDecoration: 'none', color: "black" }}>
    <div id="CartWidgetContainer">   
      <h1 id="CartWidgetCount">{getTotalItemInCart()}</h1>
      <img src={img} alt="Icono de carrito" style={{width: 80, height:80 }}/>
    </div>
    </Link>
  )
}
//-------------------------------------------------------------------------------------------------------//
export default CartWidget