import React,{useContext} from 'react';
import "./NavBar.css";

import {Link} from "react-router-dom";
import {cartContext} from "../../context/cartContext"

import CartWidget from '../CartWidget/CartWidget';

//-------------------------------------------------------------------------------------------------------//

function NavBar(){
    const context = useContext(cartContext);
    const {getTotalItemInCart} = context;



//-------------------------------------------------------------------------------------------------------//


    return(
        <nav className="NavBar">
            <div id='BrandAndCartContainer'>
            {getTotalItemInCart() > 0 && <CartWidget/>}
            <Link to="/" style={{ textDecoration: 'none' }}> 
                <h1 className="elementNav brandNav">V.T</h1>
            </Link>        
            </div> 
            <Link  className="elementNav anchorNav" to="/">Inicio</Link>
            <Link className="elementNav anchorNav" to="/Cat/Consola">Consolas</Link>
            <Link className="elementNav anchorNav" to="/Cat/Periferico">Perifericos</Link>
            <Link className="elementNav anchorNav" to="/Cat/Juego">Juegos</Link>          
        </nav>

    );
}


//-------------------------------------------------------------------------------------------------------//

export default NavBar;