import React from "react";
import { useForm } from "react-hook-form";

const FormOne = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.info(data)
  };
  return (
    <>
      <section className="h-dvh bg-slate-700 grid place-items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-900 w-[400px] p-2 rounded text-white"
        >
          <table className="w-full">
            <tbody>
              <tr>
                <td className="p-2">Name: </td>
                <td className="p-2">
                  <input
                    className="w-full h-10 bg-white text-black px-2"
                    placeholder="Enter a name"
                    type="text"
                    {...register("name", {
                      required: "Enter a name",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 letters must",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </td>
              </tr>
              <tr>
                <td className="p-2">Email: </td>
                <td className="p-2">
                  <input
                    className="w-full h-10 bg-white text-black px-2"
                    placeholder="Enter an email"
                    type="email"
                    {...register("email", {
                      required: "Enter an email",
                      minLength: {
                        message: "Minimum 3 letters must",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </td>
              </tr>
              <tr>
                <td className="p-2" colSpan="2">
                  <input
                    className="w-full h-10 border"
                    type="submit"
                    value="Submit"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </section>
    </>
  );
};

export default FormOne;
