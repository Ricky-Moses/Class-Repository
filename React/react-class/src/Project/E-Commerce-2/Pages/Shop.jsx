import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/Context";
import Card from "../Component/Card";

const Shop = () => {
  const { store } = useContext(GlobalContext);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentProductTitle, setCurrentProductTitle] = useState("");

  useEffect(() => {
    const objKeys = Object.keys(store);
    if (objKeys.length > 0) {
      const firstKey = objKeys[0];
      setCurrentProduct(store[firstKey]);
      setCurrentProductTitle(firstKey)
    }

    console.info(objKeys);
  }, [store]);

  const handleCurrentProduct = (keyObj) => {
    setCurrentProduct(store[keyObj]);
    setCurrentProductTitle(keyObj)
  };

  // console.info(currentProduct)
  return (
    <>
      <section className="p-2 flex flex-col gap-3">
        <nav>
          <ul className="flex items-center gap-5 ">
            {Object.keys(store).map((item) => (
              <li
                key={item}
                className="capitalize"
                onClick={() => handleCurrentProduct(item)}
              >
                {item.split("_").join(" ")}
              </li>
            ))}
          </ul>
        </nav>
        <h1 className="text-2xl text-center font-bold capitalize">{currentProductTitle.split("_").join(" ")}</h1>
        <div className="grid grid-cols-4 gap-5">
          <Card product={currentProduct} />
        </div>
      </section>
    </>
  );
};

export default Shop;
