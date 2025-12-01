import React, { useContext } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import { GlobalContext } from "../Context/Context";

const Header = () => {
  const { isCartOpen, setIsCartOpen } = useContext(GlobalContext);
  return (
    <>
      <header className="flex items-center justify-between p-2 px-3">
        <div>
          <h1 className="text-2xl  font-bold">
            <NavLink to={"/"}>E-Commerce</NavLink>
          </h1>
        </div>
        <form className=" w-1/3">
          <input
            type="search"
            placeholder="Search a products"
            className="w-full h-10 px-2 shadow-2xl"
          />
        </form>
        <nav>
          <ul className="flex items-center gap-5">
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
        </nav>
        <ul>
          <li onClick={() => setIsCartOpen(!isCartOpen)}>
            <CgShoppingCart />
          </li>
        </ul>
      </header>
      {isCartOpen && <Cart />}
    </>
  );
};

export default Header;
