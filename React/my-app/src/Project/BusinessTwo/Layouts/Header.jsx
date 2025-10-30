import React, { useState } from "react";
import { IoBusiness } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import Aside from "./Aside";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = [
    "Home",
    "Service",
    "Portfolio",
    "Pricing",
    "Team",
    "Contact",
  ];
  return (
    <>
      <header className="flex items-center justify-between p-5! bg-blue-900 text-white">
        <div className="flex items-center text-2xl font-bold">
          <IoBusiness />
          <h1>Business</h1>
        </div>
        <nav className="">
          <ul className="flex items-center gap-10">
            {menuList.length > 0 && menuList.map((li) => <li>{li}</li>)}
          </ul>
        </nav>
        <div>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </div>
      </header>
      {isOpen && <Aside setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;
