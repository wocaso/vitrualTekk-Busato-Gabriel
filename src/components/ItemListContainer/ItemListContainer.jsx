import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

import { getData, getCatData } from "../../Services/firestore";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

//-------------------------------------------------------------------------------------------------------//

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    if (cat === undefined) {
      getData().then((respuesta) => {
        setData(respuesta);
      });
    } else {
      getCatData(cat).then((respuesta) => {
        setData(respuesta);
      });
    }
  }, [cat]);

  //-------------------------------------------------------------------------------------------------------//
  return (
    <div>
      <ItemList items={data} />
    </div>
  );
}

//-------------------------------------------------------------------------------------------------------//

export default ItemListContainer;
