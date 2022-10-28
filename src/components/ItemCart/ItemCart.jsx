import React,{useContext} from 'react'
import "./ItemCart.css";
import {cartContext} from "../../context/cartContext";

//-------------------------------------------------------------------------------------------------------//

function ItemCart(props) {
  const context = useContext(cartContext);
  const {removeItem, plusOneItem, minusOneItem} = context;
//-------------------------------------------------------------------------------------------------------//
  function removeFromCart(){
    removeItem(props.id)
  }
  function plusOne(){
    plusOneItem(props.id)
  }
  function minusOne(){
    minusOneItem(props.id)
  }
//-------------------------------------------------------------------------------------------------------//
  return (
    <div key={props.id} id="flexContainer">
        <img id='itemPicture' src={props.picture} alt="" />
        <h1 className='itemTexto' id='itemTittle'>{props.tittle}</h1>
        <h1 className='itemTexto' id='itemDescription'>{props.description}</h1>
        <h1 className='itemTexto' id="itemCount">Cantidad: {props.count}</h1>
        <h1 className='itemTexto' id='itemPrice'>${props.price * props.count}</h1>
        <div id='ItemCartButtonContainer'>
          {props.stock > props.count ? <button onClick={plusOne}>+</button> : <button onClick={plusOne} disabled>+</button>}
         <button id="removeFromCartButton" onClick={removeFromCart}>Quitar</button>
         {props.count > 1 ? <button onClick={minusOne}>-</button> : <button onClick={minusOne} disabled>-</button>  }

        </div>
        
    </div>
  )
}

//-------------------------------------------------------------------------------------------------------//

export default ItemCart