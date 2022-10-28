import React,{useState} from 'react'
import "./ItemCount.css";




function ItemCount(props) {
    const [count, setCount] = useState(props.initial)
  return (
    <div>
    <div id='containerItemCount'>
     <div className='containerCount'>
     {props.stock > count ? <button onClick={()=> setCount(count+1)}>+</button> : <button disabled onClick={()=> setCount(count+1)}>+</button> }
            <span>{count}</span>
          {props.initial < count ?  <button onClick={()=> setCount(count-1)}>-</button> : <button  disabled onClick={()=> setCount(count+1)}>-</button> } 
      </div>
      <button id="btnAgregar" onClick={()=> props.onAdd(count)}>{props.text}</button>
    </div>
      
    </div>
    
  )
}

export default ItemCount