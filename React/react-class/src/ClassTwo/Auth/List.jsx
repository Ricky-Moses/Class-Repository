import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalApi from "../Context/GlobalApi";

const List = () => {
  const navigate = useNavigate();
  const { store, deleteUser } = useContext(GlobalApi);
  return (
    <>
      <section className="h-dvh flex flex-col p-5 gap-3">
        <ul className="border h-[80vh] p-2 overflow-y-auto">
          {store?.map((list, idx) => (
            <li key={list.id} className="flex items-center gap-3 p-2">
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
        <button className="border" onClick={() => navigate("/")}>
          Add new user
        </button>
      </section>
    </>
  );
};

export default List;
