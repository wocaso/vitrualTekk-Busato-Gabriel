import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import getData from "../../Services/mockApi"



function ItemListContainer() {
      let [data, setData] = useState([]);
    
    useEffect(()=>{
        getData().then((respuesta) =>{ 
            setData(respuesta);
        })
    },[])
  return (
    <div>
        <ItemList items={data}/>

    </div>
  )
}

export default ItemListContainer