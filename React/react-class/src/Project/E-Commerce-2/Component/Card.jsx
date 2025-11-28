import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import toast from "react-hot-toast";

const Card = ({ product }) => {
  const { addCart, setAddCart } = useContext(GlobalContext);

  const handleAddCart = (item) => {
    const existItem = addCart.some((i) => i._id === item._id);
    if (existItem) {
      toast.error("Item already exist!");
      return;
    }
    setAddCart((prev) => [...prev, item]);
    toast.success(`${item.name} has been added to cart!`)
  };
  return (
    <>
      {product.map((item) => (
        <figure key={item._id}>
          <div>
            <img src={item.images[0].url} alt="" />
          </div>
          <figcaption>
            <table className=" w-full">
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <td>Brand: </td>
                  <td>{item.brand}</td>
                </tr>
                <tr>
                  <td>Price: </td>
                  <td>₹ {(item.price * 88.7).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Stock: </td>
                  <td
                    className={`${
                      item.inStock ? "text-lime-400" : "text-amber-700"
                    }`}
                  >
                    {item.availability}
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="outline w-full text-sky-400 hover:bg-sky-400 hover:text-white">
                      View
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleAddCart(item)}
                      className="outline w-full text-rose-400 hover:bg-rose-400 hover:text-white"
                    >
                      Add To Cart
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </figcaption>
        </figure>
      ))}
    </>
  );
};

export default Card;
