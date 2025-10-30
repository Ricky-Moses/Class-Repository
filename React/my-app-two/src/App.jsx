import React from "react";

const App = () => {
  const title = "React Class";
  return (
    <>
      <header>
        <div class="head-logo">
          <h1>{title}</h1>
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

export default App;

/*

 First: npm create vite@latest

*/
