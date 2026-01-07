import React, { useEffect, useState } from "react";

const Effect = () => {
  const [second, setSecond] = useState(0);
  const [isStart, setIsStart] = useState(false);

  //   setInterval(() => {
  //     setSecond((prev) => prev + 1);
  //   }, 1000);

  useEffect(() => {
    let timer;

    if (isStart) {
      timer = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);

      console.info(second);
      return () => clearInterval(timer);
    }
  }, [isStart, second]);

  //   console.info(second)

  return (
    <>
      <h1>Second: {second}</h1>
      <button onClick={() => setIsStart(!isStart)}>Click</button>
    </>
  );
};

export default Effect;
