import React, { useState } from "react";

const HeaderOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        style={{ height: isOpen ? "30vh" : "7vh" }}
        className="flex items-center flex-col sm:flex-row gap-4 justify-between p-4! overflow-hidden transition-[height] border"
      >
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl">Business</h1>
          <div className="flex sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            Click
          </div>
        </div>
        <nav>
          <ul className="flex items-center flex-col sm:flex-row gap-5">
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

export default HeaderOne;
