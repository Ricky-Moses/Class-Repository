import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HeaderOne from "./SPA-2/HeaderOne";
import Home from "./SPA-2/Pages/Home";
import About from "./SPA-2/Pages/About";
import Skill from "./SPA-2/Pages/Skill";
import Project from "./SPA-2/Pages/Project";
import Contact from "./SPA-2/Pages/Contact";
import NotFound from "./SPA-2/Error/NotFound";
import AboutOne from "./SPA-2/About/AboutOne";

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderOne />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path="/about/img_1" element={<AboutOne />} />
            </Route>
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
