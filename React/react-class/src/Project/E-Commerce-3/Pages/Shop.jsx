import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/Context";
import Card from "../Component/Card";

const Shop = () => {
  const { store } = useContext(GlobalContext);
  const [currentProduct, setCurrentProduct] = useState([]);

  const handleCurrentProduct = (i) => {
    setCurrentProduct(store[i]);
  };

  return (
    <>
      <section className="p-2 flex flex-col gap-3">
        <nav>
          <ul className="flex gap-3 overflow-x-auto">
            {Object.keys(store).map((i) => (
              <li
                onClick={() => handleCurrentProduct(i)}
                key={i}
                className="capitalize"
              >
                {i.split("_").join(" ")}
              </li>
            ))}
          </ul>
        </nav>
        <div className="grid grid-cols-4 gap-4">
          <Card product={currentProduct} />
        </div>
      </section>
    </>
  );
};

export default Shop;
