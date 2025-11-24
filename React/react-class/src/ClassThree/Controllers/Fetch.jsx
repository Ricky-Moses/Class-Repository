import React, { useEffect, useState } from "react";
import axiosConfig from "../../Class/API/Axios";
import { GlobalContext } from "../Context/GlobalContext";

const Fetch = ({ children }) => {
  const [store, setStore] = useState([]);

  // GET Function
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosConfig.get("/user");
      // console.info(res.data);
      setStore(res.data);
    };
    fetchData();
  }, []);

  // POST Function
  const addUser = async (data) => {
    const res = await axiosConfig.post("/user", data);
    setStore([...store, res.data]);
  };
  return (
    <>
      <GlobalContext.Provider value={{ store, addUser }}>
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default Fetch;
