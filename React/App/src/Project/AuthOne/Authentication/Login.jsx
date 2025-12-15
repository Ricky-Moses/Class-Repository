import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginUser } from "../Redux/Thunk/AuthThunk";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };
  return (
    <>
      <section className="h-[80vh] grid place-items-center">
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-5 w-[400px] [&_input]:w-full [&_input]:h-10 [&_input]:border [&_input]:px-3"
        >
          <h1 className="text-center text-2xl font-bold">Login</h1>
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
              Are you member, yet ? <NavLink to={"/register"}>Register</NavLink>
            </p>
          </div>
          <div>
            <button className="w-full h-10 outline">Login</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
