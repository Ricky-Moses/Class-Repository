import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

const RegisterThree = () => {
  const { register, handleSubmit } = useForm();
  const { store, addUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const handleOnSubmit = async (data) => {
    await addUser({...data, id: String(store.length + 1)});
  };
  return (
    <>
      <section className="grid place-items-center h-dvh">
        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="border w-[300px] p-2 flex flex-col gap-3"
        >
          <div className="">
            <input
              type="text"
              className="px-3 h-10 border w-full"
              placeholder="Enter a name"
              {...register("name")}
            />
          </div>
          <div className="">
            <input
              type="email"
              className="px-3 h-10 border w-full"
              placeholder="Enter an email"
              {...register("email")}
            />
          </div>
          <div className="flex items-center gap-3">
            <input type="submit" className="border flex-1" value="Submit" />
            <button
              type="button"
              onClick={() => navigate("/list")}
              className="border flex-1"
            >
              View
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default RegisterThree;
