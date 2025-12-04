import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import GlobalContext from "./Context/GlobalContext";

const FormOne = () => {
  const { store } = useContext(GlobalContext);
  const [formData, setFormData] = useState([]);

  console.info(store);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {};
  return (
    <>
      <section className="grid grid-cols-2 h-dvh gap-3">
        <fieldset className="border grid place-items-center">
          <form
            onSubmit={handleSubmit(handleFormSubmit)}
            className="border w-5/6 h-11/12 flex flex-col gap-5 p-5"
          >
            <div>
              <input
                type="text"
                placeholder="Enter a name"
                className="w-full h-10"
                {...register("name", {
                  required: "Please enter a name",
                })}
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter a email"
                className="w-full h-10"
                {...register("email", {
                  required: "Please enter a email",
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Enter a number"
                className="w-full h-10"
                {...register("number", {
                  required: "Please enter a number",
                })}
              />
              {errors.number && (
                <p className="text-red-500">{errors.number.message}</p>
              )}
            </div>
            <div>
              <input
                type="submit"
                className="outline w-full h-10"
                value="Submit"
              />
            </div>
          </form>
        </fieldset>
        <ul className="border"></ul>
      </section>
    </>
  );
};

export default FormOne;
