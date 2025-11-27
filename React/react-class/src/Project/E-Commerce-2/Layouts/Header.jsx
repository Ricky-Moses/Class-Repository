import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { GlobalContext } from "../Context/Context";
import Cart from "./Cart";

const Header = () => {
  const { isCartOpen, setIsCartOpen } = useContext(GlobalContext);
  return (
    <>
      <header className="flex items-center justify-between p-5">
        <div>
          <h1 className="text-2xl font-bold">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-amber-600" : "")}
            >
              E-App-Two
            </NavLink>
          </h1>
        </div>
        <form className=" w-1/3">
          <input
            type="text"
            placeholder="Search a product"
            className="h-10 px-3 shadow-2xl w-full outline-0 rounded"
          />
        </form>
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) =>
                  isActive ? "text-amber-600 underline underline-offset-6" : ""
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "text-amber-600 underline underline-offset-6" : ""
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/profile"}
                className={({ isActive }) =>
                  isActive ? "text-amber-600 underline underline-offset-6" : ""
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
        <ul>
          <li onClick={() => setIsCartOpen(!isCartOpen)}>
            <IoMdCart />
          </li>
        </ul>
      </header>
      {isCartOpen && <Cart />}
    </>
  );
};

export default Header;
