import React,{useState, useEffect} from 'react'
import {getSingleData} from "../../Services/mockApi"
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from "react-router-dom"

function ItemDetailContainer() {
    let[data, setData]= useState({});
    const id = useParams().id;

    useEffect(()=>{
        getSingleData(parseInt(id)).then((res) => setData(res))
    },[id])

  return (
    <ItemDetail item={data}/>
  )
}

export default ItemDetailContainer