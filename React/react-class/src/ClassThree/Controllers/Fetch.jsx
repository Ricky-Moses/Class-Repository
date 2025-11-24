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

  // PUT Function
  const updateUser = async (id, data) => {
    const res = await axiosConfig.put(`/user/${id}`, data);
    setStore((prev) => prev.map((u) => (u.id === id ? res.data : u)));
  };

  // DELETE Function
  const deleteUser = async (id) => {
    await axiosConfig.delete(`/user/${id}`);
    setStore((prev) => prev.filter((u) => u.id !== id));
  };
  return (
    <>
      <GlobalContext.Provider
        value={{ store, addUser, updateUser, deleteUser }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

export default Fetch;
