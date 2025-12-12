import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

const List = () => {
  const { store } = useContext(GlobalContext);
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
                  <button>Edit</button>
                </div>
                <div className="">
                  <button>Delete</button>
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
