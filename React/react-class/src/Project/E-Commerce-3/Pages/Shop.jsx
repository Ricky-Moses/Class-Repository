import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/Context";
import Card from "../Component/Card";

const Shop = () => {
  const { store } = useContext(GlobalContext);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentProductTitle, setCurrentProductTitle] = useState("");

  useEffect(() => {
    const storedKey = Object.keys(store);
    if (storedKey.length > 0) {
      const firstKey = storedKey[0];
      setCurrentProduct(store[firstKey]);
      setCurrentProductTitle(firstKey);
    }
  }, [store]);

  const handleCurrentProduct = (i) => {
    setCurrentProduct(store[i]);
    setCurrentProductTitle(i);
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
        <h1 className="text-2xl text-center font-bold capitalize">{currentProductTitle.split("_").join(" ")}</h1>
        <div className="grid grid-cols-4 gap-4">
          <Card product={currentProduct} />
        </div>
      </section>
    </>
  );
};

export default Shop;
