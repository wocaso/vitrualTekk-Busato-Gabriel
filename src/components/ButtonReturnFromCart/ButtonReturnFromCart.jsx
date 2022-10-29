import React from "react";
import "./ButtonReturnFromCart.css";
import ButtonLink from "../ButtonLink/ButtonLink";
//-------------------------------------------------------------------------------------------------------//
function ButtonReturnFromCart() {
  return (
    <div id="ButtonReturnFromCartFlexContainerFlex">
      <div id="ButtonReturnFromCartFlexContainer">
        <h1 className="texto" style={{ marginTop: "80px" }}>
          Ups, Parece que no tienes nada en tu carrito...
        </h1>
        <ButtonLink link="/" text="Regresar a la tienda" />
      </div>
    </div>
  );
}
//-------------------------------------------------------------------------------------------------------//

export default ButtonReturnFromCart;
