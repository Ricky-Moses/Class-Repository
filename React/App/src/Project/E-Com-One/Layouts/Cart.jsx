import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";

const Cart = () => {
  const navigate = useNavigate();
  const { setIsCartOpen } = useContext(GlobalContext);

  const handleNavigate = () => {
    navigate("/checkout");
    setIsCartOpen(false);
  };
  return (
    <>
      <aside className="fixed top-0 left-0 bg-white h-dvh w-[500px] shadow-2xl p-2">
        <div className="flex items-center justify-between text-2xl">
          <h1>Cart Items</h1>
          <h1>₹ 80000/-</h1>
        </div>
        <ul className=" h-[80vh] overflow-y-scroll flex flex-col gap-3 px-5">
          {Array.from({ length: 100 }).map((item, idx) => (
            <li key={idx} className="flex items-center gap-5">
              <figure>
                <img
                  className="w-30"
                  src={`https://picsum.photos/500/300?random=${idx}`}
                />
              </figure>
              <div className="flex-1 flex flex-col gap-3">
                <h1>Product Name</h1>
                <div className="flex items-center gap-5">
                  <button className="outline w-5 rounded text-lime-500 hover:bg-lime-500 hover:text-white">
                    +
                  </button>
                  <span>0</span>
                  <button className="outline w-5 rounded text-rose-500 hover:bg-rose-500 hover:text-white">
                    -
                  </button>
                </div>
              </div>
              <div>
                <p>₹ 17000/-</p>
              </div>
              <div>
                <button className="outline rounded text-rose-500 hover:bg-rose-500 hover:text-white px-3">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={handleNavigate}
          className="outline w-full h-10 rounded text-slate-600 hover:bg-slate-600 hover:text-white mt-2"
        >
          Checkout
        </button>
      </aside>
    </>
  );
};

export default Cart;
