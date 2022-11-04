import React, { useState, useEffect } from "react";
import { getSingleData } from "../../Services/firestore";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

//-------------------------------------------------------------------------------------------------------//

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const id = useParams().id;

  useEffect(() => {
    getSingleData(id).then((res) => {
      setIsLoading(false);
      setData(res);
    });
  }, [id]);

  //-------------------------------------------------------------------------------------------------------//

  return (
    <div>
      {isLoading ? <Loader/> : <ItemDetail item={data} />}
    </div>
  );
}
//-------------------------------------------------------------------------------------------------------//
export default ItemDetailContainer;
