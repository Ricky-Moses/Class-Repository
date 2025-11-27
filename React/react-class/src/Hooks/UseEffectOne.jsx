import React, { useEffect, useState } from "react";

const UseEffectOne = () => {
  const [count, setCount] = useState(0);
  const [store, setStore] = useState({});
  console.info("OUTSIDE Render!", count);

  useEffect(() => {
    // console.info("INSIDE Render", count);
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setStore(data)
    //   console.info(data);
    };
    fetchData();
  }, []);

  console.info(store)
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default UseEffectOne;
