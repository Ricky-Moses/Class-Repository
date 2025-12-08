import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-3">
        <div>
          <h1 className="text-2xl">Authentication</h1>
        </div>
        <nav className="">
          <ul className="">
            <li>
              <NavLink to={"/register"}>User 👤</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
