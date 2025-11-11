import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await fetch("https://mimic-server-api.vercel.app/users");
        const data = await res.json();
        setUser(data);
        console.info(user);
      } catch (err) {
        console.error(err);
      }
    };

    handleFetch();
  }, []);
  //   console.info(user)
  return (
    <>
      <ul>
        {user.map((list) => (
          <li className="flex items-center gap-2">
            <div>{list.id}</div>
            <div>{list.name}</div>
            <div>{list.email}</div>
            <div>{list.username}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default User;
