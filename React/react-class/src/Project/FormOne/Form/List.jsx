import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

const List = () => {
  const { store } = useContext(GlobalContext);
  return (
    <>
      <ul className="border flex flex-col gap-5 p-3 overflow-y-scroll">
        {store && store.map((list, idx) => (
            <li key={list.id} className="flex  items-center p-2 gap-5 shadow">
                <div>{idx + 1}</div>
                <div className="flex-1">{list.name}</div>
                <div>
                    <button>Edit</button>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </li>
        ))}
      </ul>
    </>
  );
};

export default List;
