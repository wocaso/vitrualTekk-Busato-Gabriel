import React,{useContext} from 'react'
import {cartContext} from "../../context/cartContext"
import ItemCart from '../ItemCart/ItemCart';
import CartPrice from '../CartPrice/CartPrice';
import ButtonReturnFromCart from '../ButtonReturnFromCart/ButtonReturnFromCart';



function Cart() {
  const context = useContext(cartContext);
  const {cart} = context;
  let totalPrice = 0;
  return (
    <div>
          <div id='ItemListFlex'>
        {cart.map((item)=>{
          totalPrice += (item.price*item.count)
            return(
              <div  key={item.id}>
                <ItemCart id={item.id} tittle={item.tittle} description={item.description} price={item.price} picture={item.picture} count={item.count} stock={item.stock}/>
                

              </div>
                

            );
        })}

    </div>
    {totalPrice > 0 ? <CartPrice total={totalPrice}/> :<ButtonReturnFromCart/>}   
    </div>
  )
}

export default Cart