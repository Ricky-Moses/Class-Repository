import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Shop = () => {
  const { store } = useContext(GlobalContext);
  console.info(store);
  return <div>Shop</div>;
};

export default Shop;
