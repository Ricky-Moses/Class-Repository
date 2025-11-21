import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleNavigate = () => {
    navigate("/list");
  };

  const onSubmit = (data) => {
    console.info(data);
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
