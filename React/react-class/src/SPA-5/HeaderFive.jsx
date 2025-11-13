import React from "react";
import { Outlet } from "react-router-dom";

const HeaderFive = () => {
  return (
    <>
      <header className="flex items-center justify-between p-3!">
        <div>
          <h1>Router Provider</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default HeaderFive;
