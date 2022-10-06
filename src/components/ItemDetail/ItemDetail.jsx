import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import ButtonCounter from './ButtonCounter/ButtonCounter';
import {cartContext} from "../../context/cartContext"




function ItemDetail({item}) {
  let [onAddConfirm, setOnAddConfirm] = useState(0);
  const {  addItem, getTotalItemInCart} = useContext(cartContext);

  function addedToCart(count){
      setOnAddConfirm(count)
      addItem(item, count)
  }



  return (
    <div id="itemDetailFlex">
      <div id='itemDetailGrid'>
      <h1 className='itemTexto' id='itemDetailTittle'>{item.tittle}</h1>
      <img id='itemDetailPicture'  src={item.picture} alt="" />
      <h1 className='itemTexto' id='itemDetailDescription'>{item.description}</h1>
      <h1 className='itemTexto' id='itemDetailPrice'>${item.price}</h1>
      <div id='ItemCountContainer'>
        {onAddConfirm === 0 ? <ItemCount initial={1} stock={item.stock} onAdd={addedToCart}/> : <ButtonCounter link="/Cart"/>}


        </div>      
      
    </div>
    </div>
    
    

  )
}

export default ItemDetail