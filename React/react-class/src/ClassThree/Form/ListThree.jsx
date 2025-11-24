import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

const ListThree = () => {
  const { store } = useContext(GlobalContext);
  console.info(store);
  return (
    <>
      <section className="">
        <ul>
          {store.length > 0 &&
            store.map((list, idx) => (
              <li key={list.id}>
                <div>{idx + 1}</div>
                <div>{list.name}</div>
                <div>
                  <button>Edit</button>
                </div>
                <div>
                  <button>Delete</button>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default ListThree;
