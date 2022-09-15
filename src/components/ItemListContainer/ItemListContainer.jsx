import React from 'react'
import "./ItemListContainer.css";

function ItemListContainer(props) {
    let {greeting} = props;
  return (
    <div>
        <h1 class="texto">{greeting}</h1>
    </div>
  )
}

export default ItemListContainer