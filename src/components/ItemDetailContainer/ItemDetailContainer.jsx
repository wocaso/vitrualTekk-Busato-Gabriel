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
    <ItemDetail id={data.id} tittle ={data.tittle} picture={data.picture} description={data.description} price={data.price}/>
  )
}

export default ItemDetailContainer