import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const Shop = () => {
  const { store } = useContext(GlobalContext);
  console.info(store);
  return (
    <>
      <nav>
        <ul className="flex items-center gap-5 p-2">
          {Object.keys(store).map((item) => (
            <li className="capitalize">{item.split("_")}</li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Shop;
