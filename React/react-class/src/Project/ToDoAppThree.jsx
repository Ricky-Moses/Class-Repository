import React, { useState } from "react";

const ToDoAppThree = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      setData((prev) =>
        prev.map((task) =>
          task.id === editId ? { ...task, name: input } : task
        )
      );
      setEditId(null);
    } else {
      // Create
      setData((prev) => [...prev, { id: prev.length + 1, name: input }]);
    }

    setInput("");
  };
  const handleChange = (e) => {
    // console.info(e.target.value)
    setInput(e.target.value);
  };

  // Update
  const handleEdit = (id) => {
    const taskFounded = data.find((task) => task.id === id);

    setInput(taskFounded.name);
    setEditId(id);
  };

  // Delete
  const handleDelete = (id) => {
    setData((prev) => prev.filter((task) => task.id !== id));
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="m-2!">
        <input
          type="text"
          className="border px-2!"
          placeholder="Enter a name"
          value={input}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {data.map((list) => (
          // Read
          <li className="flex items-center gap-2">
            <div>{list.id}</div>
            <div>{list.name}</div>
            <div>
              <button
                className="border px-1! text-lime-500 hover:bg-lime-500 hover:text-white"
                onClick={() => handleEdit(list.id)}
              >
                Edit
              </button>
            </div>
            <div>
              <button
                className="border px-1! text-rose-500 hover:bg-rose-500 hover:text-white"
                onClick={() => handleDelete(list.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoAppThree;
