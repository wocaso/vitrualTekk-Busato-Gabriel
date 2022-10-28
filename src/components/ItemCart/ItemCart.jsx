import React,{useContext} from 'react'
import {cartContext} from "../../context/cartContext";
import Item from "../Item/Item"


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

      <Item id={props.id} key={props.id} tittle={props.tittle} description={props.description} price={props.price * props.count} picture={props.picture} count={props.count} addOn={
      <div id='ItemCartButtonContainer'>
          {props.stock > props.count ? <button onClick={plusOne}>+</button> : <button onClick={plusOne} disabled>+</button>}
         <button id="removeFromCartButton" onClick={removeFromCart}>Quitar</button>
         {props.count > 1 ? <button onClick={minusOne}>-</button> : <button onClick={minusOne} disabled>-</button>  }
        </div>
      }/>
  )
}

//-------------------------------------------------------------------------------------------------------//

export default ItemCart