import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../Context/ContextApi";

const FormList = () => {
  const navigate = useNavigate();
  const { store } = useContext(ContextApi);
  console.info(store)
  return (
    <>
      <section className="p-2">
        <ul className="border h-[80vh] overflow-y-auto p-2 flex flex-col">
          {Array.from({ length: 50 }).map((list, idx) => (
            <li className="flex items-center gap-2">
              <div>{idx + 1}</div>
              <div className="flex-1">User name</div>
              <div>
                <button>Edit</button>
              </div>
              <div>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <button
            onClick={() => navigate("/")}
            className="border my-2 w-full h-10 hover:bg-black hover:text-white"
          >
            Add new user
          </button>
        </div>
      </section>
    </>
  );
};

export default FormList;
