import React from "react";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

import "./ItemList.css";

//-------------------------------------------------------------------------------------------------------//

function ItemList(props) {
  return (
    <div id="ItemListFlex">
      {props.items.map((item) => {
        const urlItem = `/Item/${item.id}`;
        return (
          <Link key={item.id} to={urlItem} style={{ textDecoration: "none" }}>
            <Item
              id={item.id}
              tittle={item.tittle}
              description={item.description}
              price={item.price}
              picture={item.picture}
            />
          </Link>
        );
      })}
    </div>
  );
}

//-------------------------------------------------------------------------------------------------------//
export default ItemList;
