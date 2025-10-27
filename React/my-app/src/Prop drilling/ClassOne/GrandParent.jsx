import React from "react";
import Parent from "./Parent";

const GrandParent = ({ drills }) => {
  console.info(drills);
  return (
    <div>
      GrandParent
      <Parent drills={drills} />
    </div>
  );
};

export default GrandParent;
