import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../Context/Context";

const GlobalProvider = ({ children }) => {
  const [store, setStore] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addCart, setAddCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/data.json");
      setStore(res.data);
    };
    fetchData();
  }, []);

  // console.info(addCart);
  const totalPrice = useMemo(() => {
    return addCart.reduce((acc, item) => {
      return acc + item.price * (item.qty || 1) * 88.7;
    }, 0);
  }, [addCart]);
  return (
    <>
      <GlobalContext.Provider
        value={{
          store,
          isCartOpen,
          setIsCartOpen,
          addCart,
          setAddCart,
          totalPrice,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
