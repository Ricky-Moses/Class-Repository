import React, { useContext } from "react";
import { GlobalContextOne } from "../../Context/GlobalContextOne";

const Gadgets = () => {
  const { store } = useContext(GlobalContextOne);
  console.info(store)
  return <div>Gadgets</div>;
};

export default Gadgets;
