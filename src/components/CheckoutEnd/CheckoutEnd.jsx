import React from 'react'
import {useParams} from "react-router-dom"
import "./CheckoutEnd.css"

//-------------------------------------------------------------------------------------------------------//

function CheckoutEnd() {
//-------------------------------------------------------------------------------------------------------//
    const id = useParams().userId;
//-------------------------------------------------------------------------------------------------------//
  return (
    <div id='CheckoutEndContainerFlex'>
      <div id='CheckoutEndContainer'>
        <h1 className='texto'>¡Gracias por su compra!</h1>
        <h2 className='texto'>Su id de compra es: ${id}</h2>
    </div>

    </div>
  )
}
//-------------------------------------------------------------------------------------------------------//

export default CheckoutEnd