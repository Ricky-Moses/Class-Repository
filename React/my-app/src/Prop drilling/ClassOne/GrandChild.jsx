import React from "react";

const GrandChild = ({ drills }) => {
  console.info(drills);
  return (
    <div>
      
      <p>GrandChild: {drills}</p>
    </div>
  );
};

export default GrandChild;
