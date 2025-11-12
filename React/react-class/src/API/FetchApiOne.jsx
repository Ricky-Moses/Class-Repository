import React, { useEffect, useState } from "react";
import axios from "axios";
import { GlobalContextOne } from "../Context/GlobalContextOne";

const FetchApiOne = ({ children }) => {
  const [store, setStore] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data.json");
        // console.info(res.data);
        setStore(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <GlobalContextOne.Provider value={{store}}>
      {children}
    </GlobalContextOne.Provider>
  );
};

export default FetchApiOne;
