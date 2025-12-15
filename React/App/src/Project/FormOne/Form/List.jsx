import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

const List = ({ handleEdit }) => {
  const { store, deleteUser } = useContext(GlobalContext);
  return (
    <>
      <section className="">
        <ul className="flex flex-col gap-5 p-2">
          {store.length > 0 ? (
            store?.map((list, idx) => (
              <li key={list.id} className="flex items-center gap-5 p-2">
                <div className="">{idx + 1}</div>
                <div className="flex-1">{list.name}</div>
                <div className="">
                  <button
                    onClick={() => handleEdit(list)}
                    className="outline text-lime-500 hover:bg-lime-500 hover:text-white px-5"
                  >
                    Edit
                  </button>
                </div>
                <div className="">
                  <button
                    onClick={() => deleteUser(list.id)}
                    className="outline text-rose-500 hover:bg-rose-500 hover:text-white px-5"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li>No user data founded</li>
          )}
        </ul>
      </section>
    </>
  );
};

export default List;
