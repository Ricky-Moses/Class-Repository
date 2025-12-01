import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { BsCart3 } from "react-icons/bs";
import { GlobalContext } from "../Context/GlobalContext";

const Header = () => {
  const { isCartOpen, setIsCartOpen } = useContext(GlobalContext);
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
          <li onClick={() => setIsCartOpen(!isCartOpen)}>
            <BsCart3 />
          </li>
        </ul>
      </header>
      {isCartOpen && <Cart />}
    </>
  );
};

export default Header;
