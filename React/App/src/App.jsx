import React from "react";
import FormOne from "./Project/FormOne/FormOne";
import AuthOne from "./Project/AuthOne/AuthOne";
import { Provider } from "react-redux";
import store from "./Project/AuthOne/Redux/store";

const App = () => {
  return (
    <>
      {/* <FormOne /> */}
      <Provider store={store}>
        <AuthOne />
      </Provider>
    </>
  );
};

export default App;
