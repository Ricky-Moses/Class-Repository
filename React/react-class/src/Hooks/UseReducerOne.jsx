import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
  }
};

const UseReducerOne = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <h1>Use Reduce Count: {state.count}</h1>
      <div className="">
        <button
          className="p-1! border ms-1!"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increase
        </button>
        <button className="p-1! border ms-1!">Decrease</button>
        <button className="p-1! border ms-1!">Reset</button>
      </div>
    </>
  );
};

export default UseReducerOne;
