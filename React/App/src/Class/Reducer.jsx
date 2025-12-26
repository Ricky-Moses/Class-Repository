import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count > 0 ? state.count - 1 : 0 };
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <div className="p-5">
        <h1>{state.count}</h1>
        <button className="" onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button className="" onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Reducer;
