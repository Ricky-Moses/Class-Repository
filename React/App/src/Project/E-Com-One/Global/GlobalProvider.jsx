import React, { useEffect, useState } from "react";
import axios from "axios";
import GlobalContext from "../Context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [store, setStore] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data.json");
        setStore(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <GlobalContext.Provider
      value={{ isCartOpen, setIsCartOpen, store, setStore }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
