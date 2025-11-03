import React, { useEffect, useState } from "react";
import Card from "../../Component/Card";

const PortfolioCard = () => {
  const [data, setData] = useState({});
  const [activeCategory, setActiveCategory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./card.json");
        const fetchedData = await response.json();
        // console.info(fetchedData);
        setData(fetchedData);

        const firstProduct = Object.keys(fetchedData)[0];
        setActiveCategory(fetchedData[firstProduct]);
        console.info(firstProduct);
        // console.info(data)
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  const handleCategory = (key) => {
    const selectedProduct = data[key];
    console.info(key);
    console.info(selectedProduct);
    setActiveCategory(selectedProduct);
  };

  return (
    <>
      <div className="flex justify-center ">
        <nav className="w-4/6">
          <ul className="flex items-center justify-around">
            {Object.keys(data).map((productKey) => (
              <li
                key={productKey}
                onClick={() => handleCategory(productKey)}
                className="capitalize"
              >
                {productKey}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Card category={activeCategory} />
    </>
  );
};

export default PortfolioCard;
