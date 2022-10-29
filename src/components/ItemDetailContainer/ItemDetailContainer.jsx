import React, { useState, useEffect } from "react";
import { getSingleData } from "../../Services/firestore";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";

//-------------------------------------------------------------------------------------------------------//

function ItemDetailContainer() {
  const [data, setData] = useState({});
  const id = useParams().id;

  useEffect(() => {
    getSingleData(id).then((res) => setData(res));
  }, [id]);

  //-------------------------------------------------------------------------------------------------------//

  return <ItemDetail item={data} />;
}
//-------------------------------------------------------------------------------------------------------//
export default ItemDetailContainer;
