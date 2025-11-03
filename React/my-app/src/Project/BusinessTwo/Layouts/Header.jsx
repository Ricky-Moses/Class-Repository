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
      <header
        style={{ height: isOpen ? "fit-content" : "7vh" }}
        className="bg-blue-600 text-white  flex flex-col md:flex-row items-center gap-5 justify-between p-3!"
      >
        <div className=" flex items-center justify-between w-full md:w-fit">
          <div className="text-3xl flex items-center gap-2 ">
            <IoBusiness />
            <h1 className="font-bold">Business</h1>
          </div>
          <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </div>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row items-center gap-5">
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
