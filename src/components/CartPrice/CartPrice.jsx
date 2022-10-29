import React from "react";
import "./CartPrice.css";
import { Link } from "react-router-dom";
//-------------------------------------------------------------------------------------------------------//
function CartPrice(props) {
  //-------------------------------------------------------------------------------------------------------//
  const { total } = props;
  //-------------------------------------------------------------------------------------------------------//
  return (
    <div id="CartPriceContainer">
      <h1 id="textoCartPrice" className="texto">
        Monto total{" "}
      </h1>
      <h1 className="texto" id="itemPrice">
        ${total}
      </h1>
      <Link to="/checkout">
        <button>Ir a pagar</button>
      </Link>
    </div>
  );
}
//-------------------------------------------------------------------------------------------------------//
export default CartPrice;
