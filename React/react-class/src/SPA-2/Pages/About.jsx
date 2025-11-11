import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/about/img_1")}>Open About</button>
      <Outlet />
    </>
  );
};

export default About;
