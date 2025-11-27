import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Card from "../Component/Card";

const Shop = () => {
  const { store } = useContext(GlobalContext);
  // const firstKey = Object.keys(store)[0];
  const [currentProduct, setCurrentProduct] = useState([]);

  // useEffect(() => {
  //   setCurrentProduct(store[firstKey]);
  // }, []);
  const handleItem = (data) => {
    setCurrentProduct(data);
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
                onClick={() => handleItem(store[item])}
              >
                {item.split("_")}
              </li>
            ))}
          </ul>
        </nav>
      </section>
      {currentProduct.length > 0 && <Card product={currentProduct} />}
    </>
  );
};

export default Shop;
