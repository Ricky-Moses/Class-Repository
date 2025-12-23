import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Card = ({ product = [] }) => {
  const { addCart, setAddCart } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleAddCart = (item) => {
    const existCart = addCart.some((cart) => cart.id === item.id);

    if (existCart) {
      toast.error(`${item.name} already exist in cart!`);
      return;
    }
    setAddCart((prev) => [...prev, item]);
    toast.success(`${item.name} added to cart!`);
  };
  return (
    <>
      {product.length > 0 ? (
        product.map((item) => (
          <figure>
            <div>
              <img src={item.images[0].url} alt="" />
            </div>
            <figcaption>
              <table className="[&_td]:p-2">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{item.name}</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>{item.brand}</td>
                  </tr>
                  <tr>
                    <td className="flex">Description</td>
                    <td>
                      <p className="line-clamp-1">{item.description}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Stock</td>
                    <td
                      className={`${
                        item.inStock ? "text-lime-500" : "text-rose-500"
                      }`}
                    >
                      {item.availability}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button
                        onClick={() => handleAddCart(item)}
                        className="outline w-full text-sky-500 hover:bg-sky-500 hover:text-white"
                      >
                        Add
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          navigate("/view", { state: item });
                        }}
                        className="outline w-full text-emerald-500 hover:bg-emerald-500 hover:text-white"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </figcaption>
          </figure>
        ))
      ) : (
        <h1 className="">No Product Available</h1>
      )}
    </>
  );
};

export default Card;
