import React from 'react'
import "./Item.css";


//-------------------------------------------------------------------------------------------------------//
function Item(props) {


//-------------------------------------------------------------------------------------------------------//
  return (
    <div key={props.id} id="flexContainer">
        <img id='itemPicture' src={props.picture} alt="" />
        <h1 className='itemTexto' id={'itemTittle'}>{props.tittle}</h1>
        <h1 className='itemTexto' id='itemDescription'>{props.description}</h1>
        {props.count && <h1 className='itemTexto' id="itemCount">Cantidad: {props.count}</h1>}
        <h1 className='itemTexto' id='itemPrice'>${props.price}</h1>
        <div>
          {props.addOn}
        </div>
        
    </div>
  )
}
//-------------------------------------------------------------------------------------------------------//
export default Item