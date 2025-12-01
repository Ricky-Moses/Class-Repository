import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const Cart = () => {
  const { addCart } = useContext(GlobalContext);
  return (
    <>
      <aside className="fixed top-0 left-0 w-[500px] h-dvh bg-white shadow-2xl p-2">
        <div className="flex items-center justify-between text-2xl">
          <h1>Cart</h1>
          <h1>₹ 80000/-</h1>
        </div>
        <ul className="flex flex-col gap-2 h-[80vh] p-2 overflow-y-auto">
          {addCart.length > 0 ? (
            addCart.map((item) => (
              <li key={item._id} className="flex items-center gap-2">
                <div className="w-1/4">
                  <img src={item.images[0]?.url} alt="" />
                </div>
                <div className="flex-1">
                  <h1>{item.name}</h1>
                  <div>
                    <button>+</button>
                    <span>0</span>
                    <button>-</button>
                  </div>
                </div>
                <div>
                  <p>₹ {(item.price * 88.7).toFixed(2)} /-</p>
                </div>
                <div>
                  <button>Remove</button>
                </div>
              </li>
            ))
          ) : (
            <li className="text-2xl font-bold text-center">No Item Added</li>
          )}
        </ul>
      </aside>
    </>
  );
};

export default Cart;
