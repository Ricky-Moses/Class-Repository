import React, { useState } from "react";

const ConditionalRendering = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [color, setColor] = useState("white");

  const handleColor = (changeColor) => {
    setColor(changeColor);
  };
  return (
    <>
      <section className="h-dvh flex flex-col items-center justify-center gap-10">
        {isOpen && (
          <aside
            style={{ backgroundColor: color }}
            className="fixed h-dvh top-0 left-0 w-120 shadow-2xl"
          ></aside>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-rose-200 text-rose-600 rounded-2xl py-2 px-3 outline outline-offset-2 hover:outline-offset-0 cursor-pointer"
        >
          Open Drawer
        </button>

        <button onClick={() => handleColor("red")}>Red</button>
        <button onClick={() => handleColor("cyan")}>Blue</button>
        <button onClick={() => handleColor("yellow")}>Yellow</button>
      </section>
    </>
  );
};

export default ConditionalRendering;
