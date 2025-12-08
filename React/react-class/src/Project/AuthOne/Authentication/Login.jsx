import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (data) => {
    console.info(data);
  };
  return (
    <>
      <section className="h-[90vh] grid place-items-center">
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="flex flex-col gap-3 w-[400px] p-2 [&_input]:w-full [&_input]:h-10 [&_input]:px-2 [&_input]:shadow-2xl [&_input]:focus:outline-0"
        >
          <div className="">
            <input
              type="email"
              placeholder="Enter a email"
              {...register("email", { required: "Please enter a email" })}
            />
            <p className="text-red-800">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Enter a password"
              {...register("password", { required: "Please enter a password" })}
            />
            <p className="text-red-800">
              {errors.password && errors.password.message}
            </p>
          </div>
          <div className="">
            <p>
              Not registered ? <NavLink to={"/register"}>Register</NavLink>
            </p>
          </div>
          <div className="">
            <button className="w-full h-10 text-blue-600 outline hover:bg-blue-600 hover:text-white cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
