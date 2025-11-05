import React, { useRef, useState } from "react";

export const ControlledOne = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.info("Count: ", count);
  };

  console.info("Component rendering: useState");
  return (
    <>
      <h1>Controlled: {count}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export const UnControlledOne = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;  
    console.info("Count: ", countRef.current);
  };

  console.info("Component rendering: useRef");
  return (
    <>
      <h1>UnControlledOne: {countRef.current}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  );
};
