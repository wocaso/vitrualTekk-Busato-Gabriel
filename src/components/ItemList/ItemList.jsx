import React from 'react'
import Item from '../Item/Item'

import "./ItemList.css"

//-------------------------------------------------------------------------------------------------------//

function ItemList(props) {

  return (
    <div id='ItemListFlex'>
        {props.items.map((item)=>{
          
            return(
                <Item id={item.id} key={item.id} tittle={item.tittle} description={item.description} price={item.price} picture={item.picture}/>

            );
        })}
    </div>
  )
}

//-------------------------------------------------------------------------------------------------------//
export default ItemList