import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import GlobalContext from "../Context/GlobalContext";

const Todo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { store, addUser } = useContext(GlobalContext);

  const handleFormSubmit = (data) => {
    addUser({ ...data, id: String(store.length + 1) });
  };
  return (
    <>
      <section className="grid place-items-center">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="border w-1/2 flex flex-col gap-3 p-2 [&_input]:w-full [&_input]:h-10 [&_input]:px-2"
        >
          <h1 className="text-2xl font-bold text-center">ToDo Form</h1>
          <div className="">
            <input
              type="text"
              placeholder="Enter a name"
              {...register("name", {
                required: "Please enter name",
              })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Enter a email"
              {...register("email", {
                required: "Please enter email",
              })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="">
            <input
              type="tel"
              placeholder="Enter a phone"
              {...register("phone", {
                required: "Please enter phone",
                maxLength: {
                  value: 10,
                  message: "10 digit must",
                },
              })}
            />
            {errors.phone && (
              <p className="text-red-600">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <button className="outline w-full h-10">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Todo;
