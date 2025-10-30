import React from "react";
import { TbXboxX } from "react-icons/tb";

const Aside = ({ setIsOpen }) => {
  return (
    <>
      <aside className="fixed top-0 right-0 bg-white w-100 h-dvh shadow-2xl">
        <div className="flex items-center justify-end p-2! text-2xl">
          <TbXboxX onClick={() => setIsOpen(false)} />
        </div>
      </aside>
    </>
  );
};

export default Aside;
