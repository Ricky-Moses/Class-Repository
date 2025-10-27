import React from "react";

const Header = ({ title, menuList }) => {
  console.info(title);
  return (
    <>
      <header>
        <div className="head-logo">
          <h1 style={{ fontVariant: "small-caps", color: "red" }}>{title}</h1>
        </div>
        <nav>
          <ul>
            {menuList.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
