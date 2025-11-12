import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductHeaderOne = () => {
  return (
    <>
      <header className="flex items-center justify-between p-3!">
        <div>
          <h1>Product</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            <li><Link to={"/"}>Gadgets</Link></li>
            <li><Link to={"/lights"}>Lights</Link></li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default ProductHeaderOne;
