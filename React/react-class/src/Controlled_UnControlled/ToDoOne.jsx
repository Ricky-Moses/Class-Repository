import React, { useState } from "react";

const ToDoOne = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTodo([...todo, { id: todo.length + 1, user: input }]);
      console.info(todo);
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
          todo.map((list) => (
            <li className="flex items-center gap-2">
              <span>{list.id}</span>
              <span>{list.user}</span>
              <span>
                <button>Edit</button>
              </span>
              <span>
                <button onClick={() => handleDelete(list.id)}>Delete</button>
              </span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ToDoOne;
