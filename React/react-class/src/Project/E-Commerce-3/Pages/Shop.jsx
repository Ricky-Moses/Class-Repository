import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const Shop = () => {
  const { store } = useContext(GlobalContext);
  console.info(store)
  return <div>Shop</div>;
};

export default Shop;
