import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import GlobalApi from "../Context/GlobalApi";

const Register = () => {
  const navigate = useNavigate();
  const { store, addUser, updateUser } = useContext(GlobalApi);
  const { id } = useParams();

  const editForm = store.find((u) => u.id === id);
  const { register, handleSubmit } = useForm({
    defaultValues: editForm ?? {},
  });

  console.info(editForm);
  const handleNavigate = () => {
    navigate("/list");
  };

  const onSubmit = async (data) => {
    if (editForm) {
      await updateUser(id, data);
    } else {
      await addUser({ ...data, id: String(store.length + 1) });
    }
  };
  return (
    <>
      <section className="h-dvh grid place-items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border w-[400px] p-2 flex flex-col gap-5"
        >
          <div className="">
            <input
              type="text"
              className="w-full h-10 px-3 border"
              placeholder="Enter a name"
              {...register("name")}
            />
          </div>
          <div className="">
            <input
              type="email"
              className="w-full h-10 px-3 border"
              placeholder="Enter an email"
              {...register("email")}
            />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="submit"
              onClick={handleNavigate}
              className="border flex-1 h-10"
              value="Submit"
            />
            <button
              type="button"
              onClick={handleNavigate}
              className="flex-1 border h-10"
            >
              View List
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
