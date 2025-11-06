import React, { useState } from "react";

const ToDoOne = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId !== null) {
      setTodo((prev) =>
        prev.map((list) =>
          list.id === editId ? { ...list, user: input } : list
        )
      );
    } else {
      if (input.trim() !== "") {
        setTodo([...todo, { id: todo.length + 1, user: input }]);
        console.info(todo);
      }
    }

    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    // console.info(e.target.value);
  };

  const handleDelete = (id) => {
    console.info(id);

    setTodo((prev) => prev.filter((list) => list.id !== id));
  };

  const handleEdit = (id) => {
    console.info(id);

    const listFound = todo.find((list) => list.id === id);

    setInput(listFound.user);
    setEditId(id);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-4!">
        <input
          type="text"
          className="border"
          value={input}
          onChange={handleInput}
          placeholder="Enter a task"
        />
        <input type="submit" value="Submit" />
      </form>
      <ul>
        {todo.length > 0 &&
          todo.map((list, idx) => (
            <li className="flex items-center gap-2 ">
              <div>{idx + 1}</div>
              <div>{list.user}</div>
              <div>
                <button
                  className="px-1! border"
                  onClick={() => handleEdit(list.id)}
                >
                  Edit
                </button>
              </div>
              <div>
                <button
                  className="px-1! border"
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

export default ToDoOne;
