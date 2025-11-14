import React, { useEffect, useState } from "react";

const FetchTwo = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://mimic-server-api.vercel.app/todos");
        const data = await res.json();
        setStore(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  //   console.info(store)
  return (
    <>
      <ul>
        {store.map((item) => (
          <li key={item.id} className="p-2! flex items-center gap-4">
            <div>{item.id}</div>
            <div>{item.task}</div>
            <div
              style={{ color: item.completed ? "greenyellow" : "orangered" }}
            >
              {item.completed ? "Completed" : "Not Completed"}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchTwo;
