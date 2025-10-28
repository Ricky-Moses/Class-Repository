import React, { useState } from "react";

const ConditionalRenderingTwo = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundColor: isTrue ? "#fff" : "#000",
          color: isTrue ? "#000" : "#fff",
        }}
      >
        {isTrue ? <h1>This is True</h1> : <h1>This is False</h1>}
        <h1>Count: {count}</h1>
        <button onClick={() => setIsTrue(true)}>Click True</button>
        <button onClick={() => setIsTrue(false)}>Click False</button>

        <button onClick={() => setIsTrue(!isTrue)}>
          Click to Change Boolean value
        </button>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
          <button
            onClick={() => setCount((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            Decrease
          </button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
        <div>
          <button onClick={() => setIsTrue(!isTrue)}>
            Background Color Change
          </button>
        </div>
      </div>
    </>
  );
};

export default ConditionalRenderingTwo;
