import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

import { getData, getCatData } from "../../Services/firestore";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";

//-------------------------------------------------------------------------------------------------------//

function ItemListContainer() {
  const [data, setData] = useState([]);
  const { cat } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cat === undefined) {
      setIsLoading(true);
      getData().then((respuesta) => {
        setIsLoading(false);
        setData(respuesta);
      });
    } else {
      setIsLoading(true);
      getCatData(cat).then((respuesta) => {
        setIsLoading(false);
        setData(respuesta);
      });
    }
  }, [cat]);

  //-------------------------------------------------------------------------------------------------------//
  return (
    <div>
      {isLoading ? <Loader/> : <ItemList items={data} />}
    </div>
  );
}

//-------------------------------------------------------------------------------------------------------//

export default ItemListContainer;
