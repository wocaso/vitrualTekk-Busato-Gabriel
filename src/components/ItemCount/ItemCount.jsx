import React from 'react'
import "./ItemCount.css";



function ItemCount(props) {
    const [count, setCount] = React.useState(props.initial)


    function addCount(){
        if(count<props.stock){
            setCount(count+1);
        }
       
    }
    function reducceCount(){
        if(count>props.initial){
            setCount(count-1);
        }            
    }

  return (
    <div>
    <div id='containerItemCount'>
     <div className='containerCount'>
     {props.stock > count ? <button onClick={addCount}>+</button> : <button disabled onClick={addCount}>+</button> }
            <span>{count}</span>
          {props.initial < count ?  <button onClick={reducceCount}>-</button> : <button  disabled onClick={reducceCount}>-</button> } 
      </div>
      <button id="btnAgregar" onClick={()=> props.onAdd(count)}>Agregar al carrito</button>
    </div>
      
    </div>
    
  )
}

export default ItemCount