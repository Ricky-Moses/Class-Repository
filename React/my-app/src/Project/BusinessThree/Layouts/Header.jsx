import React from "react";
import { GiPayMoney } from "react-icons/gi";
import { FaBars } from "react-icons/fa";

const menuList = ["Home", "Service", "Portfolio", "Pricing", "Team", "Contact"];
const Header = () => {
  return (
    <>
      <header className="bg-blue-500 text-white flex items-center justify-between p-5!">
        <div className="flex items-center text-2xl font-bold">
          <GiPayMoney />
          <h1>Business</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-10">{menuList.length > 0 && menuList.map((li) => <li>{li}</li>)}</ul>
        </nav>
        <div>
            <FaBars />
        </div>
      </header>
    </>
  );
};

export default Header;
