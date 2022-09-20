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

    function onAdd(){
        //Agrego la consiga que plantea el ejercicio, pero carece de utilidad por el momento.
        if(count<=props.stock){
                alert(count)     
        }      
    }
  return (
    <div>
    <div className='container'>
     <div className='containerCount'>
            <button onClick={addCount}>+</button>
            <span>{count}</span>
            <button onClick={reducceCount}>-</button>
      </div>
      <button id="btnAgregar" onClick={onAdd}>Agregar al carrito</button>
    </div>
      
    </div>
    
  )
}

export default ItemCount