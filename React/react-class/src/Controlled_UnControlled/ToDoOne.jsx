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
        {todo.length > 0 && todo.map((list) => (
            <li>
                <span>{list.id}</span>
                <span>{list.user}</span>
            </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoOne;
