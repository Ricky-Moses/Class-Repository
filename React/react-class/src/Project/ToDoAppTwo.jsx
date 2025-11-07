import React, { useState } from "react";

const ToDoAppTwo = () => {
  const [input, setInput] = useState(""); // Current value
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create
    setData((prev) => [...prev, { id: prev.length + 1, name: input }]);
    console.info(data);
  };
  const handleChange = (e) => {
    // console.info(e.target.value)
    setInput(e.target.value);
    // console.info(input)
  };
  return (
    <>
      <main className="p-2!">
        <form onSubmit={handleSubmit} className="">
          <input
            type="text"
            name=""
            class="border px-2!"
            placeholder="Enter a name"
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {data.map((list) => (
            <li key={list.id} className="flex gap-2">
              <div>{list.id}</div>
              <div>{list.name}</div>
              <div>
                <button>Edit</button>
              </div>
              <div>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default ToDoAppTwo;
