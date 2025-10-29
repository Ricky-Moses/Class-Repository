import { GrBusinessService } from "react-icons/gr";
import { FaBars } from "react-icons/fa";

const Header = () => {
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
          <FaBars />
        </div>
      </header>
    </>
  );
};

export default Header;
