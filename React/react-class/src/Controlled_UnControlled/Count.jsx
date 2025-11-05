import React, { useEffect, useRef, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = count;
    console.info(count)
  }, [count]);
  return (
    <>
      <h1>Current Count: {count}</h1>
      <h1>Previous Count: {countRef.current}</h1>

      <button
        className="border p-1!"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Click
      </button>
    </>
  );
};

export default Count;
