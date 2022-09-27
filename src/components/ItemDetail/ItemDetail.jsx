import React from 'react'
import "./ItemDetail.css"

function ItemDetail(props) {
  return (
    <div id="itemDetailFlex">
      <div id='itemDetailGrid'>
      <h1 className='itemTexto' id='itemDetailTittle'>{props.tittle}</h1>
      <img id='itemDetailPicture'  src={props.picture} alt="" />
      <h1 className='itemTexto' id='itemDetailDescription'>{props.description}</h1>
      <h1 className='itemTexto' id='itemDetailPrice'>${props.price}</h1>
      <button id="itemDetailBtnComprar">Comprar</button>
    </div>
    </div>
    
    

  )
}

export default ItemDetail