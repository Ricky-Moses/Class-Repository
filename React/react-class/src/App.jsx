import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   Controlled,
//   UnControlled,
// } from "./Controlled_UnControlled/ControlledAndUnControlled";
// import {
//   ControlledOne,
//   UnControlledOne,
// } from "./Controlled_UnControlled/ControlledAndUnControlledOne";
// import Count from "./Controlled_UnControlled/Count";
// import ToDoOne from "./Controlled_UnControlled/ToDoOne";
// import CountOne from "./Controlled_UnControlled/CountOne";
// import ToDoAppOne from "./Project/ToDoAppOne";
import ToDoAppTwo from "./Project/ToDoAppTwo";
// import ToDoAppThree from "./Project/ToDoAppThree";
// import UseReducerOne from "./Hooks/UseReducerOne";
import Header from "./SAP-1/Header";
import Home from "./SAP-1/Pages/Home";
import About from "./SAP-1/Pages/About";
import Skill from "./SAP-1/Pages/Skill";
import NotFound from "./SAP-1/Error/NotFound";

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
      {/* <ToDoAppThree /> */}
      {/* <UseReducerOne /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;
