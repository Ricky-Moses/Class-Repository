import React from "react";
import Todo from "./Form/Todo";
import List from "./Form/List";

const FormOne = () => {
  return (
    <>
      <main className="border h-dvh grid grid-cols-2 gap-3 p-2 [&_section]:border">
        <Todo />
        <List />
      </main>
    </>
  );
};

export default FormOne;
