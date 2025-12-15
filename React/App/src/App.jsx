import React from "react";
import FormOne from "./Project/FormOne/FormOne";
import AuthOne from "./Project/AuthOne/AuthOne";
import { Provider } from "react-redux";
import store from "./Project/AuthOne/Redux/store";
import GlobalProvider from "./Project/FormOne/Global/GlobalProvider";

const App = () => {
  return (
    <>
      {/* <GlobalProvider>
        <FormOne />
      </GlobalProvider> */}
      <Provider store={store}>
        <AuthOne />
      </Provider>
    </>
  );
};

export default App;
