import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { useNavigate } from "react-router-dom";

const ListThree = () => {
  const { store, deleteUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  console.info(store);
  return (
    <>
      <section className=" p-4">
        <ul className="flex flex-col gap-3">
          {store.length > 0 &&
            store.map((list, idx) => (
              <li key={list.id} className="flex items-center gap-4">
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
      </section>
    </>
  );
};

export default ListThree;
