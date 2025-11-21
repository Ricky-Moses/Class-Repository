import React, { useState } from "react";

const IntroOne = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-3xl">{count}</h1>
      <button onClick={() => setCount(count + 1)} className="">click</button>
    </div>
  );
};

export default IntroOne;
