import React from "react";

const Header = ({ menuList }) => {
  const title = "React Class";
  return (
    <>
      <header>
        <div className="head-logo">
          <h1>{title}</h1>
        </div>
        <nav>
          <ul>
            {menuList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
