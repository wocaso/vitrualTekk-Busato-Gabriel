import React from 'react';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';


function NavBar(){
    return(
        <nav className="NavBar">
            <h1 className="elementNav brandNav">V.T</h1>
            <a  className="elementNav anchorNav" href="">Inicio</a>
            <a className="elementNav anchorNav" href="">Consolas</a>
            <a className="elementNav anchorNav" href="">Perifericos</a>
            <a className="elementNav anchorNav" href="">Juegos</a>
            <CartWidget/>
        </nav>

    );
}

export default NavBar;