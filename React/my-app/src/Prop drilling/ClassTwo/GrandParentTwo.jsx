import React from "react";
import ParentTwo from "./ParentTwo";

const GrandParentTwo = ({ drill }) => {
  //   const { drill } = props;
  console.info(drill);
  return (
    <div>
      GrandParentTwo
      <ParentTwo drill={drill} />
    </div>
  );
};

export default GrandParentTwo;
