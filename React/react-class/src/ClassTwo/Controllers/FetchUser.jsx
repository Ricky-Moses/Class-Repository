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

  // Post data
  const addUser = async (data) => {
    const res = await axiosConfig.post("/user", data);
    setStore([...store, res.data]);
  };

  // Put data
  const updateUser = async (id, data) => {
    const res = await axiosConfig.put(`/user/${id}`, data);
    setStore((prev) => prev.map((u) => (u.id === id ? res.data : u)));
  };

  // Delete data
  const deleteUser = async (id) => {
    await axiosConfig.delete(`/user/${id}`);
    setStore((prev) => prev.filter((u) => u.id !== id));
  };
  return (
    <>
      <GlobalApi.Provider value={{ store, addUser, updateUser, deleteUser }}>
        {children}
      </GlobalApi.Provider>
    </>
  );
};

export default FetchUser;
