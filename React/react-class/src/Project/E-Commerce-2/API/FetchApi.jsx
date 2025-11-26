import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../Context/Context";

const FetchApi = ({ children }) => {
  const [store, setStore] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/data.json");
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

export default FetchApi;
