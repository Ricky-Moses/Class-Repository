import React, { useState } from "react";

const ToDoAppTwo = () => {
  // Storing the data
  const [store, setStore] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.info(e)

    if (editId !== null) {
      // Update
      setStore((prev) =>
        prev.map((task) =>
          task.id === editId ? { ...task, taskName: input } : task
        )
      );
      setEditId(null);
    } else {
      // Create
      setStore((prev) => [...prev, { id: prev.length + 1, taskName: input }]);
      console.info(store);
    }

    setInput("");
  };

  const handleChange = (e) => {
    // console.info(e.target.value)

    setInput(e.target.value);
    // console.info(input)
  };

  // Update
  const handleEdit = (id) => {
    // console.info(id)
    const taskFounded = store.find((task) => task.id === id);
    // console.info(taskFounded);
    setInput(taskFounded.taskName);
    setEditId(id);
  };

  // Delete
  const handleDelete = (id) => {
    setStore((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <main className="p-2!">
        <form onSubmit={handleSubmit} action="">
          <input
            type="text"
            name="task"
            value={input}
            className="border me-2!"
            placeholder="Enter a new task"
            onChange={handleChange}
          />
          <input type="submit" value="Add" />
        </form>
        <ul className="m-2! flex flex-col gap-2">
          {store.map((task, idx) => (
            // Read
            <li className="flex items-center gap-3">
              <div>{idx + 1}</div>
              <div>{task.taskName}</div>
              <div>
                <button
                  onClick={() => handleEdit(task.id)}
                  className="border text-lime-500 hover:bg-lime-500 hover:text-white px-2!"
                >
                  Edit
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="border text-red-500 hover:bg-red-500 hover:text-white px-2!"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default ToDoAppTwo;
