import React, { useState } from "react";

const ConditionOne = () => {
  const [isColor, setIsColor] = useState(false);

  return (
    <>
      <h1
        // style={{ color: isColor ? "greenyellow" : "red" }}
        className={`${isColor ? "text-lime-400" : "text-amber-700"} text-3xl`}
      >
        Heading
      </h1>
      <button onClick={() => setIsColor(!isColor)}>Click</button>
    </>
  );
};

export default ConditionOne;
