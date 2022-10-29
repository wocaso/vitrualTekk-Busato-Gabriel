import React from "react";
import { Link } from "react-router-dom";
import "./ButtonLink.css";

//-------------------------------------------------------------------------------------------------------//
function ButtonCounter(props) {
  return (
    <div id="ButtonCounterContainer">
      <Link to={props.link}>
        <button>{props.text}</button>
      </Link>
    </div>
  );
}
//-------------------------------------------------------------------------------------------------------//

export default ButtonCounter;
