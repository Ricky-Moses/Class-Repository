import React, { useEffect, useState } from "react";
import axiosConfig from "../API/Axios";
import { ContextApi } from "../Context/ContextApi";

const User = ({ children }) => {
  const [store, setStore] = useState([]);

  
  const getDataFromApi = async () => {
    const res = await axiosConfig.get("/user");
    setStore(res.data);
    console.info(store);
  };
  useEffect(() => {
    getDataFromApi();
  }, []);
  return (
    <>
      <ContextApi.Provider value={store}>{children}</ContextApi.Provider>
    </>
  );
};

export default User;
