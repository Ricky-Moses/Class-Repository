import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between p-5">
        <div>
          <h1 className="text-3xl font-bold cursor-pointer">
            <NavLink to={"/"}>E-Commerce</NavLink>
          </h1>
        </div>
        <form className=" w-1/3">
          <input
            type="text"
            placeholder="Search a products"
            className="w-full h-10 px-3 outline-0 rounded shadow-xl"
          />
        </form>
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </ul>
        </nav>
        <ul>
          <li>Cart</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
