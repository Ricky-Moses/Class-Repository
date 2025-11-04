import React, { useState } from "react";
import { GiPayMoney } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

const menuList = ["Home", "Service", "Portfolio", "Pricing", "Team", "Contact"];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header
        style={{height: isOpen ? "fit-content" : "7vh"}}
        className="bg-blue-500 text-white flex flex-col md:flex-row items-center justify-between p-5! gap-5"
      >
        <div className="flex items-center justify-between w-full md:w-fit">
          <div className="flex items-center text-2xl gap-2">
            <GiPayMoney />
            <h1 className="font-bold">Business</h1>
          </div>
          <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FaBars />
          </div>
        </div>
        <nav>
          <ul className="flex flex-col md:flex-row items-center gap-5">
            {menuList.map((list) => (
              <li>{list}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
