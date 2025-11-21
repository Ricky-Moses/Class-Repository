import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../Context/ContextApi";

const FormList = () => {
  const navigate = useNavigate();
  const { store, deleteUser } = useContext(ContextApi);
  // console.info(store)
  return (
    <>
      <section className="p-2 flex flex-col justify-center h-dvh">
        <ul className="border h-[70vh] overflow-y-auto p-2 flex flex-col">
          {store?.map((list, idx) => (
            <li key={list.id} className="flex items-center gap-2">
              <div>{idx + 1}</div>
              <div className="flex-1">{list.name}</div>
              <div>
                <button onClick={() => navigate(`/edit/${list.id}`)}>
                  Edit
                </button>
              </div>
              <div>
                <button onClick={() => deleteUser(list.id)}>Delete</button>
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
