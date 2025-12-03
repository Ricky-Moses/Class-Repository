import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import toast from "react-hot-toast";

const Cart = () => {
  const { addCart, setAddCart, totalPrice } = useContext(GlobalContext);

  const handleQty = (type, id) => {
    if (type === "+") {
      setAddCart((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, qty: (item.qty || 1) + 1 } : item
        )
      );
    } else {
      setAddCart((prev) =>
        prev.map((item) =>
          item._id === id ? { ...item, qty: (item.qty || 1) - 1 } : item
        )
      );
    }
  };

  const handleDelete = (id, name) => {
    setAddCart((prev) => prev.filter((item) => item._id !== id));
    toast.success(`${name} delete successfully`);
  };
  return (
    <>
      <aside className="fixed top-0 left-0 w-[500px] h-dvh bg-white shadow-2xl p-2">
        <div className="flex items-center justify-between text-2xl">
          <h1>Cart</h1>
          <h1>₹ {totalPrice.toFixed(2)}/-</h1>
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
                  <div className="flex gap-3 mt-3">
                    <button
                      onClick={() => handleQty("+", item._id)}
                      className="outline w-6 rounded hover:bg-black hover:text-white"
                    >
                      +
                    </button>
                    <span>{item.qty || 1}</span>
                    <button
                      onClick={() => handleQty("-", item._id)}
                      className="outline w-6 rounded hover:bg-black hover:text-white"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <p>₹ {(item.price * 88.7 * (item.qty || 1)).toFixed(2)} /-</p>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(item._id, item.name)}
                    className="outline  px-2 rounded text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    Remove
                  </button>
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
