import React, { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import toast from "react-hot-toast";

const Card = ({ product }) => {
  // console.info(product);
  const { addCart, setAddCart } = useContext(GlobalContext);

  const handleAddToCart = (data) => {
    const existCart = addCart.some((prev) => prev._id === data._id);


    
    
    setAddCart((prev) => [...prev, data]);
    toast.success(`${data.name}  added to cart successfully`);
  };
  return (
    <>
      {product.map((item) => (
        <figure>
          <div>
            <img src={item.images[0].url} alt="" />
          </div>
          <figcaption>
            <table className="w-full">
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
                  <td>{(item.price * 88.7).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Stock: </td>
                  <td
                    className={`${
                      item.inStock ? "text-lime-500" : "text-red-500"
                    }`}
                  >
                    {item.availability}
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>View</button>
                  </td>
                  <td>
                    <button
                      className="outline w-full text-sky-500 hover:bg-sky-500 hover:text-white"
                      onClick={() => handleAddToCart(item)}
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
