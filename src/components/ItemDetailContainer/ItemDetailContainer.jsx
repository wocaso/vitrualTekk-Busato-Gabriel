import React,{useState, useEffect} from 'react'
import {getSingleData} from "../../Services/mockApi"
import ItemDetail from '../ItemDetail/ItemDetail';

function ItemDetailContainer() {
    let[data, setData]= useState({});

    useEffect(()=>{
        getSingleData().then((res) => setData(res))
    },[])
  return (
    <ItemDetail tittle ={data.tittle} picture={data.picture} description={data.description} price={data.price}/>
  )
}

export default ItemDetailContainer