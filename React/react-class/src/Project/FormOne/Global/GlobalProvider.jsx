import React, { useEffect, useState } from "react";
import AxiosConfig from "../API/AxiosConfig";
import GlobalContext from "../Context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await AxiosConfig.get("/user");

      console.info(res);
      setStore(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <GlobalContext.Provider value={{ store }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
