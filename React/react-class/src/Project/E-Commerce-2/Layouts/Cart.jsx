import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";
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

  const handleDelete = (id) => {
    setAddCart((prev) => prev.filter((item) => item._id !== id));
    toast.success("Item removed successfully");
  };
  return (
    <>
      <aside className="fixed top-0 left-0 w-[500px] h-dvh bg-white shadow-2xl p-3">
        <div className="flex items-center justify-between text-2xl">
          <h1>Cart</h1>
          <h1>₹ {totalPrice.toFixed(2)}/-</h1>
        </div>
        <ul className=" h-[80vh] overflow-y-auto flex flex-col gap-3">
          {addCart.length > 0 ? (
            addCart.map((item) => (
              <li className="flex items-center gap-3">
                <div className="w-25">
                  <img className="" src={item.images[0].url} />
                </div>
                <div className="w-1/3">
                  <h1 className="line-clamp-1">{item.name}</h1>
                  <div className="flex items-center gap-4 mt-2">
                    <button
                      onClick={() => handleQty("+", item._id)}
                      className="outline w-5 rounded hover:bg-black hover:text-white "
                    >
                      +
                    </button>
                    <span>{item.qty || 1}</span>
                    <button
                      onClick={() => handleQty("-", item._id)}
                      className="outline w-5 rounded hover:bg-black hover:text-white "
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <p>₹ {(item.price * 88.7 * (item.qty || 1)).toFixed(2)}/-</p>
                </div>
                <div>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className=" outline text-rose-500 rounded hover:bg-rose-500 hover:text-white px-2"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="text-bold text-2xl font-bold text-center">
              No item added
            </li>
          )}
        </ul>
      </aside>
    </>
  );
};

export default Cart;
