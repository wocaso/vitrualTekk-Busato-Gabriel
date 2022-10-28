import React,{useContext} from 'react'
import {cartContext} from "../../context/cartContext"
import ItemCart from '../ItemCart/ItemCart';
import CartPrice from '../CartPrice/CartPrice';
import ButtonReturnFromCart from '../ButtonReturnFromCart/ButtonReturnFromCart';
//-------------------------------------------------------------------------------------------------------//
function Cart() {
//-------------------------------------------------------------------------------------------------------//
  const context = useContext(cartContext);
  const {cart, getTotalPriceInCart} = context;
//-------------------------------------------------------------------------------------------------------//
  return (
    <div>
          <div id='ItemListFlex'>
        {cart.map((item)=>{
            return(
              <div  key={item.id}>
                <ItemCart id={item.id} tittle={item.tittle} description={item.description} price={item.price} picture={item.picture} count={item.count} stock={item.stock}/>
              </div>
            );
        })}

    </div>
    {getTotalPriceInCart() > 0 ? <CartPrice total={getTotalPriceInCart()}/> :<ButtonReturnFromCart/>}   
    
    </div>
  )
}
//-------------------------------------------------------------------------------------------------------//
export default Cart