import React, { useEffect, useState } from "react";
import AxiosConfig from "../API/AxiosConfig";
import GlobalContext from "../Context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [store, setStore] = useState([]);

  // GET, POST, DELETE, PUT, PATCH - REST APIs
  useEffect(() => {
    // Get Data
    const fetchData = async () => {
      const res = await AxiosConfig.get("/user");

      console.info(res);
      setStore(res.data);
    };
    fetchData();
  }, []);

  const addUser = async (data) => {
    const res = await AxiosConfig.post("/user", data);
    setStore((prev) => [...prev, res.data]);
  };

  return (
    <>
      <GlobalContext.Provider value={{ store, addUser }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;
