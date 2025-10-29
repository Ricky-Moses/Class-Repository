import { GrBusinessService } from "react-icons/gr";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { LuCircleX } from "react-icons/lu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between px-10! py-5! bg-blue-600 text-white">
        <div className="flex items-center text-4xl gap-2">
          <GrBusinessService />
          <h1 className="font-bold">Business</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-10">
            {["Home", "Service", "Portfolio", "Pricing", "Team", "Contact"].map(
              (li, idx) => (
                <li key={idx}>{li}</li>
              )
            )}
          </ul>
        </nav>
        <div className="">
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </div>
        <aside
          className="fixed w-100 h-dvh bg-white right-0 top-0 shadow-2xl"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <div className="text-black text-2xl flex items-end justify-end p-3! ">
            <LuCircleX onClick={() => setIsOpen(!isOpen)} />
          </div>
        </aside>
      </header>
    </>
  );
};

export default Header;
