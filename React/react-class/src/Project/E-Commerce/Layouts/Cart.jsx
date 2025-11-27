import React from "react";

const Cart = () => {
  return (
    <>
      <aside className="fixed top-0 left-0 w-[500px] h-dvh bg-white shadow-2xl p-2">
        <div className="flex items-center justify-between text-2xl">
          <h1>Cart</h1>
          <h1>₹ 80000/-</h1>
        </div>
        <ul className="flex flex-col gap-2 h-[80vh] p-2 overflow-y-auto">
          {Array.from({ length: 50 }).map((item) => (
            <li className="flex items-center gap-2">
              <div className="w-1/4">
                <img src="https://picsum.photos/500/300" alt="" />
              </div>
              <div className="flex-1">
                <h1>Product Name</h1>
                <div>
                  <button>+</button>
                  <span>0</span>
                  <button>-</button>
                </div>
              </div>
              <div>
                <p>₹ 18000 /-</p>
              </div>
              <div>
                <button>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Cart;
