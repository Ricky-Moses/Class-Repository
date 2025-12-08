import React from "react";
import AuthOne from "./Project/AuthOne/AuthOne";
import { Provider } from "react-redux";
import store from "./Project/AuthOne/Redux/Store";
// import FormHomeOne from "./Project/FormOne/FormHomeOne";

const App = () => {
  return (
    <>
      {/* <FormHomeOne /> */}
      <Provider store={store}>
        <AuthOne />
      </Provider>
    </>
  );
};

export default App;
