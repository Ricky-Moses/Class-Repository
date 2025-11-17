import React, { useEffect, useState } from "react";
// import FormOne from "./Form/FormOne";
import axios from "axios";

const App = () => {
  const [store, setStore] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/lights");
        console.info(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return <>{/* <FormOne /> */}</>;
};

export default App;
