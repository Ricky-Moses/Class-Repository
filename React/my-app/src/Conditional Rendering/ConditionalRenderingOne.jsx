import React, { useState } from "react";

const ConditionalRenderingOne = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <div style={{ height: "100vh", background: isTrue ? "#000" : "#fff" }}>
        {isTrue ? (
          <h1 className="">This is True</h1>
        ) : (
          <h6 className="">This is not true</h6>
        )}

        <h1>Count: {count}</h1>

        <button onClick={() => setIsTrue(!isTrue)}>Click</button>
        <button onClick={() => setIsTrue(!isTrue)}>
          Click to Change background color
        </button>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        <button onClick={() => setCount((prev) => prev === 0 ? 0 : prev - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  );
};

export default ConditionalRenderingOne;
