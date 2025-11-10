import React from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-2!">
        <div>
          <h1>Router</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-2">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/skill"}>Skill</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
