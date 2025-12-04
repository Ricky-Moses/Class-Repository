import React from "react";
import FormOne from "./FormOne";
import GlobalProvider from "./Global/GlobalProvider";

const FormHomeOne = () => {
  return (
    <>
      <GlobalProvider>
        <FormOne />
      </GlobalProvider>
    </>
  );
};

export default FormHomeOne;
