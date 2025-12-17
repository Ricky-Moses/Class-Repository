import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex items-center p-3 justify-between">
        <div>
          <h1 className="text-2xl font-bold">Router Provider</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? "text-sky-600" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive ? "text-sky-600" : ""}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/skill"}
                className={({ isActive }) =>
                  `${isActive ? "text-sky-600" : ""}`
                }
              >
                Skill
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  `${isActive ? "text-sky-600" : ""}`
                }
              >
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? "text-sky-600" : ""}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
