import { useRef, useState } from "react";

export const ControlledRender = () => {
    const [count, setCount] = useState(0)

    const handleCount = () => {
        setCount(prev => prev + 1)
        console.info("Count: ", count)
    }

    console.info("Controlled Component")
  return (
    <>
      <h1 className="text-4xl">Controlled Render: {count}</h1>
      <button className="border" onClick={handleCount}>Click</button>
    </>
  );
};

export const UnControlledRender = () => {
    const countRef = useRef(0)
    const handleCount = () => {
        countRef.current += 1
        

        console.info("Count: ", countRef.current)
    }

     console.info("Uncontrolled Component")
  return (
    <>
      <h1 className="text-4xl">Uncontrolled Render: {countRef.current}</h1>
      <button className="border" onClick={handleCount}>Click</button>
    </>
  );
};
