import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Cart from './components/CartContainer/CartContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from './context/cartContext';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import CheckoutEnd from './components/CheckoutEnd/CheckoutEnd';




function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={
            <ItemListContainer/>
        }/>
                <Route path='/Item/:id' element={
            <ItemDetailContainer/>
        }/>
        <Route path="/Cat/:cat" element={
            <ItemListContainer/>
        }/>
        <Route path='/Cart' element={<Cart/>}/>

        <Route path="/checkoutEnd/:userId" element={<CheckoutEnd/>}/>
        <Route path="/checkout" element={<Checkout/>}/>

        
      </Routes>
      <Footer/>

        
      </BrowserRouter>
      </CartContextProvider>
      
    </div>
  );
}

export default App;
