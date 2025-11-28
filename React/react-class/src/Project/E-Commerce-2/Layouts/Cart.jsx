import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const Cart = () => {
  const { addCart } = useContext(GlobalContext);
  return (
    <>
      <aside className="fixed top-0 left-0 w-[500px] h-dvh bg-white shadow-2xl p-3">
        <div className="flex items-center justify-between text-2xl">
          <h1>Cart</h1>
          <h1>₹ 800000/-</h1>
        </div>
        <ul className=" h-[80vh] overflow-y-auto flex flex-col gap-3">
          {addCart.length > 0 ? (
            addCart.map((item) => (
              <li className="flex items-center gap-3">
                <div className="w-25">
                  <img
                    className=""
                    src={item.images[0].url}
                  />
                </div>
                <div className="w-1/3">
                  <h1 className="line-clamp-1">{item.name}</h1>
                  <div className="flex items-center gap-4 mt-2">
                    <button className="outline w-5 rounded hover:bg-black hover:text-white ">
                      +
                    </button>
                    <span>0</span>
                    <button className="outline w-5 rounded hover:bg-black hover:text-white ">
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <p>₹ {(item.price * 88.7).toFixed(2)}/-</p>
                </div>
                <div>
                  <button className=" outline text-rose-500 rounded hover:bg-rose-500 hover:text-white px-2">
                    Remove
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="text-bold text-2xl font-bold text-center">No item added</li>
          )}
        </ul>
      </aside>
    </>
  );
};

export default Cart;
