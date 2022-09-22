import React from 'react'
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';



function ItemListContainer(props) {
    const {greeting} = props;
  return (
    <div>
        <h1 className="texto">{greeting}</h1>
        <ItemList/>

    </div>
  )
}

export default ItemListContainer