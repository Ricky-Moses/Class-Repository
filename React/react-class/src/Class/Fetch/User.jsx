import React, { useEffect, useState } from "react";
import axiosConfig from "../API/Axios";
import { ContextApi } from "../Context/ContextApi";
import toast from "react-hot-toast";

const User = ({ children }) => {
  const [store, setStore] = useState([]);

  // Get user
  useEffect(() => {
    const getDataFromApi = async () => {
      const res = await axiosConfig.get("/user");
      setStore(res.data);
    };
    getDataFromApi();
  }, []);

  // Add user
  const addUser = async (data) => {
    const res = await axiosConfig.post("/user", data);
    setStore([...store, res.data]);
    toast.success("User added successfully");
  };

  // Update user
  const updateUser = async (id, data) => {
    const res = await axiosConfig.put(`/user/${id}`, data);
    setStore((prev) => prev.map((u) => (u.id === id ? res.data : u)));
    toast.success("User edited successfully");
  };

  // delete user
  const deleteUser = async (id) => {
    await axiosConfig.delete(`/user/${id}`);
    setStore((prev) => prev.filter((u) => u.id !== id));
    toast.error("User deleted successfully")
  };

  return (
    <>
      <ContextApi.Provider value={{ store, addUser, updateUser, deleteUser }}>
        {children}
      </ContextApi.Provider>
    </>
  );
};

export default User;
