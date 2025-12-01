import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../Context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [store, setStore] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [addCart, setAddCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/data.json");
      //   console.info(res.data)
      setStore(res.data);
    };

    fetchData();
  }, []);

  console.info(addCart);
  return (
    <>
      <GlobalContext.Provider
        value={{ store, isCartOpen, setIsCartOpen, addCart, setAddCart }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
