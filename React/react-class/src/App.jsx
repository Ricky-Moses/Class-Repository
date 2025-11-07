import React from "react";
import {
  Controlled,
  UnControlled,
} from "./Controlled_UnControlled/ControlledAndUnControlled";
import {
  ControlledOne,
  UnControlledOne,
} from "./Controlled_UnControlled/ControlledAndUnControlledOne";
import Count from "./Controlled_UnControlled/Count";
import ToDoOne from "./Controlled_UnControlled/ToDoOne";
import CountOne from "./Controlled_UnControlled/CountOne";
import ToDoAppOne from "./Project/ToDoAppOne";
import ToDoAppTwo from "./Project/ToDoAppTwo";

const App = () => {
  return (
    <>
      {/* <Controlled /> */}
      {/* <UnControlled /> */}
      {/* <ControlledOne /> */}
      {/* <UnControlledOne /> */}
      {/* <Count /> */}
      {/* <ToDoOne /> */}
      {/* <CountOne /> */}
      {/* <ToDoAppOne /> */}
      <ToDoAppTwo />
    </>
  );
};

export default App;
