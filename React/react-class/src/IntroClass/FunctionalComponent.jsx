import React, { useState } from "react";

const arrOfList = ["Home", "About", "Skill", "Project", "Contact"];

const FunctionalComponent = ({ user, count, setCount }) => {
  console.info(user);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <ul>
        {arrOfList.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>
    </>
  );
};

export default FunctionalComponent;
