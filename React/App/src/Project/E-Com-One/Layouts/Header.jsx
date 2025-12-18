import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import GlobalContext from "../Context/GlobalContext";

const Header = () => {
  const { isCartOpen, setIsCartOpen } = useContext(GlobalContext);
  return (
    <>
      <header className="flex items-center justify-between gap-5 p-3">
        <div>
          <h1 className="text-2xl font-bold">
            <NavLink to={"/"}>E-Com-App</NavLink>
          </h1>
        </div>
        <div className=" w-1/2">
          <input
            className="w-full h-10 outline px-5"
            placeholder="Search"
            type="search"
          />
        </div>
        <nav className="flex items-center justify-between gap-5 [&_ul]:flex  [&_ul]:gap-5  flex-1">
          <ul>
            <li>
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </ul>
          <ul>
            <li onClick={() => setIsCartOpen(!isCartOpen)}>
              <FaCartShopping />
            </li>
          </ul>
        </nav>
      </header>
      {isCartOpen && <Cart />}
    </>
  );
};

export default Header;
