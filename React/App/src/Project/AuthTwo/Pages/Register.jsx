import React from "react";
import { useForm } from "react-hook-form";
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.info(data);
  };
  return (
    <>
      <section className="h-[90vh] grid place-items-center">
        <form
          onSubmit={handleSubmit(submitForm)}
          className=" w-[400px] [&_input]:w-full p-2"
        >
          <h1>Register</h1>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter your name</legend>
            <input
              type="text"
              className="input"
              placeholder="user name"
              {...register("name", {
                required: "Please enter a name",
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter your email</legend>
            <input
              type="email"
              className="input"
              placeholder="user email"
              {...register("email", {
                required: "Please enter an email",
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Enter your password</legend>
            <input
              type="password"
              className="input"
              placeholder="user password"
              {...register("password", {
                required: "Please enter a password",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </fieldset>
          <button type="submit" className="btn btn-info">
            Register
          </button>
        </form>
      </section>
    </>
  );
};

export default Register;
