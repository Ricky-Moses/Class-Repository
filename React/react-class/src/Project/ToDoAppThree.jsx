import React, { useState } from "react";

const ToDoAppThree = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => [...prev, { id: prev.length + 1, name: input }]);
    console.info(data);
  };
  const handleChange = (e) => {
    // console.info(e.target.value)
    setInput(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="m-2!">
        <input
          type="text"
          name=""
          placeholder="Enter a name"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {data.map((list) => (
          <li className="flex items-center gap-2">
            <div>{list.id}</div>
            <div>{list.name}</div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoAppThree;
