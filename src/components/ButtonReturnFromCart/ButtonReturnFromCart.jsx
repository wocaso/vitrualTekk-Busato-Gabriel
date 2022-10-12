import React from 'react'
import "./ButtonReturnFromCart.css"
import {Link} from "react-router-dom";

function ButtonReturnFromCart() {
  return (
  <div>
    
    <h1 className='texto'  style={{marginTop: "80px" }}>
        Ups, Parece que no tienes nada en tu carrito...
    </h1>
    <Link to="/">
        <button>Regresar a la tienda</button>
    </Link>

  </div>
    
  )
}

export default ButtonReturnFromCart