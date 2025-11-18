import { useForm } from "react-hook-form";

const FormOne = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.info(data);
  };
  return (
    <>
      <section className="border h-dvh grid place-items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border w-[300px] p-2 flex flex-col gap-4"
        >
          <div>
            <input
              type="text"
              className="border w-full px-2 h-10"
              placeholder="Enter a name"
              {...register("name")}
            />
          </div>
          <div>
            <input
              type="email"
              className="border w-full px-2 h-10"
              placeholder="Enter a email"
              {...register("email")}
            />
          </div>
          <div>
            <input
              type="submit"
              className="border w-full h-10 cursor-pointer hover:bg-black hover:text-white"
              value="Submit"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default FormOne;
