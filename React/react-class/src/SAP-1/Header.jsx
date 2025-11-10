import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-2!">
        <div>
          <h1>Router</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
