import React, { useEffect, useState } from "react";
import { axiosConfig } from "../API/Axios";
import GlobalApi from "../Context/GlobalApi";

const FetchUser = ({ children }) => {
  const [store, setStore] = useState([]);

  // Get data
  useEffect(() => {
    const fetchData = async () => {
      const res = await axiosConfig.get("/user");
      setStore(res.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <GlobalApi.Provider value={{ store }}>{children}</GlobalApi.Provider>
    </>
  );
};

export default FetchUser;
