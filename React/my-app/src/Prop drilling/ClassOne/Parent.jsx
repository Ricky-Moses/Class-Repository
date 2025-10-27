import React from "react";
import GrandChild from "./GrandChild";

const Parent = ({ drills }) => {
  console.info(drills);
  return (
    <div>
      Parent
      <GrandChild drills={drills} />
    </div>
  );
};

export default Parent;
