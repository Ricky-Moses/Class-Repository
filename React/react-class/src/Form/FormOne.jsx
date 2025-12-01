import React, { useState } from "react";

const FormOne = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== null) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editId ? { ...item, task: input } : item
        )
      );
      setEditId(null);
    } else {
      if (input.trim() !== "") {
        setData((prev) => [...prev, { id: prev.length + 1, task: input }]);
      }
    }
    console.info(data);
  };

  const handleEdit = (id) => {
    const listFound = data.find((f) => f.id === id);

    setInput(listFound.task);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <main className="flex flex-col gap-5 m-5">
        <form onSubmit={handleSubmit} className="flex items-center gap-4 p-3">
          <input
            type="text"
            className="flex-1 h-10 shadow-2xl px-3"
            placeholder="Enter a task"
            value={input}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" className="h-10 px-5 outline" />
        </form>
        <ul className="border">
          {data.map((list, idx) => (
            <li key={list.id} className="flex p-2 gap-5">
              <div>{idx + 1}</div>
              <div className="flex-1">{list.task}</div>
              <div>
                <button
                  onClick={() => handleEdit(list.id)}
                  className="outline px-4 text-slate-600 hover:bg-slate-600 hover:text-white"
                >
                  Edit
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(list.id)}
                  className="outline px-4 text-rose-600 hover:bg-rose-600 hover:text-white"
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

export default FormOne;
