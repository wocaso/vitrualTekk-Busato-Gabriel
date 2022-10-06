import {useState, createContext} from 'react'


const cartContext = createContext();


export default function CartContextProvider({children}){
    const [cart, setCart] = useState([]);


    function addItem(item, count ){
        if(isInCart(item.id)){
            let newCart = cart.map((itemMap) => {
                if(itemMap.id === item.id){
                    itemMap.count += count;
                    return itemMap;
                }else{
                    return itemMap;
                }
            })
            setCart(newCart);;
        }else{
            let newCart = cart.map((item) => item);
            newCart.push({...item, count})
            setCart(newCart);
        }                 
      }
    function isInCart(itemId){
        let found = cart.some(item => item.id === itemId)
        return found;

    }

    function getTotalItemInCart(){
        let total = 0;
        cart.forEach(item => {
            total += item.count;
        })
        return total;
    }


//aun no posee utlidad.
    function removeItem(itemId){
        for (let i = 0; i<= cart.length; i++) {
            if(cart[i].id===itemId){      
                let newCart = cart.map((item) => item);     
                newCart.splice(i, 1);
                setCart(newCart);
            }
            
        }
    }

    function clearCart(){
        let newCart = []
        setCart(newCart);
    }

    return (
        <cartContext.Provider value={{cart, addItem, removeItem, isInCart, clearCart, getTotalItemInCart}}>{children}</cartContext.Provider> 
    );
}

export {cartContext};