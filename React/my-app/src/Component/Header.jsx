import React from "react";

const Header = (props) => {
    // props = {title: "React"} - props.title
  return (
    <>
      <header>
        <div class="head-logo">
          <h1>{props.headTitle}</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
