import React, { useEffect, useState } from "react";
import ApiOne from "../API/ApiOne";
import ContextOne from "../Context/ContextOne";

const UserOne = ({ children }) => {
  const [store, setStore] = useState([]);

  const fetchUserData = async () => {
    const res = await ApiOne.get("/user");
    setStore(res.data);
    console.info(store);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return <ContextOne.Provider value={store}>{children}</ContextOne.Provider>;
};

export default UserOne;
