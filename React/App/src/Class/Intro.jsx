import React, { useState } from "react";

const Intro = ({ title, menuList }) => {
//   console.info(menuList)
  const [count, setCount] = useState(0);
  return (
    <>
      <header>
        <div>
          <h1>{title}</h1>
        </div>

      </header>
    </>
  );
};

export default Intro;
