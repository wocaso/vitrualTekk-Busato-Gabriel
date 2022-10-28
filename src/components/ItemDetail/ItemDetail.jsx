import React from 'react'
import "./ItemDetail.css"

import { useState, useContext } from "react"
import {cartContext} from "../../context/cartContext"

import ItemCount from "../ItemCount/ItemCount"
import ButtonLink from '../ButtonLink/ButtonLink';


//-------------------------------------------------------------------------------------------------------//

function ItemDetail({item}) {
  const [onAddConfirm, setOnAddConfirm] = useState(0);
  const {  addItem } = useContext(cartContext);

  function addToCart(count){
      setOnAddConfirm(count)
      addItem(item, count)
  }

//-------------------------------------------------------------------------------------------------------//

  return (
    <div id="itemDetailFlex">
      <div id='itemDetailGrid'>
      <h1 className='itemTexto' id='itemDetailTittle'>{item.tittle}</h1>
      <img id='itemDetailPicture'  src={item.picture} alt="" />
      <h1 className='itemTexto' id='itemDetailDescription'>{item.description}</h1>
      <h1 className='itemTexto' id='itemDetailPrice'>${item.price}</h1>
      <div id='ItemCountContainer'>

        {onAddConfirm === 0 ? <ItemCount initial={1} stock={item.stock} id={item.id} onAdd={addToCart} text="Agregar al carrito"/> : <ButtonLink text="Finalizar Compra" link="/Cart"/>}
        
        </div>      
      
    </div>
    </div>
    
  )
}

export default ItemDetail