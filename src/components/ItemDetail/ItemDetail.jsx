import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import ButtonCounter from './ButtonCounter/ButtonCounter';




function ItemDetail(props) {
  let [onAddConfirm, setOnAddConfirm] = useState(0);

  function addedToCart(count){
      setOnAddConfirm(count)
    
  }



  return (
    <div id="itemDetailFlex">
      <div id='itemDetailGrid'>
      <h1 className='itemTexto' id='itemDetailTittle'>{props.tittle}</h1>
      <img id='itemDetailPicture'  src={props.picture} alt="" />
      <h1 className='itemTexto' id='itemDetailDescription'>{props.description}</h1>
      <h1 className='itemTexto' id='itemDetailPrice'>${props.price}</h1>
      <div id='ItemCountContainer'>
        {onAddConfirm === 0 ? <ItemCount initial={1} stock={props.stock} onAdd={addedToCart}/> : <ButtonCounter link="/Cart"/>}


        </div>      
      
    </div>
    </div>
    
    

  )
}

export default ItemDetail