import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const Cart = () => {
  const { addCart } = useContext(GlobalContext);
  return (
    <>
      <aside className="fixed bg-white top-0 left-0 h-dvh w-[500px] shadow-2xl p-2">
        <div className="flex items-center justify-between text-2xl">
          <h1>Cart</h1>
          <h1>₹80000/-</h1>
        </div>
        <ul className="flex flex-col gap-3 mt-2 h-[80vh] overflow-y-scroll p-2">
          {addCart.length > 0 ? (
            addCart.map((item) => (
              <li className="flex gap-2 items-center">
                <div className="w-30">
                  <img src={item.images[0].url} alt="" />
                </div>
                <div className="flex-1">
                  <h1>{item.name}</h1>
                  <div className="flex items-center gap-3 mt-2">
                    <button className="outline w-5 rounded hover:bg-black hover:text-white">+</button>
                    <span>0</span>
                    <button className="outline w-5 rounded hover:bg-black hover:text-white">-</button>
                  </div>
                </div>
                <div>₹{(item.price * 88.7).toFixed(2)}</div>
                <div>
                  <button className="outline px-2 rounded text-rose-500 hover:bg-rose-500 hover:text-white">Remove</button>
                </div>
              </li>
            ))
          ) : (
            <li className="text-2xl text-center font-bold">No Item Added</li>
          )}
        </ul>
      </aside>
    </>
  );
};

export default Cart;
