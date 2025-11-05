import { useRef, useState } from "react";

export const Controlled = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
    console.info("Count: ", count);
  };

  console.info("Component rendering: useState");
  return (
    <>
      <h1 className="">Controlled Component: {count}</h1>
      <button onClick={handleCount}>Click</button>
    </>
  );
};

export const UnControlled = () => {
  const countRef = useRef(0);
  const handleCount = () => {
    countRef.current += 1;
    console.info("Count: ", countRef.current);

    
  };

  console.info("Component rendering: useRef");

  return (
    <>
      <h1 className="">Controlled Component: {countRef.current}</h1>
      <button onClick={handleCount}>Click</button>
    </>
  );
};
