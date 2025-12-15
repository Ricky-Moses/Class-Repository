import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/Thunk/AuthThunk";
import { NavLink } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(registerUser(data));
    console.info(data);
  };
  return (
    <>
      <section className="h-[80vh] grid place-items-center">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-5 w-[400px] [&_input]:w-full [&_input]:h-10 [&_input]:border [&_input]:px-3"
        >
          <h1 className="text-center text-2xl font-bold">Register</h1>
          <div className="">
            <input
              type="text"
              placeholder="Enter a name"
              {...register("name")}
            />
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Enter a email"
              {...register("email")}
            />
          </div>
          <div className="">
            <input
              type="password"
              placeholder="Enter a password"
              {...register("password")}
            />
          </div>
          <div>
            <p>
              Are you member ? <NavLink to={"/login"}>Login</NavLink>
            </p>
          </div>
          <div>
            <button className="w-full h-10 outline">Register</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
