import React from 'react'
import "./CartPrice.css"

function CartPrice(props) {
    const {total} = props;
  return (
    <div id="CartPriceContainer">
        <h1 id="textoCartPrice" className='texto'>Monto total </h1>
        <h1 className='texto' id="itemPrice">${total}</h1>

    </div>
  )
}

export default CartPrice