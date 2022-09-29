import React from 'react'
import "./Item.css";
import {Link} from "react-router-dom";


function Item(props) {
const urlItem = `/Item/${props.id}`

  return (
    <div key={props.id} id="flexContainer">
      <Link to={urlItem} style={{ textDecoration: 'none' }}>
        <img id='itemPicture' src={props.picture} alt="" />
        <h1 className='itemTexto' id='itemTittle'>{props.tittle}</h1>
        <h1 className='itemTexto' id='itemDescription'>{props.description}</h1>
        <h1 className='itemTexto' id='itemPrice'>${props.price}</h1>
        
      </Link>

    </div>
  )
}

export default Item