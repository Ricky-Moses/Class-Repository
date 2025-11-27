import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "../Component/Card";

const Shop = () => {
  const { store } = useContext(GlobalContext);
  // const firstKey = Object.keys(store)[0];
  const [currentProduct, setCurrentProduct] = useState([]);
  const [currentProductTitle, setCurrentProductTitle] = useState("");

  useEffect(() => {
    const storeKeys = Object.keys(store);
    if (storeKeys.length > 0) {
      const firstKey = storeKeys[0];
      setCurrentProduct(store[firstKey]);
      setCurrentProductTitle(firstKey)
    }
  }, [store]);
  const handleItem = (data) => {
    setCurrentProduct(store[data]);
    setCurrentProductTitle(data);
  };

  // console.info(currentProduct);

  return (
    <>
      <section>
        <nav>
          <ul className="flex items-center gap-5 p-2  overflow-x-auto">
            {Object.keys(store)?.map((item, idx) => (
              <li
                key={idx}
                className="capitalize"
                onClick={() => handleItem(item)}
              >
                {item.split("_").join(" ")}
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-center p-1">
          <h1 className="font-bold text-2xl capitalize">{currentProductTitle.split("_").join(" ")}</h1>
        </div>
      </section>
      {currentProduct.length > 0 && <Card product={currentProduct} />}
    </>
  );
};

export default Shop;
