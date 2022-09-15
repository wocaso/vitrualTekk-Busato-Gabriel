import React from 'react'
import img from "./Carritoimg.png"
function CartWidget() {
  return (
    <div>
        <img src={img} style={{width: 80, height:80 }}/>
    </div>
  )
}

export default CartWidget