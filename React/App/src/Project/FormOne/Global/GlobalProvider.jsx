import React, { useEffect, useState } from "react";
import ApiConfig from "../API/ApiConfig";
import GlobalContext from "../Context/GlobalContext";

const GlobalProvider = ({ children }) => {
  const [store, setStore] = useState([]);

  // GET
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await ApiConfig.get("/user");
        setStore(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // POST
  const addUser = async (data) => {
    const res = await ApiConfig.post("/user", data);
    setStore((prev) => [...prev, res.data]);
  };

  // PUT
  const updateUser = async (data, id) => {
    const res = await ApiConfig.put(`/user/${id}`, data);
    setStore((prev) => prev.map((u) => (u.id === id ? res.data : u)));
  };

  // DELETE
  const deleteUser = async (id) => {
    await ApiConfig.delete(`/user/${id}`);
    setStore((prev) => prev.filter((list) => list.id !== id));
  };
  return (
    <GlobalContext.Provider value={{ store, addUser, deleteUser, updateUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
