import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../Context/Context";

const GlobalProvider = ({ children }) => {
  const [store, setStore] = useState({});
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/data.json");
      setStore(res.data);
    };

    fetchData();
  }, []);
  return (
    <>
      <GlobalContext.Provider value={{ store, isCartOpen, setIsCartOpen }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
