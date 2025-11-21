import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ContextApi } from "../Context/ContextApi";

const FormOne = () => {
  const navigate = useNavigate();
  const { store, addUser, updateUser } = useContext(ContextApi);
  const { id } = useParams();

  const editObject = store.find((u) => u.id === id);
  const { register, handleSubmit } = useForm({
    defaultValues: editObject || {},
  });
  // console.info(id);

  // console.info(editObject);

  const onSubmit = async (data) => {
    if (editObject) {
      await updateUser(id, data)
    } else {
      if (data.name.trim() !== "") {
        await addUser({ ...data, id: String(store.length + 1) });
      }
    }
  };

  const handleNavigate = () => {
    navigate("/list");
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
          <div className="flex items-center gap-2">
            <input
              type="submit"
              className="border flex-1 h-10 cursor-pointer hover:bg-black hover:text-white"
              value={editObject ? "Update" : "Submit"}
              onClick={handleNavigate}
            />
            <button
              type="button"
              onClick={handleNavigate}
              className="flex-1 border h-10 hover:bg-black hover:text-white"
            >
              View
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormOne;
