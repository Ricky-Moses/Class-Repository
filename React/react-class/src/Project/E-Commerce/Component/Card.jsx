import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import toast from "react-hot-toast";

const Card = ({ product }) => {
  const { addCart, setAddCart } = useContext(GlobalContext);

  const handleAddToCart = (item) => {
    const existCart = addCart.some((i) => i._id === item._id);
    console.info(existCart);

    if (existCart) {
      toast.error(`${item.name} is already exist!`);
      return;
    }
    setAddCart((prev) => [...prev, item]);
    toast.success(`${item.name} Added to cart`);
  };
  return (
    <>
      <section className="grid grid-cols-4 gap-4 p-3">
        {product.length > 0 &&
          product.map((item) => (
            <figure className="shadow-2xl rounded overflow-hidden">
              <div>
                <img src={item.images[0].url} alt="" />
              </div>
              <figcaption>
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="p-2">Name: </td>
                      <td className="p-2">
                        <p className="line-clamp-1">{item.name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">Brand: </td>
                      <td className="p-2">{item.brand}</td>
                    </tr>
                    <tr>
                      <td className="p-2">Price: </td>
                      <td className="p-2">{(item.price * 88.7).toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td className="p-2">Stock: </td>
                      <td
                        className={`${
                          item.inStock ? `text-lime-500` : `text-rose-500`
                        } p-2`}
                      >
                        {item.availability}
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="outline w-full text-emerald-500 hover:bg-emerald-500 hover:text-white"
                        >
                          Add
                        </button>
                      </td>
                      <td className="p-2">
                        <button className="outline w-full text-cyan-500 hover:bg-cyan-500 hover:text-white">
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </figcaption>
            </figure>
          ))}
      </section>
    </>
  );
};

export default Card;
