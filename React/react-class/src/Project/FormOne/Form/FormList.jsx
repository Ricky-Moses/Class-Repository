import React from "react";

const FormList = ({ register, handleSubmit, handleFormSubmit, errors }) => {
  return (
    <>
      <fieldset className="border grid place-items-center">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="border w-5/6 h-11/12 flex flex-col gap-5 p-5 [&_input]:outline [&_input]:px-2"
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
                maxLength: {
                  value: 10,
                  message: "Must have 10 digits",
                },
              })}
            />
            {errors.number && (
              <p className="text-red-500">{errors.number.message}</p>
            )}
          </div>
          <div>
            <button className="outline w-full h-10">Submit</button>
          </div>
        </form>
      </fieldset>
    </>
  );
};

export default FormList;
