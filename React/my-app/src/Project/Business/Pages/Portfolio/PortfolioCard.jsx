import React, { useEffect, useState } from "react";
import Card from "../../Component/Card";

const menuList = [
  {
    id: 1,
    name: "All Work",
    label: "allWork",
  },
  {
    id: 2,
    name: "Branding",
    label: "branding",
  },
  {
    id: 3,
    name: "Marketing",
    label: "marketing",
  },
  {
    id: 4,
    name: "Planning",
    label: "planning",
  },
  {
    id: 5,
    name: "Research",
    label: "research",
  },
];

const PortfolioCard = () => {
  const [data, setData] = useState({});
  const [activeCategory, setActiveCategory] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./card.json");
        const fetchedData = await response.json();
        // console.info(fetchedData);
        setData(fetchedData);
        // console.info(data)
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center ">
        <nav className="w-4/6">
          <ul className="flex items-center justify-around">
            {menuList?.map((li) => (
              <li key={li.id}>{li.name}</li>
            ))}
          </ul>
        </nav>
      </div>
      <Card />
    </>
  );
};

export default PortfolioCard;
