import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HeaderFive = () => {
  return (
    <>
      <header className="flex items-center justify-between p-3!">
        <div>
          <h1>Router Provider</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            <li>
              <NavLink
                to={"/"}
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/skill"}
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                className={({ isActive }) => (isActive ? "underline" : "")}
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

export default HeaderFive;
