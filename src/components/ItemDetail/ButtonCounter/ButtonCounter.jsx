import React from 'react'
import {Link} from "react-router-dom";
import "./ButtonCounter.css"

function ButtonCounter(props) {
  return (
    <div id="ButtonCounterContainer">
        <Link to={props.link}> 
            <button >Finalizar Compra</button>
         </Link>
    </div>
  )
}

export default ButtonCounter