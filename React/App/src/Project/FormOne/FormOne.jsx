import React, { useState } from "react";
import Todo from "./Form/Todo";
import List from "./Form/List";

const FormOne = () => {
  const [editObj, setEditObj] = useState({});

  const handleEdit = (data) => {
    setEditObj(data);
  };
  return (
    <>
      <main className="border h-dvh grid grid-cols-1 md:grid-cols-2 gap-3 p-2 [&_section]:border">
        <Todo editObj={editObj} setEditObj={setEditObj} />
        <List handleEdit={handleEdit} />
      </main>
    </>
  );
};

export default FormOne;
