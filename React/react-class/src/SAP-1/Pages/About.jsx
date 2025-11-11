import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <button className="p-2! border" onClick={() => navigate("/about/img_1")}>Img-1</button>
      <button className="p-2! border" onClick={() => navigate("/about/img_2")}>Img-2</button>

      <Outlet />
    </>
  );
};

export default About;
