import React, { useState } from "react";

const FuncComponentOne = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Functional Component: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
};

export default FuncComponentOne;
