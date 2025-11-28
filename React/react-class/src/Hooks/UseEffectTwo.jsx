import React, { useEffect, useState } from "react";
import axios from "axios";

const UseEffectTwo = () => {
  // npm i axios
  const [store, setStore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://mimic-server-api.vercel.app/todos"
        );
        setStore(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <ul className=" flex flex-col gap-3 w-1/2 p-3">
        {store.length > 0 ? (
          store.map((item) => (
            <li className="flex items-center gap-5">
              <div>{item.id}</div>
              <div className="flex-1">{item.task}</div>
              <div>{item.completed ? "Task Finished" : "Task Pending"}</div>
            </li>
          ))
        ) : (
          <li></li>
        )}
      </ul>
    </>
  );
};

export default UseEffectTwo;
