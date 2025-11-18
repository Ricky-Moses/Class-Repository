import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContextOne from "../Context/ContextOne";

const ListOne = () => {
  const navigate = useNavigate();
  const { store } = useContext(ContextOne);
  return (
    <>
      <section className="border h-dvh flex flex-col justify-center items-center gap-2 p-2 ">
        <div className="h-5/6 overflow-y-auto">
          <table className="border w-[400px]">
            <tbody>
              {store?.map((list, idx) => (
                <tr>
                  <td className="border p-2">{idx + 1}</td>
                  <td className="border p-2">User Name</td>
                  <td className="border p-2">
                    <button>Edit</button>
                  </td>
                  <td className="border p-2">
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <button className="border px-3 py-1" onClick={() => navigate("/")}>
            Add New Data
          </button>
        </div>
      </section>
    </>
  );
};

export default ListOne;
