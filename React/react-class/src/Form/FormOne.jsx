import React, { useState } from "react";

const FormOne = () => {
  const [input, setInput] = useState("");

  console.info(input);

  const handleChange = (e) => {
    
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <main className="flex flex-col gap-5 m-5">
        <form onSubmit={handleSubmit} className="flex items-center gap-4 p-3">
          <input
            type="text"
            className="flex-1 h-10 shadow-2xl px-3"
            placeholder="Enter a task"
            onChange={handleChange}
          />
          <input type="submit" value="Submit" className="h-10 px-5 outline" />
        </form>
        <ul className="border"></ul>
      </main>
    </>
  );
};

export default FormOne;
