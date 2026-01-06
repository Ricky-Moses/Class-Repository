import React, { useState } from "react";

const Intro = ({ name, list }) => {
  // console.info(props)
  // const [count, setCount] = useState(0)
  return (
    <>
      {/* <h1 className="">{name} {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button> */}
      <header className="flex items-center justify-between p-2">
        <div>
          <h1>{name}</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-3">
            {list.map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Intro;
