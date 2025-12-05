import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import GlobalContext from "./Context/GlobalContext";
import FormList from "./Form/FormList";
import List from "./Form/List";

const FormOne = () => {
  const { store, addUser } = useContext(GlobalContext);
  // const [formData, setFormData] = useState([]);

  console.info(store);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    addUser({ ...data, id: String(store.length + 1) });
    
  };
  return (
    <>
      <section className="grid grid-cols-2 h-dvh gap-3">
        <FormList
          register={register}
          handleSubmit={handleSubmit}
          handleFormSubmit={handleFormSubmit}
          errors={errors}
        />
        <List />
      </section>
    </>
  );
};

export default FormOne;
