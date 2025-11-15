import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HeaderSix = () => {
  return (
    <>
      <header className="flex items-center justify-between p-3!">
        <div>
          <h1 className="text-2xl font-bold">Router Provider</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            <li>
              <NavLink
                className={({isActive}) => (isActive ? "text-blue-500" : "text-black")}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({isActive}) => (isActive ? "text-blue-500" : "text-black")}
                to={"/about"}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({isActive}) => (isActive ? "text-blue-500" : "text-black")}
                to={"/skill"}
              >
                Skill
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default HeaderSix;
