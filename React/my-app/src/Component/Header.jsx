import React from "react";

const Header = () => {
  const title = "React Class";
  const menuList = ["Home", "About", "Skill", "Project", "Contact", "Blog"];
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
