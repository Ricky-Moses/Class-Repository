import React, { useRef } from "react";

const Ref = () => {
  const countRef = useRef(0);

  const handleCount = () => {
    countRef.current += 1 
  };
  return (
    <>
      <h1>{countRef.current}</h1>
      <button onClick={handleCount}>Click</button>
    </>
  );
};

export default Ref;
