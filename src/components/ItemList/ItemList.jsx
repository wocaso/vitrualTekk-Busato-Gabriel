import React, {useState, useEffect} from 'react'
import Item from '../Item/Item'
import getData from "../../Services/mockApi"
import "./ItemList.css"


function ItemList() {
    let [data, setData] = useState([]);
    
    useEffect(()=>{
        getData().then((respuesta) =>{ 
            setData(respuesta);
        })
    },[])
  return (
    <div id='ItemListFlex'>
        {data.map((item)=>{
            return(
                <Item key={item.id} tittle={item.tittle} description={item.description} price={item.price} picture={item.picture}/>

            );
        })}
    </div>
  )
}

export default ItemList