import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="p-5! flex items-center gap-3">
        <button className="border" onClick={() => navigate("/about/img")}>Image</button>
        <button className="border" onClick={() => navigate("/about/text")}>Content</button>
      </div>
      <Outlet />
    </>
  );
};

export default About;
