import React, { useEffect, useState } from "react";
import ApiConfig from "../API/ApiConfig";
import GlobalContext from "../Context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [store, setStore] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiConfig.get("/user");
        setStore(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <GlobalContext.Provider value={{ store }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
