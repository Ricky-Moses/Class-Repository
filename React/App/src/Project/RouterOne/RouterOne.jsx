import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Layouts from "./Layout/Layouts";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Skill from "./Pages/Skill";
import Contact from "./Pages/Contact";
import NotFound from "./Error/NotFound";

const RouterOne = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouterOne;
