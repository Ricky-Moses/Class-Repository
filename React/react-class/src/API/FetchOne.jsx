import React, { useEffect, useState } from "react";

const FetchOne = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mimic-server-api.vercel.app/users"
        );
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  console.info(data);
  return <></>;
};

export default FetchOne;
